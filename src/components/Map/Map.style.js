import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { YMaps, Map } from 'react-yandex-maps';
const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`
const Content = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
`
const YMap = styled(YMaps)`
    width: 70%;
    height: 100%;
`
const MapYandex = styled(Map)`
    width: 70%;
    height: 100%;
`
const Aside = styled.aside`
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-blend-mode: color-dodge, normal;
    box-shadow: 0px 4px 119px rgba(0, 0, 0, 0.16);
    background: linear-gradient(150deg, rgba(65,53,47,1) 1%, rgba(38,27,42,1) 26%, rgba(36,23,42,0.9587185215883228) 100%, rgba(77,81,64,1) 100%);
`
const LogoWrapper = styled.div`
    padding: 48px 0 0 40px;
`
const Logo = styled.img`
    width: 125px;
    height: 30px;
`
const ListWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const TopList = styled.ul`
    display: block;
    padding: 20px 2px 20px 40px;
`
const BottomList = styled(TopList)`
    /* padding: 10px 0; */
    border-style: solid;
    border-width: 0.2px;
    border-image: linear-gradient(to left,rgb(39 36 36) 1%,rgb(55 54 54) 50%,rgb(104 90 90) 100%) 100% 0 100% 0/3px 0 3px 0 stretch;
`
const Link = styled(NavLink)`
    transition: all 0.2s ease-in;
    color: ${({ active }) => (active ? "#fff" : "#7E7BA2")};
    &:hover {
        color: #fff;
    }
`
const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 15px 0;
    letter-spacing: 1px;
    list-style-type: none;
    line-height: 24px;
    font-size: 16px;
    cursor: pointer;
    border-right: ${({ active }) => (active ? "3px solid #FFF323" : "none")};
    background: ${({ active }) => (active ? "linear-gradient(270deg, #FFF323 -473.83%, rgba(255, 243, 35, 0) 83.89%)" : "transparent")};
    &:hover {
        color: #fff;
    }
`
const LisItemIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 15px;
`
const ContentWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`
const ListContent = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    padding: 15px 25px;
    flex-direction: column;
    background: rgb(105,78,55);
    box-shadow: 9px 0px 39px rgba(0, 0, 0, 0.2);
    background: linear-gradient(-26deg,rgba(90,75,55,1) 0%,rgba(65,65,33,1) 57%,rgb(120 94 75) 100%);
`
const ListContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ListIcon = styled.img`
    width: 20px;
    height: 20px;
`
const ListTitle = styled.h3`
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    font-style: normal;
    font-weight: normal;
    font-family: 'HandelGothicTLRegular';
`
export {
    Container, YMap, MapYandex, Content, Aside, LogoWrapper, Logo, ListWrap, TopList, BottomList,
    ListItem, LisItemIcon, Link, ListContent, ContentWrap, ListContentHeader, ListIcon, ListTitle
}