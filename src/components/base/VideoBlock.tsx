import React from 'react';

interface VideoBlockProps {
  src: string;
  poster: string
}

const VideoBlock: React.FC<VideoBlockProps> = ({ src, poster }) => {
  return (
    <div>      
      <video poster={poster} preload="auto" autoPlay muted loop className='w-full object-cover h-60 lg:h-96 xl:h-[700px] brightness-50'>
        <source  src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBlock; 
