import styled, { css } from 'styled-components';
import { ReactComponent as date } from '../../assets/icons/date.svg';
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg';
import { ReactComponent as warning } from '../../assets/icons/warning.svg';
import { ReactComponent as sunlight } from '../../assets/icons/sunlight.svg';
import { ReactComponent as frame_icon_1 } from '../../assets/icons/frame_icon_1.svg';
import { ReactComponent as frame_icon_2 } from '../../assets/icons/frame_icon_2.svg';
import { ReactComponent as frame_icon_3 } from '../../assets/icons/frame_icon_3.svg';

const MapIconCommon = css`
    width: 16px;
    height: 16px;
`
const ButtonCommon = css`
position: absolute;
    z-index: 2;
    width: 44px;
    cursor: pointer;
    border-width: 1.8px;
    border-image-slice: 1;
    height: ${({ isMultiple }) => isMultiple ? '80px' : '44px'};
    border-image-source: linear-gradient( 180deg,rgb(212 187 194) 0%,rgb(167 136 155) 100% );
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    background-color: #312D30;
`
const IconCommon = css`
    width: 16px;
    height: 16px;
    margin-right: 5px;
`
const getBorder = ({ border }) => {
    switch (border) {
        case 'black': return "3px solid #000";
        case 'white': return "3px solid #fff";
        case 'yellow': return "3px solid #fff323";
        default: return "3px solid #fff323";
    }
}
const getButtonColor = ({ color }) => {
    switch (color) {
        case 'red': return "rgba(255, 31, 0, 0.08)";
        case 'green': return "#42553D";
        case 'yellow': return "#504F3A";
        default: return "rgba(255, 31, 0, 0.08)";
    }
}
const getColor = ({ textColor }) => {
    switch (textColor) {
        case 'red': return "#F63B00";
        case 'green': return "#00FF66";
        case 'yellow': return "#FFF323";
        default: return "F63B00";
    }
}
const getHoverColor = ({ hover }) => {
    switch (hover) {
        case 'red': return "#d93c0b";
        case 'green': return "#0dd65d";
        case 'yellow': return "#d4ca20";
        default: return "#d93c0b";
    }
}
export const Button = styled.button`
  width: ${({ width }) => (width || '100%')};
  padding: ${({ padding }) => (padding || '')};
  height: ${({ height }) => (height || '')};
  text-align: ${({ align }) => (align || 'center')};
  font-size: 14px;
  font-weight: 500;
  font-family: "HandelGothicTLRegular";
  cursor: pointer;
  position: relative;
  border: ${getBorder};
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
    border-right: 2px solid #fff323;
    transform: rotate(49deg) translate(-71%);
  }
  &::after {
    bottom: 0;
    right: 0;
    border-left: 2px solid #fff323;
    transform: rotate(49deg) translate(71%);
  } */
`
export const ButtonIcon_1 = styled(frame_icon_1)`
    ${IconCommon}
`
export const ButtonIcon_2 = styled(frame_icon_2)`
    ${IconCommon}
`
export const ButtonIcon_3 = styled(frame_icon_3)`
    ${IconCommon}
`
export const SunlightIcon = styled(sunlight)`
    ${MapIconCommon};
`
export const RulerIcon = styled(ruler)`
    ${MapIconCommon};
`
export const WarningIcon = styled(warning)`
    ${MapIconCommon};
`
export const DateIcon = styled(date)`
    ${MapIconCommon};
`
export const RulerButton = styled.button`
    ${ButtonCommon};
    top: 150px;
    right: 20px;
`
export const DegreeButton = styled.button`
    width: 55px;
    height: 55px;
    display: flex;
    position: absolute;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Roboto';
    background-color: #312D30;
    cursor: pointer;
    color: #fff;
    top: 660px;
    right: 20px;
    z-index: 2;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-width: 1.8px;
    border-image-slice: 1;
    border-image-source: linear-gradient( 180deg,rgb(212 187 194) 0%,rgb(167 136 155) 100% );
`
export const WarningBtn = styled.button`
    ${ButtonCommon};
    top: 100px;
    right: 20px;
`
export const DateButton = styled.button`
    top: 660px;
    right: 85px;
    width: 160px;
    height: 55px;
    color: #fff;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    position: absolute;
    background-color: #312D30;
    border-width: 1.8px;
    border-image-slice: 1;
    display: flex;
    letter-spacing: 1px;
    border-image-source: linear-gradient( 180deg,rgb(212 187 194) 0%,rgb(167 136 155) 100% );
    z-index: 2;
    cursor: pointer;
    align-items: center;
    justify-content: space-evenly;
`
export const SmallButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 24px;
    border: none;
    padding: 12px;
    color: ${getColor};
    cursor: pointer;
    border-radius: 4px;
    margin-top: 9px;
    background: ${getButtonColor};
    &:hover {
        color: ${getHoverColor};
    }
`