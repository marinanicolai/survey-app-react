import styled from "styled-components";

export const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0;
    margin: auto;
    box-sizing: border-box;
    text-align: center;
    color: white;

    @media screen and (max-width: 500px) {
      min-height: 0px;
    }
  }
`;
