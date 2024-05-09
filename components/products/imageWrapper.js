"use client";
import Image from "next/image";
import { useState } from "react";

function ImageWrapper({ selectedProdcut, styles }) {
  const [activeImge, setActiveImg] = useState(selectedProdcut.imageUrl.image1);
  return (
    <div className={styles.imgWrapper}>
      <div>
        <Image
          className={styles.bigImage}
          width={400}
          height={400}
          alt={selectedProdcut.name}
          src={activeImge}
        />
      </div>
      <div className={styles.smallImages}>
        {Object.values(selectedProdcut.imageUrl).map((img) => (
          <Image
            className={`${activeImge === img ? styles.active : ""}`}
            onClick={() => setActiveImg(img)}
            key={img}
            src={img}
            width={400}
            height={400}
            priority
            alt={img}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageWrapper;
