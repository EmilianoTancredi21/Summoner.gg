"use client";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
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

  const handleSlideComplete = (selectedIndex: number) => {
    setCurrentSlide(selectedIndex);
  };

  return (
    <div className="">
      <div className="linea-divisora">
        <SectionDivider title="SKINS" />
      </div>
      <div className="fullContainer">
        <h3 className="skin-text">{images[currentSlide]?.name}</h3>
        <div className="carousel-container">
          <Carousel
            activeIndex={currentSlide}
            onSelect={handleSlideComplete}
            interval={2500}
            indicators={true}
            controls={true}
            fade={true}
          >
            {images.map((image: any, index: number) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.url}
                  alt={image.name}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
