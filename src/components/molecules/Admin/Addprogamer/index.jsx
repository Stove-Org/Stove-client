import { useState } from "react";
import styled from "styled-components";
import { progamerPost } from "../../../../api/admin";

const Addprogamer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initData = {
    name: "",
    nickname: "",
    position: "",
    imgUrl: "",
    birthday: "",
    career: {
      worlds: 0,
      msi: 0,
      lck: 0,
    },
    alias: [],
  };
  const [data, setData] = useState(initData);

  const onIncreaseLck = (e) => {
    e.preventDefault();
    if (data.career.lck !== 0) {
      setData({
        ...data,
        career: { ...data.career, lck: data.career.lck + 1 },
      });
      return;
    } else {
      setData({ ...data, career: { ...data.career, lck: 1 } });
    }
  };

  const onDecreaseLck = () => {
    if (data.career.lck !== 0) {
      setData({
        ...data,
        career: { ...data.career, lck: data.career.lck - 1 },
      });
      return;
    } else if (data.career.lck === 0) {
      return;
    } else {
      setData({ ...data, career: { ...data.career, lck: 0 } });
    }
  };
  const onIncreaseMsi = (e) => {
    e.preventDefault();
    if (data.career.msi !== 0) {
      setData({
        ...data,
        career: { ...data.career, msi: data.career.msi + 1 },
      });
      return;
    } else {
      setData({ ...data, career: { ...data.career, msi: 1 } });
    }
  };

  const onDecreaseMsi = () => {
    if (data.career.msi !== 0) {
      setData({
        ...data,
        career: { ...data.career, msi: data.career.msi - 1 },
      });
      return;
    } else if (data.career.msi === 0) {
      return;
    } else {
      setData({ ...data, career: { ...data.career, msi: 0 } });
    }
  };
  const onIncreaseWorlds = (e) => {
    e.preventDefault();
    if (data.career.worlds !== 0) {
      setData({
        ...data,
        career: { ...data.career, worlds: data.career.worlds + 1 },
      });
      return;
    } else {
      setData({ ...data, career: { ...data.career, worlds: 1 } });
    }
  };

  const onDecreaseWorlds = () => {
    if (data.career.worlds !== 0) {
      setData({
        ...data,
        career: { ...data.career, worlds: data.career.worlds - 1 },
      });
      return;
    } else if (data.career.worlds === 0) {
      return;
    } else {
      setData({ ...data, career: { ...data.career, worlds: 0 } });
    }
  };

  const handleChange = async (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      data.name === "" ||
      data.nickname === "" ||
      data.position === "" ||
      data.imgUrl === "" ||
      data.birthday === ""
    ) {
      alert("모든항목을 작성해주세요.");
      return;
    } else {
      try {
        await progamerPost(data);
        alert("등록되었습니다.");
        setData({ ...initData });
        setIsOpen(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <AddprogamerWrapper>
      {isOpen ? (
        <button onClick={() => setIsOpen(false)}>닫기</button>
      ) : (
        <button onClick={() => setIsOpen(true)}>프로게이머 추가하기</button>
      )}
      {isOpen ? (
        <div>
          <div>
            <label htmlFor="name">name</label>
            <input
              value={data.name}
              onChange={handleChange}
              name="name"
              id="name"
              placeholder="name"
            />
          </div>
          <div>
            <label htmlFor="nickname">nickname</label>
            <input
              value={data.nickname}
              onChange={handleChange}
              name="nickname"
              id="nickname"
              placeholder="nickname"
            />
          </div>
          <div>
            <label htmlFor="position">position</label>
            <select
              name="position"
              value={data.position}
              onChange={handleChange}
            >
              <option value="TOP">TOP</option>
              <option value="JGL">JGL</option>
              <option value="MID">MID</option>
              <option value="BOT">BOT</option>
              <option value="SPT">SPT</option>
            </select>
          </div>
          <div>
            <label htmlFor="imgUrl">imgUrl</label>
            <textarea
              value={data.imgUrl}
              onChange={handleChange}
              name="imgUrl"
              id="imgUrl"
              placeholder="imgUrl"
            />
          </div>
          <div>
            <label htmlFor="birthday">birthday</label>
            <input
              value={data.birthday}
              onChange={handleChange}
              name="birthday"
              id="birthday"
              placeholder="0000-00-00"
            />
          </div>
          <div>
            lck : {data.career.lck}
            <button onClick={onIncreaseLck}>+</button>
            <button onClick={onDecreaseLck}>-</button>
          </div>
          <div>
            lck : {data.career.msi}
            <button onClick={onIncreaseMsi}>+</button>
            <button onClick={onDecreaseMsi}>-</button>
          </div>
          <div>
            lck : {data.career.worlds}
            <button onClick={onIncreaseWorlds}>+</button>
            <button onClick={onDecreaseWorlds}>-</button>
          </div>
          <div>*alias 는 등록 후 수정</div>
          <button onClick={handleSubmit}>선수 추가하기</button>
        </div>
      ) : (
        <></>
      )}
    </AddprogamerWrapper>
  );
};

const AddprogamerWrapper = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #000000;

  * + * {
    margin-top: 5px;
  }

  & > div > div > label {
    margin-right: 10px;
  }
`;

export default Addprogamer;
