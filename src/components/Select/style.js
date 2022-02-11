import styled from "styled-components";
import { ReactComponent as sortIcon } from '../../assets/icons/sort-icon.svg';
export const Select = styled.select`
    height: ${({ height }) => (height || "")};
    width: ${({ width }) => (width || "100%")};
    padding-left: 5px;
    font-size: 14px;
    color: #fff;
    border: 2px solid #9E806E;
    background: transparent;
    outline: none;
     option {
       color: #000;
       padding: 10px;
       font-size: 14px;
      background: transparent;
  }
`
export const SortIcon = styled(sortIcon)`
    width: 20px;
    height: 20px;
`
export const Wrap = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`