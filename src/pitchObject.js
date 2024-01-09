let gameState = {
  game_phase: "kickoff",
  //time: 5280,
  time: 0,
  home_form: 4231,
  away_form: 532,
  home_score: 0,
  away_score: 0,
  game_over: false,
  posessing_team: "Home",

  off_ball_attacker: "",
  off_ball_attacker_action: "",

  ball_block: "E09",
  posessing_player: "Gerrard",
  posessor_action: "",
  dribble_to_block: "",
  success_chance: 0,

  defender_block: "",
  defending_player: "",
  defender_action: "",
  defender_action_block: "",

  phase_result: "",

  commentary: "Kick off!",
};

let homeFormations = {
  4231: { 500: "GK", 402: "LCB", 510: "CAM", 512: "ST" },
};

let awayFormations = {
  532: { 515: "GK", 713: "LCB", 313: "RCB", 510: "CDM" },
};

let lineupData = {
  Home: {
    GK: {
      GK: "DeGea",
    },
    Def: {
      LCB: "VanDijk",
    },
    Mid: {
      CAM: "Gerrard",
    },
    Att: {
      ST: "Gullit",
    },
  },

  Away: {
    GK: {
      GK: "DeGea",
    },
    Def: {
      LCB: "Vidic",
      RCB: "Matic",
    },
    Mid: {
      CDM: "Fred",
    },
  },
};

let pitchObject = {};
pitchObject = {};

for (let i = 100; i < 1000; i += 100) {
  for (let j = 1; j < 16; j++) {
    pitchObject[i + j] = {};
  }
}

Object.keys(homeFormations[gameState.home_form]).map((n) => {
  let zone = n % 100;

  if (zone < 1) {
    return (pitchObject[n] = {
      Team: "Home",
      Position: homeFormations[gameState.home_form][n],
      Player: lineupData.Home.GK.GK,
    });
  } else if (zone >= 1 && zone <= 3) {
    return (pitchObject[n] = {
      Team: "Home",
      Position: homeFormations[gameState.home_form][n],
      Player: lineupData.Home.Def[homeFormations[gameState.home_form][n]],
    });
  } else if (zone >= 5 && zone <= 10) {
    return (pitchObject[n] = {
      Team: "Home",
      Position: homeFormations[gameState.home_form][n],
      Player: lineupData.Home.Mid[homeFormations[gameState.home_form][n]],
    });
  } else {
    return (pitchObject[n] = {
      Team: "Home",
      Position: homeFormations[gameState.home_form][n],
      Player: lineupData.Home.Att[homeFormations[gameState.home_form][n]],
    });
  }
});

Object.keys(awayFormations[gameState.away_form]).map((n) => {
  let zone = n % 100;

  if (zone > 13) {
    return (pitchObject[n] = {
      Team: "Away",
      Position: awayFormations[gameState.away_form][n],
      Player: lineupData.Away.GK.GK,
    });
  } else if (zone >= 12 && zone <= 14) {
    return (pitchObject[n] = {
      Team: "Away",
      Position: awayFormations[gameState.away_form][n],
      Player: lineupData.Away.Def[awayFormations[gameState.away_form][n]],
    });
  } else if (zone >= 5 && zone <= 11) {
    return (pitchObject[n] = {
      Team: "Away",
      Position: awayFormations[gameState.away_form][n],
      Player: lineupData.Away.Mid[awayFormations[gameState.away_form][n]],
    });
  } else {
    return (pitchObject[n] = {
      Team: "Away",
      Position: awayFormations[gameState.away_form][n],
      Player: lineupData.Away.Att[awayFormations[gameState.away_form][n]],
    });
  }
});

// for (let i in homeFormations[gameState.home_form]) {
//   console.log(typeof pitchObject.Home[i]);
//   pitchObject.Home[i] = {
//     Gerrard: 89,
//     Vidic: 56,
//   };
// }

console.log(pitchObject);
