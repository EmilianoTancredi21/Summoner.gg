"use client";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import Image from "next/image";
import "../../styles/Items.scss";
import "../../styles/Divider.scss";
import { ItemSearch } from "../components/ItemSearch/ItemSearch";

interface Item {
  name: string;
  image: any;
  gold: any;
  plaintext: string;
  description: string;
}

const removeTags = (text: string): string => {
  const regex = /<[^>]+>/g;
  return text.replace(regex, "");
};

const Items = (): JSX.Element => {
  const [itemsData, setItemsData] = useState<Item[]>([]);

  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  const searchItems = (searchTerm: string): void => {
    const filtered = itemsData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const traerItems = async (): Promise<void> => {
    try {
      const response = await axios.get(
        "http://ddragon.leagueoflegends.com/cdn/13.19.1/data/es_AR/item.json"
      );

      const items: { [key: string]: Item } = response.data.data;
      const itemsData: Item[] = Object.values(items)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item) => ({
          name: removeTags(item.name),
          image: `http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${item.image.full}`,
          gold: item.gold.total,
          plaintext: item.plaintext,
          description: removeTags(item.description),
        }));

      const uniqueItemsData: Item[] = itemsData.filter(
        (item, index, self) =>
          self.findIndex((i) => i.name === item.name) === index
      );

      setItemsData(uniqueItemsData);

      console.log(items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    traerItems();
  }, []);

  return (
    <div className="body-items">
      <NavBar />
      <h1 className="items-title">Variedad de Items para todos los roles</h1>
      <ItemSearch onSearch={searchItems} />
      <div className="containerItems">
        {filteredItems.length === 0 ? (
          <div className="notFound">
            <h3>No se encontraron resultados.</h3>
          </div>
        ) : (
          filteredItems.map((item, index) => (
            <div key={index} className="itemsInfo">
              <div className="imageContainer">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                />
                <div className="popup">
                  <p>{item.description}</p>
                  <p>Coste: {item.gold}</p>
                </div>
              </div>
              <div className="itemsText">
                <p>{item.name}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Items;
