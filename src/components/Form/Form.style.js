import styled, { css } from "styled-components";
import img from "../../assets/images/background.svg";
import { ReactComponent as user } from "../../assets/icons/user.svg";
import { ReactComponent as inbox } from "../../assets/icons/inbox.svg";
import { ReactComponent as password } from "../../assets/icons/password.svg";
const common = css`
    position: absolute;
    top: 33%;
    left: 25px;
    @media (max-width: 992px) {
        top: 30%;
        left: 20px;
    }
    @media (max-width: 768px) {
        top: 25%;
        left: 20px;
    }
    @media (max-width: 600px) {
        top: 25%;
        left: 20px;
    }
`
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
  color: ${({ active }) => (active ? "#fff" : "#66446B")};
`;
export const InputWrap = styled.div`
  width: 100%;
  margin-top: 22px;
  display: flex;
  /* position: relative; */
  flex-direction: column;
`;
export const Label = styled.label`
  position: relative;
`;
export const Input = styled.input`
  height: 56px;
  width: 100%;
  color: #fff;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  padding: 30px 20px 30px 50px;
  letter-spacing: 0.15px;
  outline: none;
  margin-bottom: 17px;
  border-width: 1.5px;
  border-image-slice: 1;
  background-color: transparent;
  border-image-source: linear-gradient( 180deg ,rgb(168 75 110) 0%,rgb(197 144 169) 100% );
  ::placeholder {
    color: #fff;
  }
  &:focus {
    -webkit-box-shadow: 0px 5px 28px 5px rgba(212, 190, 201, 0.2);
    -moz-box-shadow: 0px 5px 28px 5px rgba(212, 190, 201, 0.2);
    box-shadow: 0px 5px 28px 5px rgba(212, 190, 201, 0.2);
  }
    @media (max-width: 992px) {
        height: 50px;
        padding: 28px 18px 28px 45px;
    }
    @media (max-width: 768px) {
        height: 40px;
        padding: 20px 15px 20px 45px;
    }
    @media (max-width: 600px) {
        height: 30px;
        padding: 20px 15px 20px 45px;
    }
`;
export const PasswordInput = styled(Input)`
    border-image-source: linear-gradient( 180deg, rgb(224 178 195) 0%,rgb(172 151 161) 100% );
    &[type="password"] {
    background-color: transparent;
  }
`;
export const InboxIcon = styled(inbox)`
  ${common}
`;
export const UserIcon = styled(user)`
  position: absolute;
  top: 30%;
  left: 25px;
  stroke: white;
`;
export const PasswordIcon = styled(password)`
  ${common}
`;
export const ShowPassword = styled.span`
  position: absolute;
  top: 28%;
  right: 20px;
  color: #fff;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 1px;
  @media (max-width: 992px) {
        top: 25%;
    }
    @media (max-width: 768px) {
        top: 22%;
    }
    @media (max-width: 600px) {
        top: 22%;
    }
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
export const SubmitButton = styled.button`
  width: 100%;
  height: 42px;
  font-size: 14px;
  font-weight: 500;
  font-family: "HandelGothicTLRegular";
  cursor: pointer;
  position: relative;
  line-height: 26px;
  border: 3px solid #fff323;
  background: transparent;
  backdrop-filter: blur(20px);
  color: ${({ isAdd }) => isAdd ? '#000' : '#fff323'};
  background-color: ${({ isAdd }) => isAdd ? '#fff323' : 'transparent'};
  margin: 31px 0 20px 0;
  transition: all 0.2s ease;
  &:hover {
      /* color: #000;
      background-color: #FFF323; */
      color: ${({ isAdd }) => isAdd ? '#fff323' : '#000'};
      background-color: ${({ isAdd }) => isAdd ? 'transparent' : '#FFF323'};
  }
  /* &::before,
  ::after {
    height: 25px;
    width: 25px;
    background: transparent;
    position: absolute;
    content: "";
  }
  &::before {
    top: -2px;
    left: -2px;
    border-right: 3px solid #fff323;
    transform: rotate(49deg) translate(-71%);
  }
  &::after {
    bottom: 0;
    right: 0;
    border-left: 3px solid #fff323;
    transform: rotate(49deg) translate(71%);
  } */
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
