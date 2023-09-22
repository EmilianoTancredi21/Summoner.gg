"use client";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { imageBlock } from "@/resource/images/cloudinaryImage";
import "../../styles/Memo.scss";
import "../../styles/Home.scss";
import Board from "../components/Board/Board";

const Memo = () => {
  const [shuffledMemoBlock, setShuffledMemoBlock] = useState([]);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const shuffledImageBlock = shuffleArray([...imageBlock, ...imageBlock]);
    setShuffledMemoBlock(
      shuffledImageBlock.map((image: any, i: any) => ({
        index: i,
        image,
        flipped: false,
      }))
    );
  }, []);

  const shuffleArray = (a: any) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const handleMemoClick = (memoBlock: any) => {
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
