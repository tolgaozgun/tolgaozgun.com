import { Image, ImageProps, Skeleton } from '@mantine/core';
import { useState } from 'react';

interface ImageWithSkeletonProps extends ImageProps {
  src: string;
  alt: string;
  sWidth?: number;
  sHeight?: number;
}

function ImageWithSkeleton({ src, alt, sWidth, sHeight, ...props }: ImageWithSkeletonProps) {
  const [loading, setLoading] = useState(true);

  console.log('ImageWithSkeleton', loading);

  return (
    <div>
      {loading && (
        <Skeleton
          circle
          height={props.h ? (props.h as number) : sHeight ? sHeight : 200}
          width={props.w ? (props.w as number) : sWidth ? sWidth : 200}
        />
      )}
      <Image
        src={src}
        alt={alt}
        hidden={loading}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        display={loading ? 'none' : 'block'}
        {...props}
      />
    </div>
  );
}

export default ImageWithSkeleton;
