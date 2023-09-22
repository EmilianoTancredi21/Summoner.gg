"use client";
import { Chip } from "@mui/material";
import "../../../styles/Tags.scss";
import { useEffect, useState } from "react";

export default function ChampionTags({ tag }: { tag?: string }) {
  const [badgeType, setBadgeType] = useState<string>();

  useEffect(() => {
    switch (tag) {
      case "Fighter":
        setBadgeType("Luchador");
        break;
      case "Mage":
        setBadgeType("Mago");
        break;
      case "Marksman":
        setBadgeType("Tirador");
        break;
      case "Assassin":
        setBadgeType("Asesino");
        break;
      case "Tank":
        setBadgeType("Tanque");
        break;
      case "Support":
        setBadgeType("Soporte");
        break;
      default:
        setBadgeType("Default");
        break;
    }
  }, [tag]);

  const getBackgroundColor = () => {
    const element = document.createElement("span");
    element.className = `bg-${badgeType}`;
    document.body.appendChild(element);
    const color = getComputedStyle(element).backgroundColor;
    document.body.removeChild(element);
    return color;
  };

  return (
    <Chip
      style={{ backgroundColor: getBackgroundColor() }}
      label={badgeType?.toUpperCase()}
    />
  );
}
