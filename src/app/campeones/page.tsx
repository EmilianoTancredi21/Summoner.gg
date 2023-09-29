"use client";

import ChampsGrid from "../components/champs/ChampsGrid";
import { useEffect } from "react";
import { getChamps } from "@/service/getAllChamps";
import { useAppStore } from "../Zustand/store";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import SearchAppBar from "../components/champs/ChampSearch";
import "../../styles/Home.scss";

function Champs() {
  const setChamps = useAppStore((state) => state.setChamps);

  useEffect(() => {
    getChamps().then((data) => setChamps(Object.values(data)));
  }, [setChamps]);

  return (
    <div className="home">
      <NavBar />
      <h1 className="home_title1" id="back-to-top-anchor">
        ELIGE A TU
      </h1>
      <h2 className="home_title" id="back-to-top-anchor">
        CAMPEÓN
      </h2>
      <h5 className="home_subtitle">
        Teniendo en cuenta que hay más de 140 campeones, no tardarás en
        encontrar tu estilo de juego. Domina a uno o a todos.
      </h5>
      <SearchAppBar />
      <ChampsGrid />
      <Footer />
    </div>
  );
}

export default Champs;
