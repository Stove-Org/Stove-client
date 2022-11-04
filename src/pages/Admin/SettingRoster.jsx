import { useEffect } from "react";
import styled from "styled-components";
import { getDefaultRosters } from "../../api/next-lck";
import { useDispatch } from "react-redux";
import { setDefaultRosters } from "../../reducers/rostersSlice";
import EditRosters from "../../components/molecules/Admin/EditRosters";

const SettingRoster = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getDefaultRosters().then((res) => {
      dispatch(setDefaultRosters(res.data));
    });
  }, []);

  return (
    <SettingWrapper>
      <StyleTable>
        <thead>
          <tr>
            <th>TEAM / POSITION</th>
            <th>TOP</th>
            <th>JGL</th>
            <th>MID</th>
            <th>BOT</th>
            <th>SPT</th>
          </tr>
        </thead>
        <tbody>
          <EditRosters />
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
