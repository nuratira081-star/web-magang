import { Link } from 'react-router-dom'

export default function NewsCard({ article, featured = false }) {
  return (
    <Link
      to={`/news/${article.slug}`}
      className={`bg-white border border-[var(--color-outline-variant)] hover:border-[var(--color-accent)] group transition-all duration-300 flex flex-col ${featured ? 'lg:flex-row lg:items-stretch lg:col-span-2' : ''}`}
    >
      <div className={`overflow-hidden bg-slate-100 ${featured ? 'lg:w-1/2 aspect-video lg:aspect-auto' : 'aspect-video'}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className={`p-4 md:p-6 flex flex-col justify-center flex-1`}>
        <div className="flex items-center gap-2 mb-2">
          <span className="badge !px-2 !py-0.5 !text-[8px]">{article.category}</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{article.date}</span>
        </div>
        <h3
          className={`font-black text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-tight mb-2 ${
            featured ? 'text-lg md:text-xl lg:text-2xl' : 'text-[14px] md:text-base'
          }`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {article.title}
        </h3>
        <p className="text-[12px] md:text-[14px] text-[var(--color-secondary)] line-clamp-2 leading-relaxed mb-4">
          {article.summary}
        </p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-accent)] text-[10px] font-black">
              {article.author?.[0]}
            </div>
            <p className="text-[10px] font-black text-[var(--color-primary)] uppercase truncate max-w-[60px]">{article.author}</p>
          </div>
          <span className="text-[9px] font-bold text-slate-400 uppercase">{article.readTime}</span>
        </div>
      </div>
    </Link>
  )
}
