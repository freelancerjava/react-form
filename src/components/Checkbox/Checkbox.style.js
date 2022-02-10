import styled from 'styled-components';

const CheckBoxStyle = styled.div`
  input[type='checkbox'] {
    &.checkbox {
      opacity: 0;
      position: absolute;
      margin: 0;
      z-index: -1;
      width: 0;
      height: 0;
      overflow: hidden;
      pointer-events: none;

      &:checked + div {
        border: 2.5px solid #fff;
        backdrop-filter: blur(20px);
        &::after {
          opacity: 1;
          visibility: visible;
          transform: rotate(45deg) scale(1);
        }
      }
    }
    + div {
      width: 24px;
      height: 24px;
      display: flex;
      border-radius: 2px;
      justify-content: center;
      border: 2.5px solid #fff;
      position: relative;
      transition: all 0.3s ease;
      &::after {
        content: '';
        width: 5px;
        height: 10px;
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
        position: absolute;
        top: 2px;
        opacity: 0;
        visibility: hidden;
        transition-duration: 0.2s;
        transform: rotate(45deg) scale(0.8);
        transition-property: opacity, visibility;
      }
    }
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
export default CheckBoxStyle;