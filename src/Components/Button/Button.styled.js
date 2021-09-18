import styled from '@emotion/styled';

export const Loadbutton = styled.button`
  margin: 0 auto;
  padding: 8px 16px;
  display: inline-block;
  min-width: 180px;

  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  border: 0;
  border-radius: 2px;
  background-color: #4a0e4e;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  color: #dacedb;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #99779b;
  }
`;
