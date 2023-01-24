import React from "react";
import styled from "@emotion/styled";

const Rightwrap = ({ rightNavScroll }) => {
  return (
    <>
      <RightWrap>
        <RightNewsContainer>
          <div className="rightwrap__header">
            <p>LinkedIn News</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
            >
              <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
            </svg>
          </div>
          <RightNewsSection>
            <RightWrapNews
              title="Gamers flock to e-sports careers"
              time="2d ago"
              readers="190"
            />
            <RightWrapNews
              title="The 25 fastest-growing jobs in india"
              time="4d ago"
              readers="14,479"
            />
            <RightWrapNews
              title="PepsiCo to hire 1,200"
              time="3d ago"
              readers="9,490"
            />
            <RightWrapNews
              title="Hiring slows across IT and startups"
              time="4d ago"
              readers="2,190"
            />
            <RightWrapNews
              title="Making sustainability profitable"
              time="2d ago"
              readers="190"
            />
            <RightWrapNews
              title="ऐसे करें एक अच्छा CV तैयार"
              time="2d ago"
              readers="490"
            />
            <RightWrapNews
              title="Bumper hikes for indian employees"
              time="2d ago"
              readers="3,902"
            />
            <RightWrapNews
              title="why non-metros are new startup-hubs"
              time="3d ago"
              readers="875"
            />
            <RightWrapNews
              title="luxury real estate booming in india"
              time="2d ago"
              readers="474"
            />
            <RightWrapNews
              title="Many takers for lateral transfer"
              time="2d ago"
              readers="320"
            />
          </RightNewsSection>
        </RightNewsContainer>
        <RightWrapScrollSection rightNavScroll={rightNavScroll}>
          <RightNewsNavs>
            <span>About</span>
            <span>Accessibility</span>
            <span>Help Center</span>
            <span>Privacy & Terms</span>
            <span>Ad Choice</span>
            <span>Advertising</span>
            <span>Business Services</span>
            <span>Get the linkedIn app</span>
            <span>More</span>
          </RightNewsNavs>
          <RightNewsFooter>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 14"
              data-supported-dps="56x14"
            >
              <g>
                <path d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"></path>
              </g>
            </svg>
            <p>LinkedIn-by-aman Corporation @ 2023</p>
          </RightNewsFooter>
        </RightWrapScrollSection>
      </RightWrap>
    </>
  );
};

export default Rightwrap;

export const RightWrapNews = ({ title, time, readers }) => {
  return (
    <>
      <div className="rightwrapnews__div">
        <div className="rightwrapnews__left"></div>
        <div className="rightwrapnews__right">
          <p>{title}</p>
          <span>
            <p>
              {time} • {readers} readers
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

const RightWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
const RightNewsContainer = styled.div`
  width: 320px;
  background-color: #fff;
  border-radius: 10px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  & > .rightwrap__header {
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    > p {
      font-size: 0.9em;
      letter-spacing: 0.2px;
      font-weight: 700;
      color: rgb(0, 0, 0, 0.8);
    }
    > svg {
      width: 16px;
      height: 16px;
    }
  }
`;
const RightNewsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .rightwrapnews__div {
    width: 100%;
    padding: 7px 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 15px;
    cursor: pointer;
    &:hover {
      background-color: #e3e3e3;
    }
    > .rightwrapnews__left {
      border-radius: 50%;
      width: 6px;
      height: 6px;
      margin-top: 7px;
      border: 3px solid rgba(0, 0, 0, 0.8);
    }
    > .rightwrapnews__right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      > p {
        font-size: 0.85em;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.7);
        &:hover {
          text-decoration: underline;
        }
      }
      > span {
        > p {
          margin-top: 3px;
          font-size: 0.75em;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
`;
const RightWrapScrollSection = styled.div`
  position: ${(props) => `${props.rightNavScroll ? "fixed" : ""}`};
  top: ${(props) => `${props.rightNavScroll ? "70px" : ""}`};
`;
const RightNewsNavs = styled.div`
  width: 320px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  padding: 10px 40px;

  > span {
    margin: 5px 7px;
    font-size: 0.72em;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: var(--blueText);
    }
  }
`;
const RightNewsFooter = styled.div`
  width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  > svg {
    width: 70px;
    object-fit: contain;
    color: var(--blueText);
    fill: currentColor;
  }
  > p {
    font-size: 0.7em;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.87);
  }
`;
