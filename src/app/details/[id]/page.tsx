"use client";

import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";
import ChamnpionSkins from "@/app/components/Skins/Skins";
import ChampionSkills from "@/app/components/Skills/Skills";
import SectionDivider from "@/app/components/Divider/Divider";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import ChampionTags from "@/app/components/ChampionTags/ChampioTags";
import { Button, Grid, Typography } from "@mui/material";
import "../../../styles/ChampDetails.scss";
import "../../../styles/Home.scss";

const ChampionDetail = () => {
  const [champion, setChampion] = useState<any>();
  let params = useParams();
  const championId = params.id;

  useEffect(() => {
    if (championId)
      axios
        .get(
          `https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_AR/champion/${championId}.json`
        )
        .then((response) => {
          const data = response.data.data[championId];
          setChampion(data);
        });
  }, [championId]);
  if (!champion) {
    return <div></div>;
  }
  return (
    <div>
      <NavBar />
      <div className="champion-header">
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/campeones">
              <Button size="small" variant="outlined" sx={{ mb: 2 }}>
                Lista de campeones
              </Button>
            </Link>
          </Grid>
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
                {champion?.tags?.map((tag) => (
                  <ChampionTags key={tag} tag={tag} />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="p" component="div">
              {champion?.lore}
            </Typography>
          </Grid>
        </Grid>
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
