import React from "react";

function PlayerBlock({ player, team, gameState }) {
  let action = gameState?.posessor_action;
  let result = gameState?.phase_result;

  if (result) {
    return (
      <>
        <img
          alt={player}
          src={
            result === "defender_wins_tackle"
              ? require(`../images/split_gerrard_posession_left.png`)
              : require(`../images/gerrad_jumpavoidtackle_left.png`)
          }
          width={"50px"}
          style={
            team === "Away"
              ? { transform: "scaleX(-1)", position: "absolute" }
              : { position: "absolute" }
          }
        ></img>

        <img
          alt={player}
          src={
            result === "defender_wins_tackle"
              ? require(`../images/split_vidic_slideTackleSuccess_right.png`)
              : require(`../images/split_vidic_slideTackleFail_right.png`)
          }
          width={"50px"}
          style={
            team === "Away"
              ? { transform: "scaleX(-1)", position: "absolute" }
              : { position: "absolute" }
          }
        ></img>
      </>
    );
  }

  return (
    <img
      alt={player}
      src={
        action === "shoot_long"
          ? require(`../images/Gerrard_shoot_long.png`)
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
