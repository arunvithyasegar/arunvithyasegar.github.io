import { professionalWork } from '@/data/professional';
export default function ProfessionalWork() {
  return (
    <section
      id="selected-work"
      className="p-section"
      aria-labelledby="professional-work"
    >
      <div className="p-section-head">
        <div>
          <p className="p-section-num">Work / Professional experience</p>
          <h2 id="professional-work">Selected work</h2>
        </div>
        <p>
          Non-confidential role summaries. Internal applications, founder
          records and committee materials are not published here.
        </p>
      </div>
      <div className="p-help">
        {professionalWork.map((item) => (
          <article key={item.title}>
            <p className="eyebrow">{item.status}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
