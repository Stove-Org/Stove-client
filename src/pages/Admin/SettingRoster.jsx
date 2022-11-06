import { useEffect } from "react";
import styled from "styled-components";
import { rostersGet } from "../../api/admin";
import { useDispatch, useSelector } from "react-redux";
import { setInitRosters } from "../../reducers/rostersSlice";
import EditRoster from "../../components/molecules/Admin/EditRoster";

const SettingRoster = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    rostersGet().then((res) => dispatch(setInitRosters(res.data)));
  }, []);

  return (
    <SettingWrapper>
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
          <EditRoster />
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

export default SettingRoster;
