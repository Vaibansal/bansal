import { useState } from 'react';
import { ArrowLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const videos = [
  { title: 'Video 1', src: '', description: 'Coming soon' },
  { title: 'Video 2', src: '', description: 'Coming soon' },
  { title: 'Video 3', src: '', description: 'Coming soon' },
  { title: 'Video 4', src: '', description: 'Coming soon' },
  { title: 'Video 5', src: '', description: 'Coming soon' },
  { title: 'Video 6', src: '', description: 'Coming soon' },
];

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <span className="font-serif text-xl font-semibold text-foreground">Videos</span>
        </div>
      </div>

      {/* Featured Player */}
      {activeVideo !== null && videos[activeVideo].src && (
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <video
            controls
            autoPlay
            className="w-full rounded-xl shadow-lg aspect-video bg-muted"
            src={videos[activeVideo].src}
          />
          <h2 className="font-serif text-2xl font-semibold text-foreground mt-4">
            {videos[activeVideo].title}
          </h2>
          <p className="text-muted-foreground mt-1">{videos[activeVideo].description}</p>
        </div>
      )}

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-8">
          {activeVideo !== null ? 'More Videos' : 'All Videos'}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <button
              key={i}
              onClick={() => video.src && setActiveVideo(i)}
              className="group text-left rounded-xl border border-border bg-card overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video bg-muted flex items-center justify-center relative">
                {video.src ? (
                  <video src={video.src} className="w-full h-full object-cover" muted preload="metadata" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <Play size={32} />
                    <span className="text-xs">No video yet</span>
                  </div>
                )}
                {video.src && (
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                    <Play size={40} className="text-background opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-serif font-semibold text-foreground">{video.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{video.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
