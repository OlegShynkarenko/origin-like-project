import styled from "styled-components";

export const contentWrapper = styled.div`
  max-width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px 0;

  @media (max-width: 1320px) {
    justify-content: center;
  }
`;
