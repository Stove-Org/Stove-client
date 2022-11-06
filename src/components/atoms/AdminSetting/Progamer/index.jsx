import { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  setUpdateProgamer,
  deleteProgamer,
} from "../../../../reducers/progamersSlice";
import Alias from "./Alias";
import { progamerUpdate, progamerDelete } from "../../../../api/admin";

const Progamer = ({ item }) => {
  const dispatch = useDispatch();

  const addAlias = useRef();

  const initData = {
    name: item.name,
    nickname: item.nickname,
    position: item.position,
    imgUrl: item.imgUrl,
    birthday: item.birthday,
    career: item.career,
    alias: item.alias,
  };

  const [imgUrlOpen, setImgUrlOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [progamer, setProgamer] = useState(initData);
  // 추가 input에 입력중인 alia 담아두는 데이터
  const [currentAlias, setCurrentAlias] = useState("");

  const openHandler = () => {
    setImgUrlOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setProgamer({ ...progamer, [name]: value });
  };

  // dispatch(setProgamer(data));

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleCancel = () => {
    setIsEdit((prev) => !prev);
    setProgamer((prev) => (prev = { ...initData }));
  };

  const handleAddAlias = () => {
    setProgamer(
      (prev) =>
        (prev = { ...progamer, alias: [...progamer.alias, currentAlias] })
    );
    setCurrentAlias((prev) => (prev = ""));
  };

  const onIncreaseLck = (e) => {
    e.preventDefault();
    if (progamer.career.lck !== 0) {
      setProgamer({
        ...progamer,
        career: { ...progamer.career, lck: progamer.career.lck + 1 },
      });
      return;
    } else {
      setProgamer({ ...progamer, career: { ...progamer.career, lck: 1 } });
    }
  };

  const onDecreaseLck = () => {
    if (progamer.career.lck !== 0) {
      setProgamer({
        ...progamer,
        career: { ...progamer.career, lck: progamer.career.lck - 1 },
      });
      return;
    } else if (progamer.career.lck === 0) {
      return;
    } else {
      setProgamer({ ...progamer, career: { ...progamer.career, lck: 0 } });
    }
  };
  const onIncreaseMsi = (e) => {
    e.preventDefault();
    if (progamer.career.msi !== 0) {
      setProgamer({
        ...progamer,
        career: { ...progamer.career, msi: progamer.career.msi + 1 },
      });
      return;
    } else {
      setProgamer({ ...progamer, career: { ...progamer.career, msi: 1 } });
    }
  };

  const onDecreaseMsi = () => {
    if (progamer.career.msi !== 0) {
      setProgamer({
        ...progamer,
        career: { ...progamer.career, msi: progamer.career.msi - 1 },
      });
      return;
    } else if (progamer.career.msi === 0) {
      return;
    } else {
      setProgamer({ ...progamer, career: { ...progamer.career, msi: 0 } });
    }
  };
  const onIncreaseWorlds = (e) => {
    e.preventDefault();
    if (progamer.career.worlds !== 0) {
      setProgamer({
        ...progamer,
        career: { ...progamer.career, worlds: progamer.career.worlds + 1 },
      });
      return;
    } else {
      setProgamer({ ...progamer, career: { ...progamer.career, worlds: 1 } });
    }
  };

  const onDecreaseWorlds = () => {
    if (progamer.career.worlds !== 0) {
      setProgamer({
        ...progamer,
        career: { ...progamer.career, worlds: progamer.career.worlds - 1 },
      });
      return;
    } else if (progamer.career.worlds === 0) {
      return;
    } else {
      setProgamer({ ...progamer, career: { ...progamer.career, worlds: 0 } });
    }
  };

  const handleSubmit = () => {
    try {
      dispatch(setUpdateProgamer(progamer));
      progamerUpdate(progamer, item.id);
      setIsEdit(false);
      alert("정상적으로 저장되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = async () => {
    try {
      if (
        window.confirm(
          `[id: ${item.id}, nickname: ${item.nickname}] 정말 삭제하시겠습니까?`
        )
      ) {
        await progamerDelete(item.id);
        dispatch(deleteProgamer(item.id));
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <StyleTd>{item.id}</StyleTd>
      <StyleTd>
        {isEdit ? (
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={progamer.name}
          />
        ) : (
          progamer.name
        )}
      </StyleTd>
      <StyleTd>
        {isEdit ? (
          <input
            type="text"
            name="nickname"
            onChange={handleChange}
            value={progamer.nickname}
          />
        ) : (
          progamer.nickname
        )}
      </StyleTd>
      <StyleTd>
        {isEdit ? (
          // <input
          //   type="text"
          //   name="position"
          //   onChange={handleChange}
          //   value={progamer.position}
          // />
          <select
            name="position"
            value={progamer.position}
            onChange={handleChange}
          >
            <option value="TOP">TOP</option>
            <option value="JGL">JGL</option>
            <option value="MID">MID</option>
            <option value="BOT">BOT</option>
            <option value="SPT">SPT</option>
          </select>
        ) : (
          progamer.position
        )}
      </StyleTd>
      <StyleTd>
        {isEdit ? (
          <textarea
            name="imgUrl"
            onChange={handleChange}
            value={progamer.imgUrl}
          />
        ) : (
          <StyleImg src={progamer.imgUrl} alt="프로게이머 이미지" />
        )}
      </StyleTd>
      <StyleTd>
        {isEdit ? (
          <input
            type="text"
            name="birthday"
            onChange={handleChange}
            value={progamer.birthday}
          />
        ) : (
          progamer.birthday
        )}
      </StyleTd>
      <StyleTd>
        <div>
          lck : {progamer.career.lck ? progamer.career.lck : 0}
          {isEdit ? (
            <>
              <button onClick={onIncreaseLck}>+</button>
              <button onClick={onDecreaseLck}>-</button>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          msi : {progamer.career.msi ? progamer.career.msi : 0}
          {isEdit ? (
            <>
              <button onClick={onIncreaseMsi}>+</button>
              <button onClick={onDecreaseMsi}>-</button>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          worlds : {progamer.career.worlds ? progamer.career.worlds : 0}
          {isEdit ? (
            <>
              <button onClick={onIncreaseWorlds}>+</button>
              <button onClick={onDecreaseWorlds}>-</button>
            </>
          ) : (
            <></>
          )}
        </div>
      </StyleTd>
      <StyleTd>
        <Alias
          isEdit={isEdit}
          alias={progamer.alias}
          setProgamer={setProgamer}
        />
        {isEdit ? (
          <div>
            <input
              type="text"
              name="alias"
              onChange={(e) => setCurrentAlias(e.target.value)}
              value={currentAlias}
              placeholder="한 개씩 입력"
              ref={addAlias}
            />
            <button type="submit" onClick={handleAddAlias}>
              추가
            </button>
          </div>
        ) : (
          <></>
        )}
      </StyleTd>
      <StyleTd>
        {isEdit ? (
          <button onClick={handleCancel}>취소</button>
        ) : (
          <button onClick={handleEdit}>수정</button>
        )}
        <button onClick={handleSubmit}>저장</button>
        <button onClick={handleRemove}>삭제</button>
      </StyleTd>
    </>
  );
};

const StyleTd = styled.td`
  input {
    width: 100%;
  }
  textarea {
    width: 100%;
    height: 200px;
  }
`;

const StyleImg = styled.img`
  width: 100%;
`;

export default Progamer;
