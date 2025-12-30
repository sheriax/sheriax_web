type VideoPlayerProps = { src: string; poster?: string; title?: string };

export default function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10">
      <video
        className="h-full w-full"
        controls
        preload="none"
        poster={poster}
        title={title}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
