import styled from "styled-components";

const Footer = () => {
  const styles = {
    borderRight: "2px solid #EEEEEE",
  };

  return (
    <FooterWrapper>
      <FooterInnerWrapper>
        <MailToLink href="mailto:stove1101@gmail.com" style={styles}>
          문의
        </MailToLink>
        <MailToLink href="mailto:stove1101@gmail.com">제휴</MailToLink>
      </FooterInnerWrapper>
      <FooterInnerWrapper>
        <SNSLogo href="/#" target={"_blank"} rel="noopener noreferrer">
          <img
            src={
              process.env.PUBLIC_URL +
              "assets/svg/sns_logo/icon-logo-facebook.svg"
            }
            alt="facebook logo"
          />
        </SNSLogo>
        <SNSLogo href="/#" target={"_blank"} rel="noopener noreferrer">
          <img
            src={
              process.env.PUBLIC_URL +
              "assets/svg/sns_logo/icon-logo-twitter.svg"
            }
            alt="twitter logo"
          />
        </SNSLogo>
        <SNSLogo href="/#" target={"_blank"} rel="noopener noreferrer">
          <img
            src={
              process.env.PUBLIC_URL +
              "assets/svg/sns_logo/icon-logo-instagram.svg"
            }
            alt="instagram logo"
          />
        </SNSLogo>
      </FooterInnerWrapper>
      <FooterInnerWrapper className="copyright">
        &copy; {new Date().getFullYear()} Stove, All rights reserved.
      </FooterInnerWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.typography.bodyRg};
  color: ${(props) => props.theme.color.grayScale.gray40};
`;

const FooterInnerWrapper = styled.div`
  & + & {
    margin-top: 14px;
  }
`;

const MailToLink = styled.a`
  color: ${(props) => props.theme.color.grayScale.gray80};
  padding: 0 8px;

  &:hover {
    color: ${(props) => props.theme.color.main80};
    text-decoration: underline;
  }
`;

const SNSLogo = styled.a`
  margin: 0 8px;
`;

export default Footer;
