/** Real figures re-rendered from the public notebooks' saved Plotly data. */
export default function ProjectPreview({ trade = false }: { trade?: boolean }) {
  const image = trade
    ? '/images/projects/trade-export-output.webp'
    : '/images/projects/news-sentiment-output.webp';
  const notebook = trade
    ? 'https://github.com/arunvithyasegar/UN_Trade/blob/26ab95a863fac9a0dc50128d83f6410616c702ad/Trade_Data_Analysis_Global_Exports_of_Electrical_Machinery_(HS_Code_85).ipynb'
    : 'https://github.com/arunvithyasegar/News_sentiment_Analysis/blob/ca44b2e65cf2dfabf3269c2d2c0b9d0481df21a6/News_Sentiment_analysis.ipynb';
  return (
    <figure className="p-visual p-visual--image">
      <a
        href={image}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View full ${trade ? 'trade analysis' : 'news sentiment'} figure (opens in a new tab)`}
      >
        {/* biome-ignore lint/performance/noImgElement: Static export uses optimised local WebP without the next/image runtime. */}
        <img
          src={image}
          width={1200}
          height={650}
          loading="lazy"
          decoding="async"
          alt={
            trade
              ? 'Saved notebook chart of electrical machinery exports for Armenia, India, and Bosnia Herzegovina from 2016 to 2024.'
              : 'Saved news sentiment analysis: 14 neutral headlines, 4 negative, and 2 positive in this sample.'
          }
        />
      </a>
      <figcaption>
        Saved notebook output{' '}
        <a href={notebook} target="_blank" rel="noopener noreferrer">
          Source notebook <span aria-hidden="true">→</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </figcaption>
    </figure>
  );
}
