import React from "react";
import "./PlayerBlock.css";

function PlayerBlock({ player, team, gameState }) {
  let action = gameState?.posessor_action;
  let result = gameState?.phase_result;
  let posessingPlayer = gameState?.posessing_player;

  console.log(result);
  console.log(action);

  if (result) {
    return (
      <>
        <p className="player_name">{player}</p>
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
      </>
    );
  } else if (action) {
    return (
      <>
        <p className="player_name">{player}</p>
        <img
          alt={player}
          src={require(`../images/${action}.png`)}
          width={"50px"}
          style={
            team === "Away"
              ? { transform: "scaleX(-1)", position: "absolute" }
              : { position: "absolute" }
          }
        ></img>
      </>
    );
  } else if (posessingPlayer === player) {
    return (
      <>
        <p className="player_name">{player}</p>
        <img
          alt={player}
          src={require(`../images/posession.png`)}
          width={"50px"}
          style={
            team === "Away"
              ? { transform: "scaleX(-1)", position: "absolute" }
              : { position: "absolute" }
          }
        ></img>
      </>
    );
  } else
    return (
      <>
        <p className="player_name">{player}</p>
        <img
          alt={player}
          src={require(`../images/${player}_standing.png`)}
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

export default PlayerBlock;
