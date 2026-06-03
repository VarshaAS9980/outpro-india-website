import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog.js';
import './Blog.css';

export default function Blog() {
  return (
    <>
      <section className="section section--tight-top page-hero">
        <p className="section__eyebrow">Blog</p>
        <h1 className="section__title">Insights for serious digital programs.</h1>
        <p className="section__lead">
          Long-form guidance on performance, analytics, design systems, and delivery governance. Swap
          this static feed for a headless CMS or WordPress REST source when editorial workflows go live.
        </p>
      </section>

      <section className="section section--pad-bottom">
        <ul className="blog-list">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <article className="card blog-card">
                <div className="blog-card__meta">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>{post.readMinutes} min read</span>
                </div>
                <h2>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                <ul className="blog-card__tags" aria-label="Tags">
                  {post.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <Link className="blog-card__more" to={`/blog/${post.slug}`}>
                  Read article →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
