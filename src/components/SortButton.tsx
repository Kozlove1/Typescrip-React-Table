import styled from "styled-components";
import { SortButtonProps, SortOrder } from "./interface";

export function SortButton(props: SortButtonProps) {
    return (
      <StyledButton
        onClick={props.onClick}
      >
      {props.rowLabel}
      <StyledImg opacity = {props.sortKeys === props.rowKey ? 1 : 0} rotate={props.sortOrder} src='arrow.png' alt='Направление сортировки' />
      </StyledButton>
    );
  }

const StyledButton = styled.button`
  height: 20px;
  border: none;
  width: 200px;
  background-color: #c2c2c2;
`

const StyledImg = styled.img<{rotate: SortOrder, opacity: number}>`
  opacity: ${(props) => props.opacity};
  height: 10px;
  transform: ${(props) => props.rotate === 'ascn' ? 'rotate(180deg)' : 'rotate(0deg)'}
`