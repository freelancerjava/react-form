import styled from 'styled-components';


export const Button = styled.button`
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
  transition: all 0.2s linear;
  &:hover {
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