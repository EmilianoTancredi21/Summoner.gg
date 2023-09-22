import React from "react";
import "../../../styles/Board.scss";
import MemoBlock from "../MemoBlock/MemoBlock";

const Board = ({ animating, handleMemoClick, memoBlocks }: any) => {
  return (
    <main className="board">
      {memoBlocks.map((memoBlock: any, i: any) => (
        <MemoBlock
          key={`${i}_${memoBlock.image}`}
          animating={animating}
          handleMemoClick={handleMemoClick}
          memoBlock={memoBlock}
        />
      ))}
    </main>
  );
};

export default Board;
