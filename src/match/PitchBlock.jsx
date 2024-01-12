import React, { useState } from "react";
import "./PitchBlock.css";

function PitchBlock({ showCoordinates, coordinates, gameState, pitchObj }) {
  //const [showCoordinates, setShowCoordinates] = useState(false);

  let coordinatesNum = Number(coordinates);

  // console.log(typeof gameState.ball_block);
  // console.log(typeof coordinates);

  return (
    <div className="pitch_block">
      <p className="player_name">{pitchObj[coordinates].Player}</p>

      {gameState.ball_block === coordinatesNum &&
        (gameState.game_phase === "kickoff" ||
          gameState.game_phase === "defender_action") && (
          <p className="commentary_text">{gameState.commentary}</p>
        )}

      {gameState.defender_action_block === coordinatesNum && (
        <p className="commentary_text">{gameState.commentary}</p>
      )}

      {!gameState.defender_action_block &&
        gameState.defender_block === coordinatesNum &&
        gameState.game_phase === "off_ball_action" && (
          <p className="commentary_text">{gameState.commentary}</p>
        )}

      {/* {pitchObj[coordinates].Team === "Home" &&
        pitchObj[coordinates].Player && (
          <img
            alt={pitchObj[coordinates].Player}
            src={require(`../images/${pitchObj[coordinates].Player}_standing.png`)}
            width={"50px"}
          ></img>
        )} */}

      {pitchObj[coordinates].Player &&
        gameState.ball_block !== coordinatesNum && (
          <img
            alt={pitchObj[coordinates].Player}
            src={require(`../images/${pitchObj[coordinates].Player}_standing.png`)}
            width={"50px"}
            style={
              pitchObj[coordinates].Team === "Away"
                ? { transform: "scaleX(-1)", position: "absolute" }
                : { position: "absolute" }
            }
          ></img>
        )}

      {gameState.ball_block === coordinatesNum &&
        !gameState.dribble_to_block && (
          <img
            alt={pitchObj[coordinates].Player}
            src={require(`../images/${gameState.posessing_player}_standing.png`)}
            width={"50px"}
            style={
              pitchObj[coordinates].Team === "Away"
                ? { transform: "scaleX(-1)", position: "absolute" }
                : { position: "absolute" }
            }
          ></img>
        )}

      {gameState.dribble_to_block === coordinatesNum && (
        <img
          alt={pitchObj[coordinates].Player}
          src={require(`../images/${gameState.posessing_player}_standing.png`)}
          width={"50px"}
          style={
            pitchObj[coordinates].Team === "Away"
              ? { transform: "scaleX(-1)", position: "absolute" }
              : { position: "absolute" }
          }
        ></img>
      )}

      {showCoordinates && <div className="coordinates">{coordinates}</div>}
    </div>
  );
}

export default PitchBlock;
