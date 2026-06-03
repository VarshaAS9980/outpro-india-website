import { Link, useParams } from 'react-router-dom';
import { getPostBySlug } from '../data/blog.js';
import './BlogPost.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <section className="section section--tight-top">
        <h1>Article not found</h1>
        <p>This slug is not published yet.</p>
        <Link to="/blog" className="btn btn--primary">
          Back to blog
        </Link>
      </section>
    );
  }

  return (
    <>
      <article className="section section--tight-top blog-article">
        <Link to="/blog" className="back-link">
          ← Blog
        </Link>
        <header className="blog-article__header">
          <p className="section__eyebrow">Article</p>
          <h1>{post.title}</h1>
          <div className="blog-article__meta">
            <time dateTime={post.date}>{post.date}</time>
            <span>{post.readMinutes} min read</span>
          </div>
          <ul className="blog-article__tags">
            {post.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </header>
        <div className="blog-article__body">
          {post.body.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </article>
    </>
  );
}
