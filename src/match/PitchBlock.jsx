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

      {gameState.ball_block === coordinatesNum ? (
        <p className="commentary_text">{gameState.commentary}</p>
      ) : (
        <></>
      )}

      {gameState.defender_block === coordinatesNum &&
      gameState.defender_action &&
      !gameState.defender_action_block ? (
        <p className="commentary_text">{gameState.commentary}</p>
      ) : gameState.dribble_to_block === "" &&
        gameState.ball_block === coordinates ? (
        <p className="commentary_text">{gameState.commentary}</p>
      ) : gameState.dribble_to_block === coordinates ? (
        <p className="commentary_text">{gameState.commentary}</p>
      ) : (
        <></>
      )}

      {pitchObj[coordinates].Team === "Home" &&
        (pitchObj[coordinates].Player === "Gerrard" ||
          pitchObj[coordinates].Player === "VanDijk" ||
          pitchObj[coordinates].Player === "DeGea") && (
          <img
            alt={pitchObj[coordinates].Player}
            src={require(`../images/${pitchObj[coordinates].Player}_standing.png`)}
            width={"50px"}
          ></img>
        )}

      {pitchObj[coordinates].Team === "Away" &&
        (pitchObj[coordinates].Player === "Matic" ||
          pitchObj[coordinates].Player === "Vidic" ||
          pitchObj[coordinates].Player === "DeGea") && (
          <img
            alt={pitchObj[coordinates].Player}
            src={require(`../images/${pitchObj[coordinates].Player}_standing.png`)}
            width={"50px"}
            style={{ transform: "scaleX(-1)" }}
          ></img>
        )}

      {showCoordinates && <div className="coordinates">{coordinates}</div>}
    </div>
  );
}

export default PitchBlock;
