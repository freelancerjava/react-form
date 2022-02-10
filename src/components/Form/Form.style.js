import styled from "styled-components";
import img from "../../assets/images/background.svg";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${img}) no-repeat center;
  background-size: cover;
`;
export const Logo = styled.img`
  width: 212px;
  margin-bottom: 62px;
  @media (max-width: 992px) {
        width: 200px;
        margin-bottom: 55px;
    }
    @media (max-width: 768px) {
        width: 180px;
        margin-bottom: 40px;
    }
    @media (max-width: 600px) {
        width: 150px;
        margin-bottom: 30px;
    }
`;
export const Content = styled.div`
  width: 480px;
  display: flex;
  padding: 42px 80px;
  flex-direction: column;
  border: 0.2px solid rgba(184, 81, 132, .3);
  backdrop-filter: blur(20px);
`;
export const TitleWrap = styled.div`
  display: flex;
`;
export const Title = styled.h1`
  cursor: pointer;
  font-size: 20px;
  line-height: 24px;
  margin-right: 12px;
  font-weight: normal;
  justify-content: flex-start;
  font-family: "HandelGothicTLRegular";
  transition: all 0.2s linear;
  color: ${({ active }) => (active ? "#fff" : "#66446B")};
  &:hover {
    color: #f1f1f1;
  }
`;
export const InputWrap = styled.div`
  width: 100%;
  margin-top: 22px;
  display: flex;
  /* position: relative; */
  flex-direction: column;
`;
export const CheckboxWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const CheckboxText = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin-left: 15px;
  font-family: "Roboto";
  font-weight: normal;
  color: rgba(255, 255, 255, 0.87);
`;
export const ForgotPassword = styled.span`
    color: #FFF323;
    font-size: 14px;
    font-family: "HandelGothicTLRegular";
    line-height: 17px;
    cursor: pointer;
    text-align: center;
    &:hover {
        text-decoration: underline;
    }
`
