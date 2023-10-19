import React from "react";
import SectionDivider from "../Divider/Divider";
import "../../../styles/Tips.scss";

interface TipsProps {
  allyTips: string[];
  enemyTips: string[];
  championName: string;
}

const Tips: React.FC<TipsProps> = ({ allyTips, enemyTips, championName }) => {
  return (
    <div className="tipsContainer">
      <div className="linea-divisora">
        <SectionDivider title="CONSEJOS" />
      </div>
      <div className="tips">
        <h4 className="ally">{`Jugando con ${championName}`}</h4>
        {allyTips.length > 0 ? (
          <ul>
            {allyTips &&
              allyTips.map((tip, index) => <li key={index}>● {tip}</li>)}
          </ul>
        ) : (
          <p className="tipsNotFound">
            Vaya... parece que los tips sobre este campeón no están disponibles.
          </p>
        )}
        <h4 className="enemy">{`Jugando contra ${championName}`}</h4>
        {enemyTips.length > 0 ? (
          <ul>
            {enemyTips &&
              enemyTips.map((tip, index) => <li key={index}>● {tip}</li>)}
          </ul>
        ) : (
          <p className="tipsNotFound">
            Vaya... parece que los tips sobre este campeón no están disponibles.
          </p>
        )}
      </div>
    </div>
  );
};

export default Tips;
