"use client";

import { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import SectionDivider from "../Divider/Divider";
import "../../../styles/skins.scss";

export default function ChampionSkins({
  championId,
  skins,
}: {
  championId: string;
  skins: any;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = skins.map((skin: any) => ({
    url: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skin.num}.jpg`,
    name: skin.name,
  }));

  console.log(images.map((image) => image.name));

  const handleSlideComplete = (index: number) => {
    setCurrentSlide(index - 1);
  };

  return (
    <div>
      <SectionDivider title="SKINS" />
      <div className="fullContainer">
        <h3 className="skin-text">{images[currentSlide]?.name}</h3>
        <SimpleImageSlider
          width={1215}
          height={717}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          slideDuration={2}
          onCompleteSlide={(index: number) => handleSlideComplete(index)}
        />
      </div>
    </div>
  );
}
