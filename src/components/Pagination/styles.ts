import styled from "styled-components";

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const PaginationItem = styled.div`
  margin: 0 5px;
  padding: 5px 0;
  text-align: center;
  width: 30px;
  border: 1px solid transparent;
  border-radius: 5px;
  &:hover {
    background: lightblue;
  }
`;

export const PaginationLink = styled.a`
  text-decoration: none;
`;

export const Button = styled.button`
  border: 1px solid transparent;
  border-radius: 5px;
  background: none;
  font-size: 14px;
  &:hover {
    background: lightgray;
  }
`;
