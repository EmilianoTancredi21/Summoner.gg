import SectionDivider from "../Divider/Divider";
import Image from "next/image";
import "../../../styles/Home.scss";
import "../../../styles/Skills.scss";

export default function ChampionSkills(props: any) {
  return (
    <div>
      <div className="linea-divisora">
        <SectionDivider title="SKILLS" />
      </div>
      <div className="container row m-auto">
        <div className="col-12 col-md-6 d-flex align-items-start chipi">
          <Image
            className="me-2"
            src={`https://ddragon.leagueoflegends.com/cdn/13.18.1/img/passive/${props.passive.image.full}`}
            alt=""
            width={60}
            height={60}
          />
          <div>
            <strong>{props.passive.name}</strong>
            <p>{props.passive.description.replace(/(<([^>]+)>)/gi, "")}</p>
          </div>
        </div>
        {props.spells.map((spell: Record<string, any>) => (
          <div
            key={spell.id}
            className="col-12 col-md-6 d-flex align-items-start chipi"
          >
            <Image
              className="me-2"
              src={`https://ddragon.leagueoflegends.com/cdn/13.18.1/img/spell/${spell.image.full}`}
              alt=""
              width={60}
              height={60}
            />
            <div>
              <strong>{spell.name}</strong>
              <p>{spell.description.replace(/(<([^>]+)>)/gi, "")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
