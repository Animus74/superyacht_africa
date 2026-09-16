export function PhotoFigure({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="photo-figure">
      <img src={src} alt={alt} />
    </figure>
  )
}
