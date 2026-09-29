import { useRef } from 'react';
import { PHOTO_GALLERY } from '../data.js';

export default function PhotoGallery() {
  const trackRef = useRef(null);

  const slide = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  if (!PHOTO_GALLERY.length) {
    return <p className="gallery-empty">Photos coming soon — check back after the next social!</p>;
  }

  return (
    <div className="gallery">
      <button
        type="button"
        className="gallery-arrow gallery-arrow-prev"
        onClick={() => slide(-1)}
        aria-label="Scroll gallery left"
      >
        ‹
      </button>

      <div className="gallery-track" ref={trackRef}>
        {PHOTO_GALLERY.map((file) => (
          <figure className="gallery-item" key={file}>
            <img src={`/assets/photogallery/${file}`} alt="" loading="lazy" />
          </figure>
        ))}
      </div>

      <button
        type="button"
        className="gallery-arrow gallery-arrow-next"
        onClick={() => slide(1)}
        aria-label="Scroll gallery right"
      >
        ›
      </button>
    </div>
  );
}
