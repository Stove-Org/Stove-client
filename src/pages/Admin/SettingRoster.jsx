import { useEffect, useState } from "react";
import styled from "styled-components";
import { rostersGet, defaultRosterPost } from "../../api/admin";

const SettingRoster = () => {
  const [rosters, setRosters] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    rostersGet().then((res) => {
      setRosters(
        res.data.map((item) => {
          if (item.progamer) {
            return {
              team: item.team,
              position: item.position,
              progamerId: item.progamer.id,
            };
          } else {
            return {
              team: item.team,
              position: item.position,
              progamerId: null,
            };
          }
        })
      );
    });
  }, []);

  const handleChange = (e) => {
    const newRoster = [...rosters];
    newRoster[e.target.name].progamerId = parseInt(e.target.value);
    setRosters(newRoster);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleCancel = () => {
    setIsEdit(false);
    window.location.reload();
  };
  const handleSubmit = async () => {
    const data = rosters.filter((item) => {
      return item.progamerId !== null && item.progamerId !== 0;
    });

    try {
      await defaultRosterPost(data);
      alert("저장되었습니다.");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SettingWrapper>
      <div>
        {isEdit ? (
          <>
            <div>* default Progamer 없앨때는 빈칸으로 두면 됨.</div>
            <button onClick={handleCancel}>취소</button>
            <button onClick={handleSubmit}>저장</button>
          </>
        ) : (
          <>
            <div>* default Progamer 없앨때는 빈칸으로 두면 됨.</div>
            <button onClick={handleEdit}>수정</button>
          </>
        )}
      </div>
      <EditWrapper>
        {rosters ? (
          rosters.map((item, index) => {
            return (
              <StyleRoster key={index}>
                <StyleTeamPosition>
                  {item.team}-{item.position}
                </StyleTeamPosition>
                {isEdit ? (
                  <input
                    type="number"
                    name={index}
                    value={
                      rosters[index].progamerId ? rosters[index].progamerId : ""
                    }
                    onChange={handleChange}
                  />
                ) : (
                  <></>
                )}
                {item.progamerId ? (
                  <div>progamerId : {item.progamerId}</div>
                ) : (
                  <></>
                )}
              </StyleRoster>
            );
          })
        ) : (
          <></>
        )}
      </EditWrapper>
    </SettingWrapper>
  );
};

const SettingWrapper = styled.div`
  width: 100%;
  font-size: 12px;

  & > * + * {
    margin-top: 20px;
  }
`;

const EditWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  input {
    width: 100%;
  }
`;

const StyleRoster = styled.div`
  border: 1px solid #000000;
  padding: 10px;
`;

const StyleTeamPosition = styled.div`
  padding: 10px;
  background-color: #eeeeee;
  font-weight: 700;
  margin-bottom: 10px;
`;

export default SettingRoster;
