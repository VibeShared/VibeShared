"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/componenet/imageloader.module.css";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ImageWithLoader({
  src,
  alt,
  width,
  height,
  className,
}: ImageWithLoaderProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`position-relative d-inline-block ${className || ""}`}>
      {/* Spinner */}
      {loading && (
        <div className={`d-flex justify-content-center align-items-center ${styles.loaderOverlay}`}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Next.js Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`rounded shadow ${loading ? "opacity-0" : "opacity-100"} transition-opacity`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
