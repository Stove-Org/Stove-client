import { useState } from "react";
import styled from "styled-components";
import Hashtags from "./Hashtags";
import { useDispatch } from "react-redux";
import {
  setUpdateAllNews,
  deleteAllNews,
} from "../../../../reducers/newsSlice";
import { newsUpdate, newsDelete } from "../../../../api/admin";

const EditNews = ({ item }) => {
  const dispatch = useDispatch();

  const dataChange =
    item.uploadedAt &&
    item.uploadedAt.slice(0, 4) +
      "-" +
      item.uploadedAt.slice(5, 7) +
      "-" +
      item.uploadedAt.slice(8, 10) +
      " " +
      item.uploadedAt.slice(14, 16) +
      ":" +
      item.uploadedAt.slice(17, 19);

  const initData = {
    headline: item.headline,
    imgUrl: item.imgUrl,
    isPublished: item.isPublished,
    linkUrl: item.linkUrl,
    uploadedAt: dataChange,
    viewsCount: item.viewsCount,
    hashtags: item.hashtagViews,
  };

  const [news, setNews] = useState(initData);
  const [isEdit, setIsEdit] = useState(false);
  const [urlOpen, setUrlOpen] = useState(false);
  const [currentHashtag, setCurrentHashtag] = useState("");

  const openHandler = () => {
    setUrlOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setNews({ ...news, [name]: value });
  };

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleCancel = () => {
    setIsEdit((prev) => !prev);
    setNews((prev) => (prev = { ...initData }));
  };

  const handleAddHashtag = () => {
    setNews(
      (prev) =>
        (prev = {
          ...news,
          hashtags: [...news.hashtags, currentHashtag],
        })
    );
    setCurrentHashtag((prev) => (prev = ""));
  };

  const onIncrease = (e) => {
    e.preventDefault();
    if (news.viewsCount !== 0) {
      setNews({
        ...news,
        viewsCount: news.viewsCount + 1,
      });
      return;
    } else {
      setNews({ ...news, viewsCount: 1 });
    }
  };

  const onDecrease = () => {
    if (news.viewsCount !== 0) {
      setNews({
        ...news,
        viewsCount: news.viewsCount - 1,
      });
      return;
    } else if (news.viewsCount === 0) {
      return;
    } else {
      setNews({ ...news, viewsCount: 0 });
    }
  };

  const handleSubmit = () => {
    try {
      if (news.imgUrl === null) {
        const newData = {
          ...news,
          imgUrl: "",
        };
        console.log(newData);
        newsUpdate(item.id, newData);
        dispatch(setUpdateAllNews({ id: item.id, news }));
      } else {
        newsUpdate(item.id, news);
      }
      setIsEdit(false);
      alert("정상적으로 저장되었습니다.");
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = async () => {
    try {
      if (window.confirm(`[id: ${item.id}] 뉴스를 삭제하시겠습니까?`)) {
        await newsDelete(item.id);
        dispatch(deleteAllNews(item.id));
        window.location.reload();
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
          <textarea
            type="text"
            name="headline"
            onChange={handleChange}
            value={news.headline ? news.headline : ""}
          />
        ) : (
          news.headline
        )}
      </StyleTd>
      <StyleTd>
        {isEdit ? (
          <textarea
            name="imgUrl"
            onChange={handleChange}
            value={news.imgUrl ? news.imgUrl : ""}
          />
        ) : (
          news.imgUrl && <StyleImg src={news.imgUrl} alt="뉴스 이미지" />
        )}
      </StyleTd>
      <StyleTd>
        {isEdit ? (
          <select
            name="isPublished"
            value={news.isPublished ? news.isPublished : "false"}
            onChange={handleChange}
          >
            <option value="false">false</option>
            <option value="true">true</option>
          </select>
        ) : news.isPublished ? (
          "true"
        ) : (
          "false"
        )}
      </StyleTd>
      <StyleTd>
        {isEdit ? (
          <textarea
            name="linkUrl"
            onChange={handleChange}
            value={news.linkUrl ? news.linkUrl : ""}
          />
        ) : (
          <>
            <StyleUrl urlOpen={urlOpen}>{news.linkUrl}</StyleUrl>
            <button onClick={() => openHandler()}>
              {urlOpen ? "닫기" : "펼치기"}
            </button>
          </>
        )}
      </StyleTd>
      <StyleTd>
        {isEdit ? (
          <div>
            <div>변경날짜(입력양식: yyyy-mm-dd hh:mm)</div>
            <input
              type="text"
              name="uploadedAt"
              onChange={handleChange}
              value={news.uploadedAt ? news.uploadedAt : ""}
              placeholder="yyyy-mm-dd hh:mm"
            />
          </div>
        ) : (
          news.uploadedAt
        )}
      </StyleTd>
      <StyleTd>
        {news.viewsCount}
        {isEdit ? (
          <>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
          </>
        ) : (
          <></>
        )}
      </StyleTd>
      <StyleTd>
        <Hashtags isEdit={isEdit} hashtags={news.hashtags} setNews={setNews} />
        {isEdit ? (
          <div>
            <input
              type="text"
              name="hashtags"
              onChange={(e) => setCurrentHashtag(e.target.value)}
              value={currentHashtag}
              placeholder="# 없이 입력"
            />
            <button type="submit" onClick={handleAddHashtag}>
              추가
            </button>
          </div>
        ) : (
          <></>
        )}
      </StyleTd>
      <StyleTd>
        {isEdit ? (
          <>
            <button onClick={handleCancel}>취소</button>
            <button onClick={handleSubmit}>저장</button>
          </>
        ) : (
          <button onClick={handleEdit}>수정</button>
        )}
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

const StyleUrl = styled.div`
  white-space: ${(props) => (props.urlOpen ? "normal" : "nowrap")};
  overflow: ${(props) => (props.urlOpen ? "visible" : "hidden")};
  text-overflow: ${(props) => (props.urlOpen ? "clip" : "ellipsis")};
`;

const StyleImg = styled.img`
  width: 100%;
`;

export default EditNews;
