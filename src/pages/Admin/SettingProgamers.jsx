import { useEffect } from "react";
import styled from "styled-components";
import { progamerGet } from "../../api/admin";
import AdminEditProgamer from "../../components/molecules/AdminEditProgamer";
import { useDispatch } from "react-redux";
import { setInitProgamers } from "../../reducers/progamersSlice";

const SettingProgamers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    progamerGet().then((res) => dispatch(setInitProgamers(res.data)));
  }, []);

  return (
    <SettingWrapper>
      <button>프로게이머 추가하기</button>
      <StyleTable>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>nickname</th>
            <th>position</th>
            <th>imgUrl</th>
            <th>birthday</th>
            <th>career</th>
            <th>alias</th>
            <th>buttons</th>
          </tr>
        </thead>
        <tbody>
          {/* <AdminEditProgamer progamers={progamers} /> */}
          <AdminEditProgamer />
        </tbody>
      </StyleTable>
    </SettingWrapper>
  );
};

const SettingWrapper = styled.div`
  width: 100%;
`;

const StyleTable = styled.table`
  width: 100%;
  table-layout: fixed;

  & > tbody > tr > td {
    vertical-align: middle;
    padding: 5px;
    border: 1px solid #000;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;
export default SettingProgamers;
