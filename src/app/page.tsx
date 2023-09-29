"use client";
import { useState } from "react";
import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Button } from "@mui/material";
import Link from "next/link";
import "../styles/Home.scss";
import "../styles/Inicio.scss";
import "../styles/Divider.scss";

function Home() {
  const [selectModo, setSelectModo] = useState(1);

  const handleClick = (modo: any) => {
    setSelectModo(modo);
  };

  const modoSeleccionado =
    selectModo === 1
      ? "Grieta del Invocador"
      : selectModo === 2
      ? "ARAM"
      : selectModo === 3
      ? "Teamfight Tactics"
      : "";

  return (
    <div className="home">
      <NavBar />
      <div className="video-contenido">
        <video autoPlay loop muted>
          <source
            src="https://www.leagueoflegends.com/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm"
            type="video/mp4"
          />
        </video>

        <div id="video-contenedor">
          <div id="video-titulo">
            <Image
              src="/Logos/titulo.png"
              alt="League of Legends"
              width={600}
              height={265}
            />
          </div>

          <div id="video-apps">
            <Link
              href={
                "https://apps.apple.com/es/app/league-of-legends-wild-rift/id1480616990"
              }
              target="_blank"
            >
              <Image
                src="/Logos/appstore.png"
                alt="App Store"
                width={256}
                height={256}
              />
            </Link>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.riotgames.league.wildrift&hl=es_419&gl=US&pli=1"
              }
              target="_blank"
            >
              <Image
                src="/Logos/googleplay.png"
                alt="Google Play"
                width={256}
                height={256}
              />
            </Link>
            <Link
              href={"https://signup.leagueoflegends.com/es-mx/signup/index#/"}
              target="_blank"
            >
              <Image
                src="/Logos/windows.png"
                alt="Windows"
                width={256}
                height={256}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
