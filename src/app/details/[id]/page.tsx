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
import { Grid, Typography } from "@mui/material";
import "../../../styles/ChampDetails.scss";
import "../../../styles/Home.scss";

const ChampionDetail = () => {
  const [champion, setChampion] = useState<any>();
  let params = useParams();
  const championId = params.id;

  // useEffect(() => {
  //   if (championId)
  //     axios
  //       .get(
  //         `https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_AR/champion/${championId}.json`
  //       )
  //       .then((response) => {
  //         const data = response.data.data[championId];
  //         setChampion(data);
  //       });
  // }, []);

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
    <div className="home">
      <NavBar />
      <div
        className="champ_details_main"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(9, 11, 22, 0.329) 0%, #1e2234 100%), url('${horizontalImageChamp}${championId}_0.jpg')`,
        }}
      >
        <div className="champion-header">
          <Grid container justifyContent="flex-end">
            <Grid item></Grid>
          </Grid>
          <Grid container alignItems="start">
            {champion?.id && (
              <Grid item>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${champion?.id}.png`}
                  alt=""
                  width={90}
                  height={90}
                  priority={true}
                />
              </Grid>
            )}
            <Grid item xs={12} lg={true} md={12}>
              <Grid container direction="column" sx={{ mx: 3 }}>
                <Grid item>
                  <Typography variant="h5" component="div" sx={{ m: 0 }}>
                    <strong>{champion?.name}</strong>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ display: "block", whiteSpace: "nowrap" }}
                    style={{ textTransform: "capitalize" }}
                  >
                    {champion?.title}
                  </Typography>
                </Grid>
                <Grid item>
                  {champion?.tags?.map((tag: any) => (
                    <ChampionTags key={tag} tag={tag} />
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="div">
                {champion?.lore}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="home">
        <ChampionSkills passive={champion?.passive} spells={champion?.spells} />
        <ChamnpionSkins championId={champion?.id} skins={champion?.skins} />
        <Footer />
      </div>
    </div>
  );
};

export default ChampionDetail;
