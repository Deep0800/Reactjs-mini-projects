import React, { useState } from "react";

const reactions = ["💖", "👍", "🥰", "😍", "😡", "💙"];
function EmojiLive() {
  const [selectedReaction, setSelectedReaction] = useState(null);
  return (
    <div>
      <h3>Select your reaction</h3>
      <div>
        {reactions.map((value, index) => {
          return (
            <button
              key={index}
              style={{
                fontSize: "2rem",
                margin: "5px",
                padding: "10px",
                border:
                  selectedReaction === value
                    ? "2px solid #007bff"
                    : "1px solid #ccc",
                borderRadius: "10px",
                cursor: "pointer",
                backgroundColor:
                  selectedReaction === value ? "#e0f0ff" : "white",
              }}
              
              onClick={() => {
                setSelectedReaction(value);
              }}
            >
              {value}
            </button>
          );
        })}
      </div>
      {selectedReaction && (
        <div>
          <p>You selected {selectedReaction} reaction</p>
          <button onClick={() => setSelectedReaction(null)}>Clear</button>
        </div>
      )}
    </div>
  );
}

export default EmojiLive;
