import React, { useState } from "react";
import styles from "./Home.css";
import { GiSoccerKick } from "react-icons/gi";
import background from "./images/pitch.jpg";
import kick from "./images/kick.png";

function Home() {
  const [showCoordinates, setShowCoordinates] = useState(false);
  return (
    <div>
      <button onClick={() => setShowCoordinates(!showCoordinates)}>
        Show Coordinates
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${background})`,
          width: "1046px",
          height: "1020px",
        }}
      >
        <div className="pitch_container">
          {/* <div className="pitch_block_light has_border left_border bottom_border">
            {showCoordinates && <div className="coordinates">00</div>}
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
            />
          </div> */}

          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">A00</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">A01</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">A02</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">A03</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">A04</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">A05</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">A06</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">A07</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">A08</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">A09</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">A10</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">A11</div>}
          </div>
          <div className="pitch_block_light">
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
            />
            {showCoordinates && <div className="coordinates">A12</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">A13</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">A14</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">A15</div>}
          </div>

          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">B00</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">B01</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">B02</div>}
          </div>
          <div className="pitch_block_light">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">B03</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">B04</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">B05</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">B06</div>}
          </div>
          <div className="pitch_block_light">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">B07</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">B08</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">B09</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">B10</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">B11</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">B12</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">B13</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">B14</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">B15</div>}
          </div>

          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">C00</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">C01</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">C02</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">C03</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">C04</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">C05</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">C06</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">C07</div>}
          </div>
          <div className="pitch_block_light">
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
            />
            {showCoordinates && <div className="coordinates">C08</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">C09</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">C10</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">C11</div>}
          </div>
          <div className="pitch_block_light">
            <img src={require("./images/kick.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">C12</div>}
          </div>
          <div className="pitch_block_light">
            <img src={require("./images/slide_tackle.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">C13</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">C14</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">C15</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">D00</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">D01</div>}
          </div>
          <div className="pitch_block_light">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">D02</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">D03</div>}
          </div>
          <div className="pitch_block_light">
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
            />
            {showCoordinates && <div className="coordinates">D04</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">D05</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">D06</div>}
          </div>
          <div className="pitch_block_light">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">D07</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">D08</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">D09</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">D10</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">D11</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">D12</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">D13</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">D14</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">D15</div>}
          </div>

          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">E00</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">E01</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">E02</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">E03</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">E04</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">E05</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">E06</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">E07</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">E08</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">E09</div>}
          </div>
          <div className="pitch_block_light">
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
            />
            {showCoordinates && <div className="coordinates">E10</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">E11</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">E12</div>}
          </div>
          <div className="pitch_block_light">
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
            />
            {showCoordinates && <div className="coordinates">E13</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">E14</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">E15</div>}
          </div>

          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">F00</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">F01</div>}
          </div>
          <div className="pitch_block_light">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">F02</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">F03</div>}
          </div>
          <div className="pitch_block_light">
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
            />
            {showCoordinates && <div className="coordinates">F04</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">F05</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">F06</div>}
          </div>
          <div className="pitch_block_light">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">F07</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">F08</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">F09</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">F10</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">F11</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">F12</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">F13</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">F14</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">F15</div>}
          </div>

          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">G00</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">G01</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">G02</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">G03</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">G04</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">G05</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">G06</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">G07</div>}
          </div>
          <div className="pitch_block_light">
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
            />
            {showCoordinates && <div className="coordinates">G08</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">G09</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">G10</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">G11</div>}
          </div>
          <div className="pitch_block_light">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">G12</div>}
          </div>
          <div className="pitch_block_light">
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
            />
            {showCoordinates && <div className="coordinates">G13</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">G14</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">G15</div>}
          </div>

          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">H00</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">H01</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">H02</div>}
          </div>
          <div className="pitch_block_light">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">H03</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">H04</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">H05</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">H06</div>}
          </div>
          <div className="pitch_block_light">
            <img src={require("./images/cb_standing.png")} width={"50px"} />
            {showCoordinates && <div className="coordinates">H07</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">H08</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">H09</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">H10</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">H11</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">H12</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">H13</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">H14</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">H15</div>}
          </div>

          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">I00</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">I01</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">I02</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">I03</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">I04</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">I05</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">I06</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">I07</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">I08</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">I09</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">I10</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">I11</div>}
          </div>
          <div className="pitch_block_light">
            <img
              src={require("./images/cb_standing_right.png")}
              width={"50px"}
            />
            {showCoordinates && <div className="coordinates">I12</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">I13</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">I14</div>}
          </div>
          <div className="pitch_block_light">
            {showCoordinates && <div className="coordinates">I15</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
