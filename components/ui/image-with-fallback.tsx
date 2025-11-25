import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
}

export function ImageWithFallback({
    src,
    fallbackSrc = 'https://placehold.co/600x400?text=Image+Not+Found',
    alt,
    ...props
}: ImageWithFallbackProps) {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <img
            {...props}
            src={imgSrc}
            alt={alt || 'Image'}
            onError={() => setImgSrc(fallbackSrc)}
        />
    );
}
