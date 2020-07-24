import styled from "styled-components";

export const StyledSurvey = styled.div`
  background: #f5a742;
  padding: 0 20px;
  box-sizing: border-box;

  .survey-content {
    max-width: 1280px;
    min-height: 300px;
    padding: 0;
    margin: 0;
    text-align: center;

    @media screen and (max-width: 500px) {
      min-height: 0px;
    }
  }
`;
