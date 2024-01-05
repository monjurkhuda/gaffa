import React, { useState } from "react";

function PitchBlock({ showCoordinates, coordinates, gameState }) {
  //const [showCoordinates, setShowCoordinates] = useState(false);

  return (
    <div className="pitch_block">
      {gameState.ball_block}

      {showCoordinates && <div className="coordinates">{coordinates}</div>}
    </div>
  );
}

export default PitchBlock;
