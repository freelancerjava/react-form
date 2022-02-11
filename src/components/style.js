import styled from "styled-components";

const getBackgroundColor = ({ background }) => {
    switch (background) {
        case 'primary': return "#00aeef";
        case 'success': return "#2ecc71";
        default: return "transparent";
    }
}
export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`
export const Content = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    &:hover {
        background-color: ${getBackgroundColor};
    }
`