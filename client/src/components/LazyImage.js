import { useState } from 'react';

/**
 * Lazy-loaded image with optional blur placeholder.
 * Uses native loading="lazy" for broad browser support.
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  width,
  height,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={`lazy-img ${loaded ? 'lazy-img--loaded' : ''} ${className}`.trim()}
      onLoad={() => setLoaded(true)}
      {...rest}
    />
  );
}
