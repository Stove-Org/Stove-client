import { useSelector } from "react-redux";
import styled from "styled-components";
import AddRoster from "../AddRoster";

const EditProgamer = () => {
  const defaultRoster = useSelector((state) => {
    return state.rosters.defaultRosters;
  });

  const findRosterItem = (teamName, position) => {
    const rosterTeam = defaultRoster.filter((item) => {
      return item.team === teamName;
    });

    if (rosterTeam) {
      const findPosition = rosterTeam.find((item) => {
        return item.position === position;
      });

      if (findPosition) {
        return findPosition.progamer;
      }
    }

    return;
  };

  // const chovy = findRosterItem("GEN", "MID"); //{...}
  // const bool = findRosterItem("GEN", "d") ? true : false; //false

  const gen_top = findRosterItem("GEN", "TOP");
  const gen_jgl = findRosterItem("GEN", "JGL");
  const gen_mid = findRosterItem("GEN", "MID");
  const gen_bot = findRosterItem("GEN", "BOT");
  const gen_spt = findRosterItem("GEN", "SPT");

  const t1_top = findRosterItem("T1", "TOP");
  const t1_jgl = findRosterItem("T1", "JGL");
  const t1_mid = findRosterItem("T1", "MID");
  const t1_bot = findRosterItem("T1", "BOT");
  const t1_spt = findRosterItem("T1", "SPT");

  const lsb_top = findRosterItem("LSB", "TOP");
  const lsb_jgl = findRosterItem("LSB", "JGL");
  const lsb_mid = findRosterItem("LSB", "MID");
  const lsb_bot = findRosterItem("LSB", "BOT");
  const lsb_spt = findRosterItem("LSB", "SPT");

  const dk_top = findRosterItem("DK", "TOP");
  const dk_jgl = findRosterItem("DK", "JGL");
  const dk_mid = findRosterItem("DK", "MID");
  const dk_bot = findRosterItem("DK", "BOT");
  const dk_spt = findRosterItem("DK", "SPT");

  const kt_top = findRosterItem("KT", "TOP");
  const kt_jgl = findRosterItem("KT", "JGL");
  const kt_mid = findRosterItem("KT", "MID");
  const kt_bot = findRosterItem("KT", "BOT");
  const kt_spt = findRosterItem("KT", "SPT");

  const drx_top = findRosterItem("DRX", "TOP");
  const drx_jgl = findRosterItem("DRX", "JGL");
  const drx_mid = findRosterItem("DRX", "MID");
  const drx_bot = findRosterItem("DRX", "BOT");
  const drx_spt = findRosterItem("DRX", "SPT");

  const kdf_top = findRosterItem("KDF", "TOP");
  const kdf_jgl = findRosterItem("KDF", "JGL");
  const kdf_mid = findRosterItem("KDF", "MID");
  const kdf_bot = findRosterItem("KDF", "BOT");
  const kdf_spt = findRosterItem("KDF", "SPT");

  const ns_top = findRosterItem("NS", "TOP");
  const ns_jgl = findRosterItem("NS", "JGL");
  const ns_mid = findRosterItem("NS", "MID");
  const ns_bot = findRosterItem("NS", "BOT");
  const ns_spt = findRosterItem("NS", "SPT");

  const bro_top = findRosterItem("BRO", "TOP");
  const bro_jgl = findRosterItem("BRO", "JGL");
  const bro_mid = findRosterItem("BRO", "MID");
  const bro_bot = findRosterItem("BRO", "BOT");
  const bro_spt = findRosterItem("BRO", "SPT");

  const hle_top = findRosterItem("HLE", "TOP");
  const hle_jgl = findRosterItem("HLE", "JGL");
  const hle_mid = findRosterItem("HLE", "MID");
  const hle_bot = findRosterItem("HLE", "BOT");
  const hle_spt = findRosterItem("HLE", "SPT");

  return (
    <>
      <tr className="gen">
        <TeamTd>GEN</TeamTd>
        <td>
          {gen_top ? (
            <div>
              <div>id: {gen_top.id}</div>
              <div>nickname: {gen_top.nickname}</div>
              <div>name: {gen_top.name}</div>
            </div>
          ) : (
            <AddRoster teamName="GEN" position="TOP" />
          )}
        </td>
        <td>
          {gen_jgl ? (
            <div>
              <div>id: {gen_jgl.id}</div>
              <div>nickname: {gen_jgl.nickname}</div>
              <div>name: {gen_jgl.name}</div>
            </div>
          ) : (
            <AddRoster teamName="GEN" position="JGL" />
          )}
        </td>
        <td>
          {gen_mid ? (
            <div>
              <div>id: {gen_mid.id}</div>
              <div>nickname: {gen_mid.nickname}</div>
              <div>name: {gen_mid.name}</div>
            </div>
          ) : (
            <AddRoster teamName="GEN" position="MID" />
          )}
        </td>
        <td>
          {gen_bot ? (
            <div>
              <div>id: {gen_bot.id}</div>
              <div>nickname: {gen_bot.nickname}</div>
              <div>name: {gen_bot.name}</div>
            </div>
          ) : (
            <AddRoster teamName="GEN" position="BOT" />
          )}
        </td>
        <td>
          {gen_spt ? (
            <div>
              <div>id: {gen_spt.id}</div>
              <div>nickname: {gen_spt.nickname}</div>
              <div>name: {gen_spt.name}</div>
            </div>
          ) : (
            <AddRoster teamName="GEN" position="SPT" />
          )}
        </td>
      </tr>
      <tr className="t1">
        <TeamTd>T1</TeamTd>
        <td>
          {t1_top ? (
            <div>
              <div>id: {t1_top.id}</div>
              <div>nickname: {t1_top.nickname}</div>
              <div>name: {t1_top.name}</div>
            </div>
          ) : (
            <AddRoster teamName="T1" position="TOP" />
          )}
        </td>
        <td>
          {t1_jgl ? (
            <div>
              <div>id: {t1_jgl.id}</div>
              <div>nickname: {t1_jgl.nickname}</div>
              <div>name: {t1_jgl.name}</div>
            </div>
          ) : (
            <AddRoster teamName="T1" position="JGL" />
          )}
        </td>
        <td>
          {t1_mid ? (
            <div>
              <div>id: {t1_mid.id}</div>
              <div>nickname: {t1_mid.nickname}</div>
              <div>name: {t1_mid.name}</div>
            </div>
          ) : (
            <AddRoster teamName="T1" position="MID" />
          )}
        </td>
        <td>
          {t1_bot ? (
            <div>
              <div>id: {t1_bot.id}</div>
              <div>nickname: {t1_bot.nickname}</div>
              <div>name: {t1_bot.name}</div>
            </div>
          ) : (
            <AddRoster teamName="T1" position="BOT" />
          )}
        </td>
        <td>
          {t1_spt ? (
            <div>
              <div>id: {t1_spt.id}</div>
              <div>nickname: {t1_spt.nickname}</div>
              <div>name: {t1_spt.name}</div>
            </div>
          ) : (
            <AddRoster teamName="T1" position="SPT" />
          )}
        </td>
      </tr>
      <tr className="lsb">
        <TeamTd>LSB</TeamTd>
        <td>
          {lsb_top ? (
            <div>
              <div>id: {lsb_top.id}</div>
              <div>nickname: {lsb_top.nickname}</div>
              <div>name: {lsb_top.name}</div>
            </div>
          ) : (
            <AddRoster teamName="LSB" position="TOP" />
          )}
        </td>
        <td>
          {lsb_jgl ? (
            <div>
              <div>id: {lsb_jgl.id}</div>
              <div>nickname: {lsb_jgl.nickname}</div>
              <div>name: {lsb_jgl.name}</div>
            </div>
          ) : (
            <AddRoster teamName="LSB" position="JGL" />
          )}
        </td>
        <td>
          {lsb_mid ? (
            <div>
              <div>id: {lsb_mid.id}</div>
              <div>nickname: {lsb_mid.nickname}</div>
              <div>name: {lsb_mid.name}</div>
            </div>
          ) : (
            <AddRoster teamName="LSB" position="MID" />
          )}
        </td>
        <td>
          {lsb_bot ? (
            <div>
              <div>id: {lsb_bot.id}</div>
              <div>nickname: {lsb_bot.nickname}</div>
              <div>name: {lsb_bot.name}</div>
            </div>
          ) : (
            <AddRoster teamName="LSB" position="BOT" />
          )}
        </td>
        <td>
          {lsb_spt ? (
            <div>
              <div>id: {lsb_spt.id}</div>
              <div>nickname: {lsb_spt.nickname}</div>
              <div>name: {lsb_spt.name}</div>
            </div>
          ) : (
            <AddRoster teamName="LSB" position="SPT" />
          )}
        </td>
      </tr>
      <tr className="dk">
        <TeamTd>DK</TeamTd>
        <td>
          {dk_top ? (
            <div>
              <div>id: {dk_top.id}</div>
              <div>nickname: {dk_top.nickname}</div>
              <div>name: {dk_top.name}</div>
            </div>
          ) : (
            <AddRoster teamName="DK" position="TOP" />
          )}
        </td>
        <td>
          {dk_jgl ? (
            <div>
              <div>id: {dk_jgl.id}</div>
              <div>nickname: {dk_jgl.nickname}</div>
              <div>name: {dk_jgl.name}</div>
            </div>
          ) : (
            <AddRoster teamName="DK" position="JGL" />
          )}
        </td>
        <td>
          {dk_mid ? (
            <div>
              <div>id: {dk_mid.id}</div>
              <div>nickname: {dk_mid.nickname}</div>
              <div>name: {dk_mid.name}</div>
            </div>
          ) : (
            <AddRoster teamName="DK" position="MID" />
          )}
        </td>
        <td>
          {dk_bot ? (
            <div>
              <div>id: {dk_bot.id}</div>
              <div>nickname: {dk_bot.nickname}</div>
              <div>name: {dk_bot.name}</div>
            </div>
          ) : (
            <AddRoster teamName="DK" position="BOT" />
          )}
        </td>
        <td>
          {dk_spt ? (
            <div>
              <div>id: {dk_spt.id}</div>
              <div>nickname: {dk_spt.nickname}</div>
              <div>name: {dk_spt.name}</div>
            </div>
          ) : (
            <AddRoster teamName="DK" position="SPT" />
          )}
        </td>
      </tr>
      <tr className="kt">
        <TeamTd>KT</TeamTd>
        <td>
          {kt_top ? (
            <div>
              <div>id: {kt_top.id}</div>
              <div>nickname: {kt_top.nickname}</div>
              <div>name: {kt_top.name}</div>
            </div>
          ) : (
            <AddRoster teamName="KT" position="TOP" />
          )}
        </td>
        <td>
          {kt_jgl ? (
            <div>
              <div>id: {kt_jgl.id}</div>
              <div>nickname: {kt_jgl.nickname}</div>
              <div>name: {kt_jgl.name}</div>
            </div>
          ) : (
            <AddRoster teamName="KT" position="JGL" />
          )}
        </td>
        <td>
          {kt_mid ? (
            <div>
              <div>id: {kt_mid.id}</div>
              <div>nickname: {kt_mid.nickname}</div>
              <div>name: {kt_mid.name}</div>
            </div>
          ) : (
            <AddRoster teamName="KT" position="MID" />
          )}
        </td>
        <td>
          {kt_bot ? (
            <div>
              <div>id: {kt_bot.id}</div>
              <div>nickname: {kt_bot.nickname}</div>
              <div>name: {kt_bot.name}</div>
            </div>
          ) : (
            <AddRoster teamName="KT" position="BOT" />
          )}
        </td>
        <td>
          {kt_spt ? (
            <div>
              <div>id: {kt_spt.id}</div>
              <div>nickname: {kt_spt.nickname}</div>
              <div>name: {kt_spt.name}</div>
            </div>
          ) : (
            <AddRoster teamName="KT" position="SPT" />
          )}
        </td>
      </tr>
      <tr className="drx">
        <TeamTd>DRX</TeamTd>
        <td>
          {drx_top ? (
            <div>
              <div>id: {drx_top.id}</div>
              <div>nickname: {drx_top.nickname}</div>
              <div>name: {drx_top.name}</div>
            </div>
          ) : (
            <AddRoster teamName="DRX" position="TOP" />
          )}
        </td>
        <td>
          {drx_jgl ? (
            <div>
              <div>id: {drx_jgl.id}</div>
              <div>nickname: {drx_jgl.nickname}</div>
              <div>name: {drx_jgl.name}</div>
            </div>
          ) : (
            <AddRoster teamName="DRX" position="JGL" />
          )}
        </td>
        <td>
          {drx_mid ? (
            <div>
              <div>id: {drx_mid.id}</div>
              <div>nickname: {drx_mid.nickname}</div>
              <div>name: {drx_mid.name}</div>
            </div>
          ) : (
            <AddRoster teamName="DRX" position="MID" />
          )}
        </td>
        <td>
          {drx_bot ? (
            <div>
              <div>id: {drx_bot.id}</div>
              <div>nickname: {drx_bot.nickname}</div>
              <div>name: {drx_bot.name}</div>
            </div>
          ) : (
            <AddRoster teamName="DRX" position="BOT" />
          )}
        </td>
        <td>
          {drx_spt ? (
            <div>
              <div>id: {drx_spt.id}</div>
              <div>nickname: {drx_spt.nickname}</div>
              <div>name: {drx_spt.name}</div>
            </div>
          ) : (
            <AddRoster teamName="DRX" position="SPT" />
          )}
        </td>
      </tr>
      <tr className="kdf">
        <TeamTd>KDF</TeamTd>
        <td>
          {kdf_top ? (
            <div>
              <div>id: {kdf_top.id}</div>
              <div>nickname: {kdf_top.nickname}</div>
              <div>name: {kdf_top.name}</div>
            </div>
          ) : (
            <AddRoster teamName="KDF" position="TOP" />
          )}
        </td>
        <td>
          {kdf_jgl ? (
            <div>
              <div>id: {kdf_jgl.id}</div>
              <div>nickname: {kdf_jgl.nickname}</div>
              <div>name: {kdf_jgl.name}</div>
            </div>
          ) : (
            <AddRoster teamName="KDF" position="JGL" />
          )}
        </td>
        <td>
          {kdf_mid ? (
            <div>
              <div>id: {kdf_mid.id}</div>
              <div>nickname: {kdf_mid.nickname}</div>
              <div>name: {kdf_mid.name}</div>
            </div>
          ) : (
            <AddRoster teamName="KDF" position="MID" />
          )}
        </td>
        <td>
          {kdf_bot ? (
            <div>
              <div>id: {kdf_bot.id}</div>
              <div>nickname: {kdf_bot.nickname}</div>
              <div>name: {kdf_bot.name}</div>
            </div>
          ) : (
            <AddRoster teamName="KDF" position="BOT" />
          )}
        </td>
        <td>
          {kdf_spt ? (
            <div>
              <div>id: {kdf_spt.id}</div>
              <div>nickname: {kdf_spt.nickname}</div>
              <div>name: {kdf_spt.name}</div>
            </div>
          ) : (
            <AddRoster teamName="KDF" position="SPT" />
          )}
        </td>
      </tr>
      <tr className="ns">
        <TeamTd>NS</TeamTd>
        <td>
          {ns_top ? (
            <div>
              <div>id: {ns_top.id}</div>
              <div>nickname: {ns_top.nickname}</div>
              <div>name: {ns_top.name}</div>
            </div>
          ) : (
            <AddRoster teamName="NS" position="TOP" />
          )}
        </td>
        <td>
          {ns_jgl ? (
            <div>
              <div>id: {ns_jgl.id}</div>
              <div>nickname: {ns_jgl.nickname}</div>
              <div>name: {ns_jgl.name}</div>
            </div>
          ) : (
            <AddRoster teamName="NS" position="JGL" />
          )}
        </td>
        <td>
          {ns_mid ? (
            <div>
              <div>id: {ns_mid.id}</div>
              <div>nickname: {ns_mid.nickname}</div>
              <div>name: {ns_mid.name}</div>
            </div>
          ) : (
            <AddRoster teamName="NS" position="MID" />
          )}
        </td>
        <td>
          {ns_bot ? (
            <div>
              <div>id: {ns_bot.id}</div>
              <div>nickname: {ns_bot.nickname}</div>
              <div>name: {ns_bot.name}</div>
            </div>
          ) : (
            <AddRoster teamName="NS" position="BOT" />
          )}
        </td>
        <td>
          {ns_spt ? (
            <div>
              <div>id: {ns_spt.id}</div>
              <div>nickname: {ns_spt.nickname}</div>
              <div>name: {ns_spt.name}</div>
            </div>
          ) : (
            <AddRoster teamName="NS" position="SPT" />
          )}
        </td>
      </tr>
      <tr className="bro">
        <TeamTd>BRO</TeamTd>
        <td>
          {bro_top ? (
            <div>
              <div>id: {bro_top.id}</div>
              <div>nickname: {bro_top.nickname}</div>
              <div>name: {bro_top.name}</div>
            </div>
          ) : (
            <AddRoster teamName="BRO" position="TOP" />
          )}
        </td>
        <td>
          {bro_jgl ? (
            <div>
              <div>id: {bro_jgl.id}</div>
              <div>nickname: {bro_jgl.nickname}</div>
              <div>name: {bro_jgl.name}</div>
            </div>
          ) : (
            <AddRoster teamName="BRO" position="JGL" />
          )}
        </td>
        <td>
          {bro_mid ? (
            <div>
              <div>id: {bro_mid.id}</div>
              <div>nickname: {bro_mid.nickname}</div>
              <div>name: {bro_mid.name}</div>
            </div>
          ) : (
            <AddRoster teamName="BRO" position="MID" />
          )}
        </td>
        <td>
          {bro_bot ? (
            <div>
              <div>id: {bro_bot.id}</div>
              <div>nickname: {bro_bot.nickname}</div>
              <div>name: {bro_bot.name}</div>
            </div>
          ) : (
            <AddRoster teamName="BRO" position="BOT" />
          )}
        </td>
        <td>
          {bro_spt ? (
            <div>
              <div>id: {bro_spt.id}</div>
              <div>nickname: {bro_spt.nickname}</div>
              <div>name: {bro_spt.name}</div>
            </div>
          ) : (
            <AddRoster teamName="BRO" position="SPT" />
          )}
        </td>
      </tr>
      <tr className="hle">
        <TeamTd>HLE</TeamTd>
        <td>
          {hle_top ? (
            <div>
              <div>id: {hle_top.id}</div>
              <div>nickname: {hle_top.nickname}</div>
              <div>name: {hle_top.name}</div>
            </div>
          ) : (
            <AddRoster teamName="HLE" position="TOP" />
          )}
        </td>
        <td>
          {hle_jgl ? (
            <div>
              <div>id: {hle_jgl.id}</div>
              <div>nickname: {hle_jgl.nickname}</div>
              <div>name: {hle_jgl.name}</div>
            </div>
          ) : (
            <AddRoster teamName="HLE" position="JGL" />
          )}
        </td>
        <td>
          {hle_mid ? (
            <div>
              <div>id: {hle_mid.id}</div>
              <div>nickname: {hle_mid.nickname}</div>
              <div>name: {hle_mid.name}</div>
            </div>
          ) : (
            <AddRoster teamName="HLE" position="MID" />
          )}
        </td>
        <td>
          {hle_bot ? (
            <div>
              <div>id: {hle_bot.id}</div>
              <div>nickname: {hle_bot.nickname}</div>
              <div>name: {hle_bot.name}</div>
            </div>
          ) : (
            <AddRoster teamName="HLE" position="BOT" />
          )}
        </td>
        <td>
          {hle_spt ? (
            <div>
              <div>id: {hle_spt.id}</div>
              <div>nickname: {hle_spt.nickname}</div>
              <div>name: {hle_spt.name}</div>
            </div>
          ) : (
            <AddRoster teamName="HLE" position="SPT" />
          )}
        </td>
      </tr>
    </>
  );
};

const TeamTd = styled.td`
  background-color: #000000;
  color: #ffffff;
`;

export default EditProgamer;
