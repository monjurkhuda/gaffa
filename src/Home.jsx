import React, { useState, useEffect } from "react";
import "./Home.css";
import background from "./images/pitch.jpg";

// 3 - 2 - 5;
// 3 - 3 - 4;
// 3 - 5 - 2;
// 3 - 4 - 3;

// 4 - 1 - 5;
// 4 - 2 - 4;
// 4 - 3 - 3;
// 4 - 4 - 2;
// 4 - 5 - 1;

// 5 - 1 - 4;
// 5 - 2 - 3;
// 5 - 3 - 2;
// 5 - 4 - 1;

// 4 - 1 - 3 - 2;
// 4 - 1 - 4 - 1;
// 4 - 2 - 3 - 1;
// 4 - 3 - 1 - 2;
// 4 - 3 - 2 - 1;
// 4 - 4 - 1 - 1;

// 4 - 1 - 2 - 1 - 2;

function Home() {
  const [refresh, setRefresh] = useState(false);
  const [showCoordinates, setShowCoordinates] = useState(false);
  const [showPlayerDetails, setShowPlayerDetails] = useState(false);
  const [showPlayerDetailsGerrard, setShowPlayerDetailsGerrard] =
    useState(false);

  const [gameState, setGameState] = useState({
    time: 0,
    homeForm: 4231,
    awayForm: 532,
    homeScore: 0,
    awayScore: 0,
    gameOver: false,
    posessingTeam: "Home",
    offBallAttacker: "",
    offBallAttackerAction: "",
    posessingPlayer: "Gerrard",
    posessorAction: "",
    success_chance: 0,
    defendingPlayer: "",
    defenderActionAction: "",
    dribbleToBlock: "",
    ballBlock: "E09",
    commentary: "Kick off!",
  });

  let homeFormations = {
    4231: { B10: "LW", E09: "CAM", H10: "RW", E12: "ST" },
  };

  let awayFormations = {
    532: {
      A12: true,
      C13: true,
      E13: true,
      G13: true,
      I12: true,
      E10: true,
      C08: true,
      G08: true,
    },
  };

  let teamData = {
    Home: {
      passing: "short",
    },
    Away: {
      pressing: "constant",
    },
  };

  let playerData = {
    Gerrard: {
      position: "CAM",
      zone: "Mid",
      first_touch: 18,
      stamina: 20,
      passing: 19,
      club_loyalty: 20,
      morale: 14,
      dribbling: 16,
      trusts_manager: 10,
      decisions: 18,
      man_marked_by: "",
      personal_traits: {
        one_club_man: true,
      },
      mental_traits: {
        one_club_man: true,
      },
      on_ball_traits: ["try_killer_ball", "pass_wide"],
      off_ball_traits: ["run_forward"],
      instructions: ["shoot_long", "stall"],

      // on_ball_traits: ["dribble", "dribble"],
      // off_ball_traits: ["dribble"],
      // instructions: ["dribble", "dribble"],
    },
    Vidic: {
      position: "CDM",
      strength: 18,
      aggression: 18,
      stamina: 16,
      marking: 20,
    },
    Matic: {
      position: "RCM",
      strength: 18,
      aggression: 18,
      stamina: 16,
      marking: 14,
    },
    Fred: {
      position: "LCM",
      strength: 2,
      aggression: 2,
      stamina: 2,
      marking: 2,
    },
    VanDijk: {
      position: "RCM",
      strength: 18,
      aggression: 18,
      stamina: 16,
      marking: 18,
    },
    Gullit: {
      position: "LCM",
      strength: 18,
      aggression: 18,
      stamina: 16,
      marking: 17,
    },
  };

  let onBallActionsByPosition = {
    CAM: ["dribble", "pass_back"],
    CDM: [],
  };

  let lineupData = {
    Home: {
      Mid: {
        RDM: "VanDijk",
        LDM: "Gullit",
        CAM: "Gerrard",
      },
    },

    Away: {
      Mid: {
        CDM: "Vidic",
        RCM: "Matic",
        LCM: "Fred",
      },
    },
  };

  function posessorAction() {
    let posessingPlyr = gameState.posessingPlayer;

    let instructionWeight = playerData[posessingPlyr].trusts_manager;
    let instructionLength = playerData[posessingPlyr].instructions.length;
    let randInstructionNum = Math.floor(Math.random() * instructionLength);

    let onBallTraitObjLength = playerData[posessingPlyr].on_ball_traits.length;
    let onBallTraitWeight = onBallTraitObjLength * 5;
    let randOnBallTraitNum = Math.floor(Math.random() * onBallTraitObjLength);

    let onBallActionsLength =
      onBallActionsByPosition[playerData[posessingPlyr].position].length;
    let randOnBallActionsNum = Math.floor(Math.random() * onBallActionsLength);
    let onBallActionsWeight =
      onBallActionsLength > 0
        ? onBallActionsLength * 5
        : onBallActionsLength * 5;

    let randNum = Math.floor(
      Math.random() *
        (instructionWeight + onBallTraitWeight + onBallActionsWeight) +
        1
    );

    switch (true) {
      case randNum > 0 && randNum <= instructionWeight:
        //follow an instruction
        gameState.posessorAction =
          playerData[posessingPlyr].instructions[randInstructionNum];
        gameState.commentary = "Instruction followed!";
        break;

      case randNum > instructionWeight &&
        randNum <= instructionWeight + onBallTraitWeight:
        //follow an on ball trait
        gameState.posessorAction =
          playerData[posessingPlyr].on_ball_traits[randOnBallTraitNum];
        gameState.commentary = "Player on ball trait!";
        break;

      case randNum > instructionWeight + onBallTraitWeight:
        //do on ball action
        gameState.posessorAction =
          onBallActionsByPosition[playerData[posessingPlyr].position][
            randOnBallActionsNum
          ];
        gameState.commentary = "Positional on ball action!";
        break;

      default:
        break;
    }

    if (gameState.posessorAction === "dribble") {
      let randNum = Math.floor(Math.random() * 2 + 1);

      switch (randNum) {
        case 1:
          gameState.dribbleToBlock = "D10";
          gameState.commentary = "Gerrard dribbles to his left!";
          break;

        case 2:
          gameState.dribbleToBlock = "F10";
          gameState.commentary = "Gerrard dribbles to his strong right foot!";
          break;

        default:
          break;
      }
    } else {
      gameState.dribbleToBlock = "";
    }
  }

  function defenderAction() {
    let posessingTeam = gameState.posessingTeam;
    let defendingTeam = posessingTeam === "Home" ? "Away" : "Home";
    let defendingPlayer;
    gameState.success_chance = 0;

    if (playerData[gameState.posessingPlayer].man_marked_by) {
      defendingPlayer = playerData[gameState.posessingPlayer].man_marked_by;
    } else {
      let posessingPlayerZone = playerData[gameState.posessingPlayer].zone;
      let defendersInZone = Object.keys(
        lineupData[defendingTeam][posessingPlayerZone]
      ).length;

      let randDefenderNum = Math.floor(Math.random() * defendersInZone + 1);
      let count = 1;

      for (let key in lineupData[defendingTeam][posessingPlayerZone]) {
        if (count === randDefenderNum) {
          defendingPlayer = lineupData[defendingTeam][posessingPlayerZone][key];
          break;
        }
        count++;
      }

      console.log(defendingPlayer);
    }

    let posessorActn = gameState.posessorAction;

    switch (posessorActn) {
      case "pass_back":
        gameState.success_chance += 90;
        break;

      case "dribble":
        if (
          playerData[gameState.posessingPlayer].dribbling >=
          playerData[defendingPlayer].marking
        ) {
          gameState.success_chance += 15;
        }

        if (
          playerData[gameState.posessingPlayer].decisions >=
          playerData[defendingPlayer].aggression
        ) {
          gameState.success_chance += 15;
        }

        if (
          playerData[gameState.posessingPlayer].first_touch >=
          playerData[defendingPlayer].strength
        ) {
          gameState.success_chance += 15;
        }
        break;

      default:
        gameState.success_chance += 5;
        break;
    }
  }

  function offBallAttackerAction() {}

  function gameLogic() {
    setGameState((prevState) => {
      if (prevState.time >= 5400) {
        return { ...prevState, gameOver: true };
      }

      offBallAttackerAction();
      posessorAction();
      defenderAction();

      if (gameState.success_chance > 100) {
        console.log("error: sucess rate over 100");
      }

      let randomSuccess = Math.floor(Math.random() * 100);
      if (randomSuccess <= gameState.success_chance) {
        console.log(gameState.posessorAction, "Success!", randomSuccess);
      } else {
        console.log(gameState.posessorAction, "Failure!", randomSuccess);
      }

      return {
        ...prevState,
        time: prevState.time + 1,
      };
    });
  }

  console.log("posessorAction: ", gameState.posessorAction);
  console.log("dribbleToBlock: ", gameState.dribbleToBlock);
  console.log("ballBlock: ", gameState.ballBlock);
  console.log("commentary: ", gameState.commentary);
  console.log("success_chance: ", gameState.success_chance);
  console.log("seconds: ", gameState.time);
  console.log("---------------------");

  return (
    <div>
      <button onClick={() => setShowCoordinates(!showCoordinates)}>
        Show Coordinates
      </button>
      <button onClick={() => gameLogic()}>next</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${background})`,
          width: "1120px",
          height: "1090px",
        }}
      >
        <div className="pitch_container">
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: "200px",
            }}
          >
            <p
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                backgroundColor: "red",
                fontSize: "medium",
                border: "1px white solid",
              }}
            >
              LIV {gameState.homeScore}
            </p>
            <p
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                backgroundColor: "blue",
                fontSize: "medium",
                border: "1px white solid",
              }}
            >
              CHE {gameState.awayScore}
            </p>
            <p
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                color: "black",
                backgroundColor: "white",
                fontSize: "medium",
                fontWeight: "700",
                border: "1px white solid",
              }}
            >
              {Math.floor(gameState.time / 60) < 10
                ? "0" + Math.floor(gameState.time / 60)
                : Math.floor(gameState.time / 60)}
              {" : "}
              {gameState.time % 60 < 10
                ? "0" + (gameState.time % 60)
                : gameState.time % 60}
            </p>
          </div>

          <div className="pitch_block">
            <img
              src={require("./images/split_gerrard_posession_left.png")}
              className="player_avatar"
            />
            <img
              src={require("./images/split_vidic_slideTackleSuccess_right.png")}
              className="player_avatar"
            />
            {showCoordinates && <div className="coordinates">A00</div>}
          </div>
          <div className="pitch_block">
            <img
              src={require("./images/test_left.png")}
              className="player_avatar"
            />
            <img
              src={require("./images/test_right.png")}
              className="player_avatar"
            />
            {showCoordinates && <div className="coordinates">A01</div>}
          </div>
          <div className="pitch_block">
            <img
              src={require("./images/split_vidic_slideTackleFail_right.png")}
              className="player_avatar"
            />
            <img
              src={require("./images/split_gerrard_rideSlideTackle_left.png")}
              className="player_avatar"
            />
            {showCoordinates && <div className="coordinates">A02</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">A03</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">A04</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">A05</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">A06</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">A07</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">A08</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">A09</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">A10</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">A11</div>}
          </div>
          <div className="pitch_block">
            <img
              src={require("./images/cb_standing_right.png")}
              className="player_avatar"
            />
            {showCoordinates && <div className="coordinates">A12</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">A13</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">A14</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">A15</div>}
          </div>

          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">B00</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">B01</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">B02</div>}
          </div>
          <div className="pitch_block">
            <img
              src={require("./images/cb_standing.png")}
              className="player_avatar"
            />
            {showCoordinates && <div className="coordinates">B03</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">B04</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">B05</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">B06</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">B07</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">B08</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">B09</div>}
          </div>
          <div className="pitch_block">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">B10</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">B11</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">B12</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">B13</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">B14</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">B15</div>}
          </div>

          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">C00</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">C01</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">C02</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">C03</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">C04</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">C05</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">C06</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">C07</div>}
          </div>
          <div className="pitch_block">
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
              onClick={() => setShowPlayerDetails(!showPlayerDetails)}
            />
            {showPlayerDetails && (
              <img
                className="player_popup"
                src={require("./images/vidic_popup.png")}
                onClick={() => setShowPlayerDetails(!showPlayerDetails)}
              />
            )}
            {showCoordinates && <div className="coordinates">C08</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">C09</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">C10</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">C11</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">C12</div>}
          </div>
          <div className="pitch_block">
            <img
              className="player_avatar"
              src={require("./images/vidic_standing_right.png")}
            />
            {showCoordinates && <div className="coordinates">C13</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">C14</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">C15</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">D00</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">D01</div>}
          </div>
          <div className="pitch_block">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">D02</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">D03</div>}
          </div>
          <div className="pitch_block">
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
            />
            {showCoordinates && <div className="coordinates">D04</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">D05</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">D06</div>}
          </div>
          <div className="pitch_block">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">D07</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">D08</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">D09</div>}
          </div>
          <div className="pitch_block">
            {gameState.dribbleToBlock === "" &&
            gameState.ballBlock === "D10" ? (
              <p className="commentary_text">{gameState.commentary}</p>
            ) : gameState.dribbleToBlock === "D10" ? (
              <p className="commentary_text">{gameState.commentary}</p>
            ) : (
              <></>
            )}

            {gameState.dribbleToBlock === "D10" ? (
              <img
                className="player_avatar"
                src={require("./images/gerrad_posession_left.png")}
                onClick={() =>
                  setShowPlayerDetailsGerrard(!showPlayerDetailsGerrard)
                }
              />
            ) : (
              <></>
            )}
            {showCoordinates && <div className="coordinates">D10</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">D11</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">D12</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">D13</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">D14</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">D15</div>}
          </div>

          <div className="pitch_block">
            <img
              src={require("./images/gk_standing.png")}
              className="player_avatar"
            />
            {showCoordinates && <div className="coordinates">E00</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">E01</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">E02</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">E03</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">E04</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">E05</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">E06</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">E07</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">E08</div>}
          </div>

          <div className="pitch_block">
            {gameState.dribbleToBlock === "" &&
            gameState.ballBlock === "E09" ? (
              <p className="commentary_text">{gameState.commentary}</p>
            ) : gameState.dribbleToBlock === "E09" ? (
              <p className="commentary_text">{gameState.commentary}</p>
            ) : (
              <></>
            )}

            {gameState.ballBlock === "E09" &&
              (gameState.posessorAction === "" ? (
                <img
                  className="player_avatar"
                  src={require("./images/gerrad_standing_left.png")}
                  onClick={() =>
                    setShowPlayerDetailsGerrard(!showPlayerDetailsGerrard)
                  }
                />
              ) : gameState.posessorAction === "shoot_long" ? (
                <img
                  className="player_avatar"
                  src={require("./images/gerrad_longshot_left.png")}
                  onClick={() =>
                    setShowPlayerDetailsGerrard(!showPlayerDetailsGerrard)
                  }
                />
              ) : gameState.posessorAction === "stall" ||
                gameState.posessorAction === "try_killer_ball" ||
                gameState.posessorAction === "pass_back" ||
                gameState.posessorAction === "pass_wide" ? (
                <img
                  className="player_avatar"
                  src={require("./images/gerrad_posession_left.png")}
                  onClick={() =>
                    setShowPlayerDetailsGerrard(!showPlayerDetailsGerrard)
                  }
                />
              ) : gameState.posessorAction === "try_killer_ball" ? (
                <img
                  className="player_avatar"
                  src={require("./images/gerrad_posession_left.png")}
                  onClick={() =>
                    setShowPlayerDetailsGerrard(!showPlayerDetailsGerrard)
                  }
                />
              ) : (
                <></>
              ))}

            {/* {gameState.posessingPlayer === "Gerrard" ? (
              <img
                className="player_avatar"
                src={require("./images/gerrad_posession_left.png")}
                onClick={() =>
                  setShowPlayerDetailsGerrard(!showPlayerDetailsGerrard)
                }
              />
            ) : (
              <img
                className="player_avatar"
                src={require("./images/gerrad_standing_left.png")}
                onClick={() =>
                  setShowPlayerDetailsGerrard(!showPlayerDetailsGerrard)
                }
              />
            )} */}

            {showPlayerDetailsGerrard && (
              <img
                className="player_popup"
                src={require("./images/gerrard_popup.png")}
                onClick={() =>
                  setShowPlayerDetailsGerrard(!showPlayerDetailsGerrard)
                }
              />
            )}
            {showCoordinates && <div className="coordinates">E09</div>}
          </div>

          <div className="pitch_block">
            <img
              src={require("./images/vidic_standing_right.png")}
              width={"50px"}
            />
            {showCoordinates && <div className="coordinates">E10</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">E11</div>}
          </div>
          <div className="pitch_block">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">E12</div>}
          </div>
          <div className="pitch_block">
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
            />
            {showCoordinates && <div className="coordinates">E13</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">E14</div>}
          </div>
          <div className="pitch_block">
            <img
              src={require("./images/gk_right_standing.png")}
              //src={require("./images/gk_right_diving.png")}
              className="player_avatar"
            />
            {showCoordinates && <div className="coordinates">E15</div>}
          </div>

          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">F00</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">F01</div>}
          </div>
          <div className="pitch_block">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">F02</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">F03</div>}
          </div>
          <div className="pitch_block">
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
            />
            {showCoordinates && <div className="coordinates">F04</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">F05</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">F06</div>}
          </div>
          <div className="pitch_block">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">F07</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">F08</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">F09</div>}
          </div>
          <div className="pitch_block">
            {gameState.dribbleToBlock === "" &&
            gameState.ballBlock === "F10" ? (
              <p className="commentary_text">{gameState.commentary}</p>
            ) : gameState.dribbleToBlock === "F10" ? (
              <p className="commentary_text">{gameState.commentary}</p>
            ) : (
              <></>
            )}

            {gameState.dribbleToBlock === "F10" ? (
              <img
                className="player_avatar"
                src={require("./images/gerrad_posession_left.png")}
                onClick={() =>
                  setShowPlayerDetailsGerrard(!showPlayerDetailsGerrard)
                }
              />
            ) : (
              <></>
            )}

            {showCoordinates && <div className="coordinates">F10</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">F11</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">F12</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">F13</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">F14</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">F15</div>}
          </div>

          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">G00</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">G01</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">G02</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">G03</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">G04</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">G05</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">G06</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">G07</div>}
          </div>
          <div className="pitch_block">
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
            />
            {showCoordinates && <div className="coordinates">G08</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">G09</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">G10</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">G11</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">G12</div>}
          </div>
          <div className="pitch_block">
            <img
              className="player_avatar"
              src={require("./images/vidic_standing_right.png")}
            />
            {showCoordinates && <div className="coordinates">G13</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">G14</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">G15</div>}
          </div>

          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">H00</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">H01</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">H02</div>}
          </div>
          <div className="pitch_block">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">H03</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">H04</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">H05</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">H06</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">H07</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">H08</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">H09</div>}
          </div>
          <div className="pitch_block">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">H10</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">H11</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">H12</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">H13</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">H14</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">H15</div>}
          </div>

          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">I00</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">I01</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">I02</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">I03</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">I04</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">I05</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">I06</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">I07</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">I08</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">I09</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">I10</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">I11</div>}
          </div>
          <div className="pitch_block">
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
            />
            {showCoordinates && <div className="coordinates">I12</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">I13</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">I14</div>}
          </div>
          <div className="pitch_block">
            {showCoordinates && <div className="coordinates">I15</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
