import styled from "@emotion/styled";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const PageLoader = ({ title }) => {
  return (
    <>
      <PageLoaderSection>
        <div>
          <span>{title}</span>
          <CircularProgress />
        </div>
      </PageLoaderSection>
    </>
  );
};

export default PageLoader;

const PageLoaderSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  > div {
    display: flex;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 550px) {
      flex-direction: column;
    }
    > span {
      font-size: 1.2em;
      text-transform: capitalize;
      font-weight: 600;
      color: #fff;
      @media screen and (max-width: 550px) {
        font-size: 1em;
        font-weight: 500;
      }
    }
  }
`;
