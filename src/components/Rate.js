import React from "react";

export default function Rate({ rating, setSearchRate }) {
  let arr = [];

  for (let i = 0; i < 5; i++) {
    if (rating > i) {
      arr.push(
        <span
          className="rating"
          style={{ cursor: "pointer" }}
          onClick={() => setSearchRate(i + 1)}
        >
          ★
        </span>
      );
    } else {
      arr.push(
        <span
          className="rating"
          style={{ cursor: "pointer" }}
          onClick={() => setSearchRate(i + 1)}
        >
          ☆
        </span>
      );
    }
  }

  return arr;
}
