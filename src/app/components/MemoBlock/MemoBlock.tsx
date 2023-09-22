import React from "react";
import "../../../styles/MemoBlock.scss";
import Image from "next/image";

const MemoBlock = ({ animating, handleMemoClick, memoBlock }: any) => (
  <div
    className="memo-block"
    onClick={() =>
      !memoBlock.flipped && !animating && handleMemoClick(memoBlock)
    }
  >
    <div
      className={`memo-block-inner ${
        memoBlock.flipped && "memo-block-flipped"
      }`}
    >
      <div className="memo-block-front"></div>
      <div className="memo-block-back">
        <Image
          src={memoBlock.image}
          width={1200}
          height={700}
          alt=""
          className="memo-image"
        />
      </div>
    </div>
  </div>
);

export default MemoBlock;
