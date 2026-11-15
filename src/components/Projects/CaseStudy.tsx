import type { caseStudies } from '@/data/caseStudies';
export default function CaseStudy({
  study,
}: {
  study: (typeof caseStudies)[number];
}) {
  const sections = [
    ['Problem', study.problem],
    ['Approach', study.approach],
    ['Tools', study.tools],
    ['Result (quantified)', study.result],
    ['What I’d do next', study.next],
  ];
  return (
    <article className="consulting-page">
      <header className="consulting-intro">
        <p className="eyebrow">Case study stub · evidence pending</p>
        <h1 className="page-title">{study.title}</h1>
        <p>Planning template. This is not a claim of completed client work.</p>
      </header>
      {sections.map(([heading, body]) => (
        <section className="consulting-section" key={heading}>
          <h2>{heading}</h2>
          <p>{body}</p>
        </section>
      ))}
    </article>
  );
}
