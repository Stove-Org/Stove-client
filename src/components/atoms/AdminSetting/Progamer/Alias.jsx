import styled from "styled-components";
import Alia from "./Alia";

const Alias = ({ isEdit, alias, setProgamer }) => {
  return (
    <>
      {alias ? (
        alias.map((alia, index) => {
          return (
            <Wrapper key={index}>
              <Alia
                index={index}
                alia={alia}
                isEdit={isEdit}
                alias={alias}
                setProgamer={setProgamer}
              />
            </Wrapper>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

const Wrapper = styled.ul`
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Alias;
