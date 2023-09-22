import ChampsCard from "./ChampsCard";
import { useAppStore } from "../../Zustand/store";
import "../../../styles/ChampsGrid.scss";

function ChampsGrid(): JSX.Element {
  const champs = useAppStore((state) => state.champs);

  return (
    <>
      {champs.length === 0 ? (
        <div className="no_fav_container">
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
