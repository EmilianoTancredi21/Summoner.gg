import "../../../styles/Divider.scss";

interface SectionDividerProps {
  title: string;
}

export default function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="section-divider d-flex align-items-center">
      <h2 className="linea-divisora">{title}</h2>
      <div className="ms-auto w-75"></div>
    </div>
  );
}
