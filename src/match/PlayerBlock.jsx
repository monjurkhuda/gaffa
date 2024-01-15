import React from "react";
import "./PlayerBlock.css";

function PlayerBlock({ player, team, gameState, coordinates }) {
  let coordinatesNum = Number(coordinates);

  let action = gameState?.posessor_action;
  let result = gameState?.phase_result;
  let posessingPlayer = gameState?.posessing_player;
  let defenderBlock = gameState?.defender_block;
  let defenderActionBlock = gameState?.defender_action_block;

  console.log(defenderBlock, defenderActionBlock, coordinatesNum);

  if (result && gameState.ball_block === coordinatesNum) {
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
  } else if (action && player === posessingPlayer) {
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
  } else if (defenderBlock === coordinatesNum && defenderActionBlock) {
    return <></>;
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
