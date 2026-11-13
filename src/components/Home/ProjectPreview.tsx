/** Conceptual illustrations, deliberately labelled rather than implying measured results. */
export default function ProjectPreview({ trade = false }: { trade?: boolean }) {
  return (
    <div className="p-visual">
      <div className="p-vlabel">
        <span>
          {trade ? 'India / HS Code 85 / 2016–2024' : 'News sentiment / NLP'}
        </span>
        <span>Conceptual preview</span>
      </div>
      <svg
        viewBox="0 0 320 100"
        role="img"
        aria-label={
          trade
            ? 'Illustrative export bars; not measured trade values'
            : 'Illustrative sentiment trends; not measured project results'
        }
      >
        <line className="p-gridline" x1="0" x2="320" y1="30" y2="30" />
        <line className="p-gridline" x1="0" x2="320" y1="65" y2="65" />
        {trade ? (
          [29, 34, 27, 42, 46, 40, 59, 67, 81].map((height, index) => (
            <rect
              key={height}
              className="p-bar"
              x={10 + index * 34}
              y={90 - height}
              width="21"
              height={height}
            />
          ))
        ) : (
          <>
            <path
              className="p-dataline p-line-enter"
              d="M0 65 L25 60 L45 70 L68 35 L92 45 L115 27 L139 49 L161 40 L185 52 L207 22 L229 30 L251 13 L274 28 L296 14 L320 20"
            />
            <path
              className="p-dataline p-dataline-secondary"
              d="M0 47 L25 54 L45 40 L68 66 L92 53 L115 75 L139 60 L161 70 L185 56 L207 77 L229 63 L251 81 L274 66 L296 76 L320 69"
            />
          </>
        )}
      </svg>
    </div>
  );
}
