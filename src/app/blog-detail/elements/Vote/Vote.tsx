"use client";

import { useState } from "react";
import greenheart from "../../../../assets/vote/greenheart.png";
import hushedface from "../../../../assets/vote/hushedface.png";
import poutingface from "../../../../assets/vote/poutingface.png";
import starstruck from "../../../../assets/vote/starstruck.png";
import thumbsup from "../../../../assets/vote/thumbsup.png";
import yawingface from "../../../../assets/vote/yawningface.png";
import Image from "next/image";

const reactions = [
  { id: "helpful", emoji: greenheart, label: "Hữu ích" },
  { id: "love", emoji: hushedface, label: "Yêu thích" },
  { id: "fun", emoji: poutingface, label: "Thú vị" },
  { id: "surprised", emoji: starstruck, label: "Bất ngờ" },
  { id: "bored", emoji: thumbsup, label: "Nhàm chán" },
  { id: "angry", emoji: yawingface, label: "Tức giận" },
];

const initialCounts = {
  helpful: 1,
  love: 2,
  fun: 0,
  surprised: 1,
  bored: 0,
  angry: 48,
};

const Vote = () => {
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
  const [counts, setCounts] = useState<any>(initialCounts);

  const handleReactionClick = (reactionId: string) => {
    if (selectedReaction === reactionId) return; // Prevent multiple clicks

    setCounts((prev: { [x: string]: number }) => ({
      ...prev,
      [reactionId]: prev[reactionId] + 1,
    }));

    setSelectedReaction(reactionId);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm text-center w-full">
      <p className="font-semibold text-lg">Bạn thấy bài viết như thế nào?</p>
      <p className="text-gray-500 text-sm">
        {`${Object.values(counts).reduce((a: any, b) => a + b)}`} phản hồi
      </p>

      <div className="flex justify-center items-center mt-3 space-x-2 md:mx-[100px]">
        {reactions.map((reaction) => (
          <button
            key={reaction.id}
            className={`flex flex-col flex-auto items-center md:px-2 py-1 rounded-md transition ${
              selectedReaction === reaction.id
                ? "border-2 border-[#108058] text-[#108058]"
                : "border border-transparent"
            }`}
            onClick={() => handleReactionClick(reaction.id)}
          >
            <Image
              src={reaction.emoji}
              alt="Author Logo"
              className="w-12 h-12"
            />
            <span className="font-bold text-sm my-2">
              {counts[reaction.id]}
            </span>
            <span
              className={`text-xs  ${
                selectedReaction === reaction.id
                  ? "text-[#108058]"
                  : "text-gray-500"
              }`}
            >
              {reaction.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Vote;
