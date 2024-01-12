import React from "react";

function PlayerBlock({ player, team, action }) {
  return (
    <img
      alt={player}
      src={
        action === "shoot_long" && player === "Gerrard"
          ? require(`../images/${player}_shoot_long.png`)
          : require(`../images/${player}_standing.png`)
      }
      width={"50px"}
      style={
        team === "Away"
          ? { transform: "scaleX(-1)", position: "absolute" }
          : { position: "absolute" }
      }
    ></img>
  );
}

export default PlayerBlock;
