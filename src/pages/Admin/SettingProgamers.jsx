import { useEffect } from "react";
import styled from "styled-components";
import { progamerGet } from "../../api/admin";
import EditProgamer from "../../components/molecules/Admin/EditProgamer";
import { useDispatch } from "react-redux";
import { setInitProgamers } from "../../reducers/progamersSlice";
import Addprogamer from "../../components/molecules/Admin/Addprogamer";

const SettingProgamers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    progamerGet().then((res) => dispatch(setInitProgamers(res.data)));
  }, []);

  return (
    <SettingWrapper>
      <Addprogamer />
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
          <EditProgamer />
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
