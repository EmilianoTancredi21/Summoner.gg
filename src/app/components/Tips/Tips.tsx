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
    <div className="">
      <div className="linea-divisora">
        <SectionDivider title="TIPS" />
      </div>
      <div className="tips">
        <h4 className="ally">{`Jugando con ${championName}`}</h4>
        <ul>
          {allyTips &&
            allyTips.map((tip, index) => <li key={index}>● {tip}</li>)}
        </ul>
        <h4 className="enemy">{`Jugando contra ${championName}`}</h4>
        <ul>
          {enemyTips &&
            enemyTips.map((tip, index) => <li key={index}>● {tip}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Tips;
