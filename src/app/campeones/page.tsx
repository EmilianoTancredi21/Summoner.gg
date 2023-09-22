"use client";

import ChampsGrid from "../components/champs/ChampsGrid";
import { useEffect } from "react";
import { getChamps } from "@/service/getAllChamps";
import { useAppStore } from "../Zustand/store";
import { ChampsFilter } from "../components/champs/ChampsFilter";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "../../styles/Home.scss";

function Champs() {
  const setChamps = useAppStore((state) => state.setChamps);

  useEffect(() => {
    getChamps().then((data) => setChamps(Object.values(data)));
  }, [setChamps]);

  return (
    <div className="home">
      <NavBar />
      <h1 className="home_title" id="back-to-top-anchor">
        Encuentra tu estilo de juego
      </h1>
      <ChampsFilter />
      <ChampsGrid />
      <Footer />
    </div>
  );
}

export default Champs;
