import ChampsCard from "./ChampsCard";
import { useAppStore } from "../../Zustand/store";
import "../../../styles/ChampsGrid.scss";
import Image from "next/image";

function ChampsGrid(): JSX.Element {
  const champs = useAppStore((state) => state.champs);

  return (
    <>
      {champs.length === 0 ? (
        <div className="no_fav_container">
          <Image
            src="https://res.cloudinary.com/dg8awhbvm/image/upload/v1697721349/league-of-legends-riot-games_jsuq3b.gif"
            alt="noData"
            height={400}
            width={400}
          />
          <h2>No se encontraron resultados</h2>
        </div>
      ) : (
        <>
          <ul className="champs_grid">
            {champs.map((c) => {
              return (
                <ChampsCard
                  key={c.id}
                  id={c.id}
                  image={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${c.id}_0.jpg`}
                  title={c.title}
                  tags={c.tags}
                />
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}

export default ChampsGrid;
