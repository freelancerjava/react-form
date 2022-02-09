import { NavLink } from 'react-router-dom';
import { YMaps, Map } from 'react-yandex-maps';
import styled, { css } from "styled-components";
import { ReactComponent as date } from '../../assets/icons/date.svg';
import { ReactComponent as plus } from '../../assets/icons/plus.svg';
import { ReactComponent as logo } from '../../assets/images/logo.svg';
import { ReactComponent as minus } from '../../assets/icons/minus.svg';
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg';
import { ReactComponent as search } from '../../assets/icons/search.svg';
import { ReactComponent as edit } from '../../assets/icons/edit-icon.svg';
import { ReactComponent as warning } from '../../assets/icons/warning.svg';
import { ReactComponent as frame_1 } from '../../assets/icons/frame_1.svg';
import { ReactComponent as frame_2 } from '../../assets/icons/frame_2.svg';
import { ReactComponent as frame_3 } from '../../assets/icons/frame_3.svg';
import { ReactComponent as sunlight } from '../../assets/icons/sunlight.svg';
import { ReactComponent as sortIcon } from '../../assets/icons/sort-icon.svg';
import { ReactComponent as frame_icon_1 } from '../../assets/icons/frame_icon_1.svg';
import { ReactComponent as frame_icon_2 } from '../../assets/icons/frame_icon_2.svg';
import { ReactComponent as frame_icon_3 } from '../../assets/icons/frame_icon_3.svg';

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
const IconCommon = css`
    width: 16px;
    height: 16px;
    margin-right: 5px;
`
const MapIconCommon = css`
    width: 16px;
    height: 16px;
`
const FrameCommon = css`
    width: 40px;
    margin-top: 10px;
`
const HeaderIconCommon = css`
    width: 20px;
    height: 20px;
    cursor: pointer;
    &:hover {
        stroke-width: .3px;
        stroke: #fff;
        fill: white;
    }
`
const ButtonCommon = css`
position: absolute;
    width: 44px;
    height: ${({ isMultiple }) => isMultiple ? '80px' : '44px'};
    border-width: 1.8px;
    border-image-slice: 1;
    border-image-source: linear-gradient( 180deg,rgb(212 187 194) 0%,rgb(167 136 155) 100% );
    z-index: 2;
    cursor: pointer;
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    background-color: #312D30;
`
export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`
export const Content = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
`
export const YMap = styled(YMaps)`
    width: 75%;
    height: 100%;
`
export const MapYandex = styled(Map)`
    width: 75%;
    height: 100%;
    position: relative;
`
export const Aside = styled.aside`
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-blend-mode: color-dodge, normal;
    box-shadow: 0px 4px 119px rgba(0, 0, 0, 0.16);
    background: linear-gradient(150deg, rgba(65,53,47,1) 1%, rgba(38,27,42,1) 26%, rgba(36,23,42,0.9587185215883228) 100%, rgba(77,81,64,1) 100%);
`
export const LogoWrapper = styled.div`
    padding: 48px 0 0 40px;
`
export const Logo = styled(logo)`
    width: 125px;
    height: 30px;
`
export const ListWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const TopList = styled.ul`
    display: block;
    padding: 20px 2px 20px 40px;
`
export const BottomList = styled(TopList)`
    /* padding: 10px 0; */
    border-style: solid;
    border-width: 0.2px;
    border-image: linear-gradient(to left,rgb(39 36 36) 1%,rgb(55 54 54) 50%,rgb(104 90 90) 100%) 100% 0 100% 0/3px 0 3px 0 stretch;
`
export const Link = styled(NavLink)`
    transition: all 0.2s ease-in;
    color: ${({ active }) => (active ? "#fff" : "#7E7BA2")};
    &:hover {
        color: #fff;
    }
`
export const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 15px 0;
    letter-spacing: 1px;
    list-style-type: none;
    line-height: 24px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    color: ${({ active }) => (active ? "#fff" : "#7E7BA2")};
    border-right: ${({ active }) => (active ? "3px solid #FFF323" : "none")};
    background: ${({ active }) => (active ? "linear-gradient(270deg, #FFF323 -473.83%, rgba(255, 243, 35, 0) 83.89%)" : "transparent")};
    &:hover {
        color: #fff;
    }
`
export const LisItemIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 15px;
`
export const ContentWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`
export const ListContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
    height: 100%;
    padding: 15px 30px;
    background: rgb(105,78,55);
    box-shadow: 9px 0px 39px rgba(0, 0, 0, 0.2);
    background: linear-gradient(-26deg,rgba(90,75,55,1) 0%,rgba(65,65,33,1) 57%,rgb(120 94 75) 100%);
`
export const ListContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ListTitle = styled.h3`
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    font-style: normal;
    font-weight: normal;
    font-family: 'HandelGothicTLRegular';
`
export const ListContentItem = styled.div`
    display: flex;
    margin-top: 35px;
`
export const ListItemIcon = styled.img`
    width: 40px;
`
export const ListItemTitle = styled.h1`
    color: ${({ subtext }) => !subtext ? '#fff' : '#757575'};
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    font-style: normal;
    font-family: Roboto;
    letter-spacing: 0.4px;
`
export const ListContentBody = styled.div`
    margin-left: 22px;
`
export const ListContentButton = styled.button`
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
    &:hover{
        color: ${getHoverColor};
    }
`
export const ListNumber = styled.span`
    color: #03DC33;
    letter-spacing: 0.4px;
    font-weight: bold;
    font-size: 12px;
    flex-grow: 1;
    font-family: Roboto;
    line-height: 16px;
    text-align: right;
`
export const Icon_1 = styled(frame_1)`
    ${FrameCommon}
`
export const Icon_2 = styled(frame_2)`
    ${FrameCommon}
`
export const Icon_3 = styled(frame_3)`
    ${FrameCommon}
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
export const EditIcon = styled(edit)`
    ${HeaderIconCommon}
`
export const SearchIcon = styled(search)`
    ${HeaderIconCommon}
`
export const WarningIcon = styled(warning)`
    ${MapIconCommon};
`
export const RulerIcon = styled(ruler)`
    ${MapIconCommon};
`
export const PlusIcon = styled(plus)`
    ${MapIconCommon};
`
export const MinusIcon = styled(minus)`
    ${MapIconCommon};
`
export const DateIcon = styled(date)`
    ${MapIconCommon};
`
export const SunlightIcon = styled(sunlight)`
    ${MapIconCommon};
`
export const WarningBtn = styled.button`
    ${ButtonCommon};
    top: 100px;
    right: 20px;
`
export const RulerBtn = styled.button`
    ${ButtonCommon};
    top: 150px;
    right: 20px;
`
export const PlusMinusBtn = styled.button`
    ${ButtonCommon};
    top: 200px;
    right: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
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