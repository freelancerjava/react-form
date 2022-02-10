import styled, { css } from "styled-components";
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
export const UserIcon = styled(user)`
  position: absolute;
  top: 30%;
  left: 25px;
  stroke: white;
`;
export const InboxIcon = styled(inbox)`
  ${common}
`;
export const PasswordIcon = styled(password)`
  ${common}
`;
export const Label = styled.label`
  position: relative;
`;