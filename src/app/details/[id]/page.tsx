"use client";

import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";
import ChamnpionSkins from "@/app/components/Skins/Skins";
import ChampionSkills from "@/app/components/Skills/Skills";
import { horizontalImageChamp } from "@/helpers/apis";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import ChampionTags from "@/app/components/ChampionTags/ChampioTags";
import "../../../styles/ChampDetails.scss";
import "../../../styles/Home.scss";

const ChampionDetail = () => {
  const [champion, setChampion] = useState<any>();
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
          setChampion(data);
        });
    }
  }, []);

  if (!champion) {
    return <div></div>;
  }
  return (
    <div>
      <NavBar />
      <div
        className="champ_details_main"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(9, 11, 22, 0.329) 0%, #1e2234 100%), url('${horizontalImageChamp}${championId}_0.jpg')`,
          width: "90vw",
        }}
      >
        <div className="champion-header">
          <div className="container row m-auto">
            <div className="col-lg-auto col-md-12 d-flex align-items-start">
              {champion?.id && (
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${champion?.id}.png`}
                  alt=""
                  width={90}
                  height={90}
                  style={{ paddingRight: "8px" }}
                />
              )}

              <div className="mx-3">
                <h5 className="m-0">
                  <strong>{champion?.name}</strong>
                </h5>
                <span className="d-block text-nowrap">{champion?.title}</span>
                {champion?.tags?.map((tag: string) => (
                  <ChampionTags key={tag} tag={tag} />
                ))}
              </div>
            </div>
            <div className="col">
              <p className="m-0 text-justify">{champion?.lore}</p>
            </div>
          </div>
        </div>
      </div>
      <section className="home">
        <ChampionSkills passive={champion?.passive} spells={champion?.spells} />
      </section>
      <section className="home">
        <ChamnpionSkins championId={champion?.id} skins={champion?.skins} />
        <Footer />
      </section>
    </div>
  );
};

export default ChampionDetail;
