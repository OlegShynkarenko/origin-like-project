import styled from "styled-components";

export const cardWrapper = styled.div`
  max-width: 300px;
  background: white;
  margin-bottom: 30px;

  @media (max-width: 1470px) {
    max-width: 400px;
  }
  @media (max-width: 1320px) {
    max-width: 420px;
  }
`;

export const title = styled.h5`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px 15px;
`;

export const category = styled.h6`
  margin: 10px 15px 10px;
  text-transform: none;
`;

export const priceAndOsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 15px 10px;
`;

export const supportedOsWrapper = styled.div`
  max-width: 80px;
  & img {
    height: 16px;
    margin-right: 10px;
  }
`;

export const price = styled.div``;
