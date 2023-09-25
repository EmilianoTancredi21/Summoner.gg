"use client";

import React, { FC, useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { imageBlock } from "@/resource/images/cloudinaryImage";
import "../../styles/Memo.scss";
import "../../styles/Home.scss";
import Board from "../components/Board/Board";

interface MemoBlock {
  index: number;
  image: string;
  flipped: boolean;
}

const Memo: FC = () => {
  const [shuffledMemoBlock, setShuffledMemoBlock] = useState<MemoBlock[]>([]);
  const [animating, setAnimating] = useState<boolean>(false);
  const [selectedMemoBlock, setselectedMemoBlock] = useState<MemoBlock | null>(
    null
  );

  useEffect(() => {
    const shuffledImageBlock = shuffleArray([...imageBlock, ...imageBlock]);
    setShuffledMemoBlock(
      shuffledImageBlock.map((image: string, i: number) => ({
        index: i,
        image,
        flipped: false,
      }))
    );
  }, []);

  const shuffleArray = (a: any[]): any[] => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const handleMemoClick = (memoBlock: MemoBlock): void => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...shuffledMemoBlock];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlock(shuffledMemoBlocksCopy);
    if (selectedMemoBlock === null) {
      setselectedMemoBlock(memoBlock);
    } else if (selectedMemoBlock.image === memoBlock.image) {
      setselectedMemoBlock(null);
    } else {
      setAnimating(true);
      setTimeout(() => {
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlocksCopy.splice(
          selectedMemoBlock.index,
          1,
          selectedMemoBlock
        );
        setShuffledMemoBlock(shuffledMemoBlocksCopy);
        setselectedMemoBlock(null);
        setAnimating(false);
      }, 1000);
    }
  };

  return (
    <div className="">
      <NavBar />
      <Board
        memoBlocks={shuffledMemoBlock}
        animating={animating}
        handleMemoClick={handleMemoClick}
      />
      <div className="home">
        <Footer />
      </div>
    </div>
  );
};

export default Memo;
