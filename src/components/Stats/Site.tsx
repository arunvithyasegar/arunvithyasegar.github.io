import { countSourceLines } from '../../lib/loc';
import { SOURCE_REPOSITORY } from '../../lib/telemetry';
import Table from './Table';

const COUNTS = ['stargazers_count', 'subscribers_count', 'forks'] as const;
const REPOSITORY = `https://github.com/${SOURCE_REPOSITORY}`;

type CountKey = (typeof COUNTS)[number];
type GitHubCounts = Record<CountKey, number>;

/** The locale is pinned so a published figure cannot depend on the build host. */
function formatCount(count: number): string {
  return count.toLocaleString('en-US');
}

/** Narrow untrusted JSON before any formatter can observe it. */
function isGitHubCounts(value: unknown): value is GitHubCounts {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }
  const data = value as Record<string, unknown>;
  return COUNTS.every(
    (key) =>
      typeof data[key] === 'number' &&
      Number.isSafeInteger(data[key]) &&
      data[key] >= 0,
  );
}

/**
 * Fetch the repository's public counts at build time, or `null` if they cannot
 * be read. Static export requires a cacheable request; the Pages workflow
 * avoids restoring Next's cache so each deployment attempts a fresh read.
 */
async function fetchGitHubCounts(): Promise<GitHubCounts | null> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const response = await fetch(
      `https://api.github.com/repos/${SOURCE_REPOSITORY}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        next: { revalidate: false },
      },
    );

    if (!response.ok) {
      console.warn(
        `GitHub API returned ${response.status}, counts unavailable`,
      );
      return null;
    }

    const data: unknown = await response.json();
    if (!isGitHubCounts(data)) {
      console.warn('GitHub API returned malformed counts, counts unavailable');
      return null;
    }
    return data;
  } catch (error) {
    console.warn('Failed to fetch GitHub counts, counts unavailable:', error);
    return null;
  }
}

/**
 * Site statistics are fully server-rendered and add no client JavaScript.
 *
 * A row belongs here when someone would be interested in the number, not
 * because it can be counted.
 */
export default async function SiteStats({
  snapshotAt = new Date().toISOString(),
}: {
  snapshotAt?: string;
} = {}) {
  const fetched = await fetchGitHubCounts();
  const count = (key: CountKey) =>
    fetched ? formatCount(fetched[key]) : 'Unavailable';

  return (
    <>
      <p className="stats-snapshot">
        Repository snapshot ·{' '}
        <time dateTime={snapshotAt}>
          {new Intl.DateTimeFormat('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'medium',
            timeStyle: 'short',
          }).format(new Date(snapshotAt))}{' '}
          IST
        </time>
        . Refreshed with each deployment, not continuously.
      </p>
      {!fetched && (
        <p className="stats-data-note">
          GitHub counts could not be read during this build.{' '}
          <a href={REPOSITORY}>View the repository directly →</a>
        </p>
      )}
      <Table
        data={[
          {
            label: 'GitHub stars',
            value: count('stargazers_count'),
            link: `${REPOSITORY}/stargazers`,
          },
          {
            label: 'Watchers',
            value: count('subscribers_count'),
            link: `${REPOSITORY}/watchers`,
          },
          {
            label: 'Forks',
            value: count('forks'),
            link: `${REPOSITORY}/network`,
          },
          {
            label: 'Lines of TypeScript powering this site',
            value: formatCount(countSourceLines()),
            link: REPOSITORY,
          },
        ]}
      />
    </>
  );
}
