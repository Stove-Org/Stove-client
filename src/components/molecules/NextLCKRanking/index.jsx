import { useEffect, useState } from "react";
import { getRanking } from "../../../api/next-lck";
import RankingList from "./RankingList";

const NextLCKRanking = () => {
  const [teamName, setTeamName] = useState("DRX");
  const [position, setPosition] = useState("TOP");
  const [data, setData] = useState([]);
  useEffect(() => {
    getRanking().then((res) => setData(res.data));
  }, []);

  // setTimeout(() => {
  //   if (position === "TOP") {
  //     setPosition("JGL");
  //   } else if (position === "JGL") {
  //     setPosition("MID");
  //   } else if (position === "MID") {
  //     setPosition("BOT");
  //   } else if (position === "BOT") {
  //     setPosition("SPT");
  //   } else if (position === "SPT") {
  //     setPosition("TOP");
  //   }
  // }, 6000);
  return (
    <>
      {data.length !== 0 ? (
        <>
          <div>
            <select name="team" onChange={(e) => setTeamName(e.target.value)}>
              <option value="DRX">DRX</option>
              <option value="T1">T1</option>
              <option value="GEN">Gen.G</option>
              <option value="DK">DWG KIA</option>
              <option value="LSB">리브 샌드박스</option>
              <option value="KT">KT Rolster</option>
              <option value="KDF">광동 프릭스</option>
              <option value="NS">농심 레드포스</option>
              <option value="BRO">프레딧 브리온</option>
              <option value="HLE">한화 e스포츠</option>
            </select>
          </div>
          <div>
            <button onClick={() => setPosition("TOP")}>Top</button>
            <button onClick={() => setPosition("JGL")}>Junggle</button>
            <button onClick={() => setPosition("MID")}>Mid</button>
            <button onClick={() => setPosition("BOT")}>Bottom</button>
            <button onClick={() => setPosition("SPT")}>Support</button>
          </div>
          <div>
            <div>
              {data
                .filter(
                  (item) => item.team === teamName && item.position === position
                )
                .map((item, index) => {
                  return <RankingList item={item} key={index} />;
                })}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default NextLCKRanking;
