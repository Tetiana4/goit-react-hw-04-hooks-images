import styled from '@emotion/styled';

export const Item = styled.li`
  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: 100ms linear;
  }
`;
export const Image = styled.img`
  display: block;
  cursor: pointer;
  transition: 9s;
  width: 300px;
  height: 200px;
`;
