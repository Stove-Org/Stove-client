import { useState } from "react";
import styled from "styled-components";
import { RosterPost } from "../../../../api/admin";
import { useDispatch, useSelector } from "react-redux";
import { setAddDefaultRosters } from "../../../../reducers/rostersSlice";

const AddRoster = ({ teamName, position }) => {
  const dispatch = useDispatch();
  const [progamerId, setProgamerId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const defaultRoster = useSelector((state) => {
    return state.rosters.defaultRosters;
  });

  const handlePost = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSubmit = async () => {
    if (progamerId === 0) {
      alert("progamerId를 입력해 주세요.");
      return;
    }

    try {
      const data = {
        team: teamName,
        position,
        progamerId: parseInt(progamerId),
      };

      await RosterPost([data]);
      dispatch(setAddDefaultRosters([...defaultRoster, data]));

      setIsOpen(false);
      setProgamerId(0);

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button onClick={handlePost}>{isOpen ? "닫기" : "추가하기"}</button>
      {isOpen ? (
        <div>
          <StyleText>progamerId</StyleText>
          <StyleInput
            type="number"
            value={progamerId}
            onChange={(e) => setProgamerId(e.target.value)}
          />
          <button onClick={handleSubmit}>등록</button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

const StyleText = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-top: 10px;
`;
const StyleInput = styled.input`
  width: 100%;
`;

export default AddRoster;
