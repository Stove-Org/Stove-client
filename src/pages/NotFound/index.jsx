import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundWrapper>
      <BoldText>다시 한번 확인해 주세요!</BoldText>
      <p>
        지금 입력하신 주소의 페이지는 사라졌거나 다른 페이지로 변경되었습니다.
      </p>
      <p>주소를 다시 확인해주세요.</p>
      <ButtonWrapper>
        <Button
          styleType={"primary"}
          text={"이전 페이지"}
          onClick={() => navigate(-1)}
        />
        <Button
          styleType={"primary"}
          text={"홈페이지"}
          onClick={() => navigate("/")}
        />
      </ButtonWrapper>
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.div`
  ${(props) => props.theme.typography.bodyRg};
  margin: 0 40px 0;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoldText = styled.p`
  ${(props) => props.theme.typography.headRgBold};
  margin: 0 0 20px;
`;

const ButtonWrapper = styled.div`
  margin-top: 40px;
`;

export default NotFound;
