import React, { useState } from "react";
import "./PitchBlock.css";
import PlayerBlock from "./PlayerBlock";

function PitchBlock({ showCoordinates, coordinates, gameState, pitchObj }) {
  let coordinatesNum = Number(coordinates);

  return (
    <div className="pitch_block">
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

      {pitchObj[coordinates].Player && (
        <PlayerBlock
          player={pitchObj[coordinates].Player}
          team={pitchObj[coordinates].Team}
          gameState={gameState}
          coordinates={coordinates}
        />
      )}

      {/* {pitchObj[coordinates].Player &&
        gameState.ball_block === coordinatesNum &&
        !gameState.dribble_to_block && (
          <PlayerBlock
            player={pitchObj[coordinates].Player}
            team={pitchObj[coordinates].Team}
            gameState={gameState}
            coordinates={coordinates}
          />
        )}

      {pitchObj[coordinates].Player &&
        gameState.ball_block !== coordinatesNum && (
          <PlayerBlock
            player={pitchObj[coordinates].Player}
            team={pitchObj[coordinates].Team}
            coordinates={coordinates}
          />
        )}

      {gameState.dribble_to_block === coordinatesNum && (
        <PlayerBlock
          player={gameState.posessing_player}
          team={pitchObj[coordinates].Team}
          gameState={gameState}
          coordinates={coordinates}
        />
      )} */}

      {showCoordinates && <div className="coordinates">{coordinates}</div>}
    </div>
  );
}

export default PitchBlock;
