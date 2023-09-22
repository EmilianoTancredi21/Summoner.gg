"use client";
import { useState } from "react";
import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
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

      <div id="modos-titulo">
        <h4 className="text-header">Varias formas de JUGAR</h4>
      </div>

      <div id="navegador">
        <div
          className={`navegador-contenido ${selectModo === 1 ? "active" : ""}`}
          onClick={() => handleClick(1)}
        >
          <h4>Grieta del Invocador</h4>
          <Image
            src="/Recusos/grietadel_invocador.jpg"
            alt=""
            width={500}
            height={280}
          />
        </div>
        <div
          className={`navegador-contenido ${selectModo === 2 ? "active" : ""}`}
          onClick={() => handleClick(2)}
        >
          <h4>ARAM</h4>
          <Image src="/Recusos/aram2.jpg" alt="" width={500} height={280} />
        </div>
        <div
          className={`navegador-contenido ${selectModo === 3 ? "active" : ""}`}
          onClick={() => handleClick(3)}
        >
          <h4>Teamfight Tactics</h4>
          <Image src="/Recusos/tft2.jpg" alt="" width={500} height={280} />
        </div>
      </div>

      <div id="modos-contenedor-video">
        <video
          id="modos-video-1"
          autoPlay
          muted
          loop
          style={{ display: selectModo === 1 ? "block" : "none" }}
        >
          <source
            src="https://res.cloudinary.com/dg8awhbvm/video/upload/v1695310839/grietadelinvocador_lr2uoo.mp4"
            type="video/mp4"
          />
        </video>

        <video
          id="modos-video-2"
          autoPlay
          muted
          loop
          style={{ display: selectModo === 2 ? "block" : "none" }}
        >
          <source
            src="https://res.cloudinary.com/dg8awhbvm/video/upload/v1695310839/aram_aocbzw.mp4"
            type="video/mp4"
          />
        </video>

        <video
          id="modos-video-3"
          autoPlay
          muted
          loop
          style={{ display: selectModo === 3 ? "block" : "none" }}
        >
          <source
            src="https://res.cloudinary.com/dg8awhbvm/video/upload/v1695310839/tft_muxji8.mp4"
            type="video/mp4"
          />
        </video>

        <p>
          <span>{modoSeleccionado}</span>
          {selectModo === 1 && (
            <>
              El objetivo de La Grieta del Invocador es simple: destruir el nexo
              enemigo. Para llegar a ello, los campeones deben atravesar las
              diferentes lineas o carriles (lanes) donde combatirán contra los
              campeones enemigos para destruir las torretas, dos por linea
              (cuatro por linea en total), hasta llegar a la base enemiga. La
              fuerza de las torretas crece según su cercanía al nexo.
            </>
          )}
          {selectModo === 2 && (
            <>
              El Abismo de los Lamentos; más conocido como ARAM por siglas del
              inglés All Random All Mid (Todo aleatorio, todos Mid), es un modo
              de juego que permite jugar a todos los jugadores enfrentarse en el
              carril del medio en la zona helada e invernal del mundo del
              Freljord. Los jugadores, deberán batirse en un 5 vs 5 en el carril
              central, donde solamente habrá un inhibidor tanto aliado como
              enemigo y 4 torres para cada equipo; 8 torretas en total en el
              mapa. Asimismo, lo que hace característico a ARAM sobre todo modo
              de juego, es que no existe una selección de campeones, todos es
              aleatorio.
            </>
          )}
          {selectModo === 3 && (
            <>
              TFT es un juego de estrategia por rondas bajo el concepto de usar
              cartas de tus personajes favoritos en un especie de ajedrez en el
              que te enfrentarás a siete oponentes en una competencia por crear
              un poderoso equipo que peleará por ti. Tu objetivo: ser el último
              en quedar en pie.
            </>
          )}
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
