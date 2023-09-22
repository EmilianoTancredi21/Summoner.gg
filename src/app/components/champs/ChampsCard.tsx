import Link from "next/link";
import Image from "next/image";
import { Ichamps } from "../../../types/champs.types";
import { splitName } from "../../../helpers/spltName";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useRef, useState } from "react";
import "../../../styles/ChampCard.scss";

const ChampsCard = ({ id, title, image, tags }: Ichamps): JSX.Element => {
  const elementoRef = useRef<HTMLLIElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const elemento = elementoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (elemento) {
      observer.observe(elemento);
    }
  }, []);

  return (
    <li
      key={id}
      className={`card_champ ${isIntersecting ? "show" : "hidden"}`}
      ref={elementoRef}
    >
      <div className="card_champ_img">
        <Link href={`/details/${id}`} className="card_champ_link" id={id}>
          <Image
            src={image}
            alt={image}
            width={350}
            height={500}
            priority={true}
          />
        </Link>
        <div className="card_champ_info">
          <div className="card_champ_info_name">{splitName(id)}</div>
          <div
            className="card_champ_info_title"
            style={{ textTransform: "capitalize" }}
          >
            {title}
          </div>
          <div className="card_champ_info_tags">
            {tags.map((tag) => {
              return (
                <Tooltip title={`${tag}`} arrow key={`${tag}`}>
                  <Image
                    src={`/tags/${tag}.png`}
                    alt={`${id + tag}`}
                    key={`${id + tag}`}
                    width={300}
                    height={300}
                  />
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ChampsCard;
