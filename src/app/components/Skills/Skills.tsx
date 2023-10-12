"use client";
import axios from "axios";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import "../../../styles/Home.scss";
import "../../../styles/Skills.scss";
import SectionDivider from "../Divider/Divider";

export default function ChampionSkills(props: any) {
  const [champion, setChampion] = useState<any>();
  const [videoError, setVideoError] = useState(false);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeAbility, setActiveAbility] = useState<any>(props.passive);

  const handleVideoError = () => {
    setVideoError(true);
  };

  let params = useParams();
  const championId = params.id;

  useEffect(() => {
    if (championId && typeof championId === "string") {
      axios
        .get(
          `https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_AR/champion/${championId}.json`
        )
        .then((response) => {
          const data = response.data.data[championId];
          const championKey = data.key.padStart(4, "0");

          setChampion({ ...data, key: championKey });
          console.log(championKey);

          setActiveIndex(0); // Activa el passive por defecto
          setActiveAbility(props.passive); // Establece el passive como activo por defecto
        });
    }
  }, []);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, props.spells.length);
  }, [props.spells.length]);

  const championKey = champion?.key;
  console.log(championKey);

  const handleAbilityClick = (index: number, ability: any) => {
    setActiveIndex(index);
    setActiveAbility(ability);
  };

  const abilityNames = ["Passive:", "Q:", "W:", "E:", "R:"];
  const abilityName = ["P1", "Q1", "W1", "E1", "R1"];

  return (
    <div>
      <div className="linea-divisora">
        <SectionDivider title="HABILIDADES" />
      </div>
      <div className="sec2">
        <div className="abilities-wrapper">
          <div className="abilities-flex">
            <div className="abilities">
              <div className="ability-list">
                {props.passive && (
                  <div
                    className={`ability-item ${
                      activeIndex === 0 ? "active" : ""
                    }`}
                    onClick={() => handleAbilityClick(0, props.passive)}
                  >
                    <Image
                      className="me-2"
                      src={`https://ddragon.leagueoflegends.com/cdn/13.18.1/img/passive/${props.passive.image.full}`}
                      alt=""
                      width={60}
                      height={60}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                )}
              </div>
            </div>

            {props.spells.map((spell: any, index: number) => {
              return (
                <div key={spell.id} className="abilities">
                  <div className="ability-list">
                    <div
                      className={`ability-item ${
                        activeIndex === index + 1 ? "active" : ""
                      }`}
                      onClick={() => handleAbilityClick(index + 1, spell)}
                    >
                      <Image
                        className="me-2"
                        src={`https://ddragon.leagueoflegends.com/cdn/13.18.1/img/spell/${spell.image.full}`}
                        alt=""
                        width={60}
                        height={60}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {activeAbility && (
            <div className="ability-info">
              <strong className="ability-info-name">{`${abilityNames[activeIndex]} ${activeAbility.name}`}</strong>
              <p className="ability-info-desc">
                {activeAbility.description.replace(/(<([^>]+)>)/gi, "")}
              </p>
            </div>
          )}
        </div>
        <div className="video-container">
          {videoError ? (
            <div className="videoError">
              <Image
                src="https://res.cloudinary.com/dg8awhbvm/image/upload/v1696535297/no-ability-background-b82287ba3e7f3b6af9cde0a994af0829_mm5lqe.jpg"
                alt=""
                width={300}
                height={200}
                className="image1"
              />
              <div className="superpuesto">
                <img
                  src="https://res.cloudinary.com/dg8awhbvm/image/upload/v1696535454/no-ability-icon-3a12d11f77a64872a4800722e1a63844_nnlnjr.png"
                  alt=""
                  className="image2"
                />
                <p className="text-error">
                  NO SE PUEDE MOSTRAR ESTA HABILIDAD EN VIDEO.
                </p>
              </div>
            </div>
          ) : (
            <video controls onError={handleVideoError} key={activeIndex}>
              {championKey && (
                <source
                  src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${championKey}/ability_${championKey}_${abilityName[activeIndex]}.webm`}
                  type="video/webm"
                />
              )}
              Tu navegador no admite la reproducción de videos.
            </video>
          )}
        </div>
      </div>
    </div>
  );
}
