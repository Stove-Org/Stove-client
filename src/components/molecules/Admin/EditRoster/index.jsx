import { useState } from "react";
import { useSelector } from "react-redux";

const initValue = [
  {
    team: "GEN",
    position: "TOP",
    progamer: null,
  },
  {
    team: "GEN",
    position: "JGL",
    progamer: null,
  },
  {
    team: "GEN",
    position: "MID",
    progamer: null,
  },
  {
    team: "GEN",
    position: "BOT",
    progamer: null,
  },
  {
    team: "GEN",
    position: "SPT",
    progamer: null,
  },
  {
    team: "T1",
    position: "TOP",
    progamer: null,
  },
  {
    team: "T1",
    position: "JGL",
    progamer: null,
  },
  {
    team: "T1",
    position: "MID",
    progamer: null,
  },
  {
    team: "T1",
    position: "BOT",
    progamer: null,
  },
  {
    team: "T1",
    position: "SPT",
    progamer: null,
  },
  {
    team: "LSB",
    position: "TOP",
    progamer: null,
  },
  {
    team: "LSB",
    position: "JGL",
    progamer: null,
  },
  {
    team: "LSB",
    position: "MID",
    progamer: null,
  },
  {
    team: "LSB",
    position: "BOT",
    progamer: null,
  },
  {
    team: "LSB",
    position: "SPT",
    progamer: null,
  },
  {
    team: "DK",
    position: "TOP",
    progamer: null,
  },
  {
    team: "DK",
    position: "JGL",
    progamer: null,
  },
  {
    team: "DK",
    position: "MID",
    progamer: null,
  },
  {
    team: "DK",
    position: "BOT",
    progamer: null,
  },
  {
    team: "DK",
    position: "SPT",
    progamer: null,
  },
  {
    team: "KT",
    position: "TOP",
    progamer: null,
  },
  {
    team: "KT",
    position: "JGL",
    progamer: null,
  },
  {
    team: "KT",
    position: "MID",
    progamer: null,
  },
  {
    team: "KT",
    position: "BOT",
    progamer: null,
  },
  {
    team: "KT",
    position: "SPT",
    progamer: null,
  },
  {
    team: "DRX",
    position: "TOP",
    progamer: null,
  },
  {
    team: "DRX",
    position: "JGL",
    progamer: null,
  },
  {
    team: "DRX",
    position: "MID",
    progamer: null,
  },
  {
    team: "DRX",
    position: "BOT",
    progamer: null,
  },
  {
    team: "DRX",
    position: "SPT",
    progamer: null,
  },
  {
    team: "KDF",
    position: "TOP",
    progamer: null,
  },
  {
    team: "KDF",
    position: "JGL",
    progamer: null,
  },
  {
    team: "KDF",
    position: "MID",
    progamer: null,
  },
  {
    team: "KDF",
    position: "BOT",
    progamer: null,
  },
  {
    team: "KDF",
    position: "SPT",
    progamer: null,
  },
  {
    team: "NS",
    position: "TOP",
    progamer: null,
  },
  {
    team: "NS",
    position: "JGL",
    progamer: null,
  },
  {
    team: "NS",
    position: "MID",
    progamer: null,
  },
  {
    team: "NS",
    position: "BOT",
    progamer: null,
  },
  {
    team: "NS",
    position: "SPT",
    progamer: null,
  },
  {
    team: "BRO",
    position: "TOP",
    progamer: null,
  },
  {
    team: "BRO",
    position: "JGL",
    progamer: null,
  },
  {
    team: "BRO",
    position: "MID",
    progamer: null,
  },
  {
    team: "BRO",
    position: "BOT",
    progamer: null,
  },
  {
    team: "BRO",
    position: "SPT",
    progamer: null,
  },
  {
    team: "HLE",
    position: "TOP",
    progamer: null,
  },
  {
    team: "HLE",
    position: "JGL",
    progamer: null,
  },
  {
    team: "HLE",
    position: "MID",
    progamer: null,
  },
  {
    team: "HLE",
    position: "BOT",
    progamer: null,
  },
  {
    team: "HLE",
    position: "SPT",
    progamer: null,
  },
];

const EditRoster = () => {
  const [editRoster, setEditRoster] = useState(initValue);
  const rosters = useSelector((state) => {
    return state.rosters.initRosters;
  });

  const findRosterItem = (teamName, position) => {
    return;
  };

  return <>{rosters ? <></> : <></>}</>;
};

export default EditRoster;
