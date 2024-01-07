import React, { useState } from "react";

function PitchBlock({ showCoordinates, coordinates, gameState }) {
  //const [showCoordinates, setShowCoordinates] = useState(false);

  return (
    <div className="pitch_block">
      {gameState.defender_block === coordinates &&
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

      {showCoordinates && <div className="coordinates">{coordinates}</div>}
    </div>
  );
}

export default PitchBlock;
