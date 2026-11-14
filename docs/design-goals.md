# Design Goals

These principles guide changes to the site.

## Easy to fork

A new contributor should be able to clone the repository, start the site, and
find the main content without learning the internals of Next.js. Fork-specific
settings should be documented, searchable, and kept in as few places as
practical.

## Fast by default

The production site is a static export, so routes must remain statically
renderable. Keep client-side JavaScript and third-party code modest. Measure
performance before adding complexity intended to improve it.

## Easy to change

- Keep components and data files focused.
- Put similar features in similar places.
- Prefer readable code over clever abstractions.
- Automate formatting and routine checks.
- Remove dead code and stale documentation.
- Add a dependency when it is maintained and clearly cheaper than owning the
  equivalent code.

## Stable for forks

Prefer mature tools, explicit types, and repeatable builds. Test published
content, metadata, accessibility-sensitive behavior, and static deployment.
When a change affects fork configuration or public routes, document the
migration.

## Visual design

The approved portfolio pairs a charcoal-and-mint dark theme with a clean
paper-and-green light theme. Respect the visitor’s existing theme choice and
system preference. Shared CSS tokens keep navigation, content, social cards,
icons, browser chrome, and controls consistent.

The homepage is a quiet, editorial workspace: a decision-focused introduction,
current role and focus, two public projects, writing, ways to help, a four-step
workflow, and an open invitation to talk. The portrait caption and Stats page show a live, eleven-decimal age based on the confirmed 6 August 1999, 06:54 IST birth instant. Inter sets the homepage type; long-form
writing and the résumé retain the reading-focused typography. The header keeps
Work, Writing, About, and Contact; additional destinations remain in the footer.

Project previews are genuine figures from the owner’s saved public notebook outputs, with source links and access to full-sized images. They are labelled saved notebook outputs, not live dashboard screenshots. Actual dashboards and code remain one click away.
Writing uses real published content and reading-time estimates from its word
count. Do not invent client results or credentials to fill visual space.

The workflow highlights Question → Evidence → Insight → Decision once on entry,
with an optional replay. Content remains readable without JavaScript. Reduced
motion bypasses animation. A visible email link remains available. At the owner’s request, normal page selection, context menus, and copy actions are restored. Client-side blocking is not scraping prevention. Mobile Work and Contact links stay visible, and the menu includes secondary routes. The continuously updating age remains present but visually quiet on the homepage.

The design was approved in chat before production implementation. The live
implementation preserves the static export, existing routes, profile/schema
identity, GTM container, and optional publication configuration. The latest
owner-supplied brief updates the profile location to Chennai, India.

The implementation lives in `src/components/Home/`, `src/components/Template/Hero.tsx`,
and `app/styles/pages/home.css` with shared theme tokens.

## References

- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [Rules of React](https://react.dev/reference/rules)
