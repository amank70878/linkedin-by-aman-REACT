import React from "react";
import styled from "@emotion/styled";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Leftwrap = ({ leftNavScroll }) => {
  const { users: user } = useSelector((state) => state.linkedinReducer);

  return (
    <>
      <LeftWrap>
        <First>
          <div className="one">
            <div className="bg"></div>
            <Link
              to={`/profile/${localStorage.getItem("linkedIn-by-aman-id")}`}
            >
              <Avatar src={user && user.user__profileImg} className="profile" />
            </Link>
            <Link
              to={`/profile/${localStorage.getItem("linkedIn-by-aman-id")}`}
            >
              <h4>{user && user.user__name}</h4>
            </Link>
            <p>{user && user.user__email}</p>
          </div>
          <div className="two">
            <div className="left2">
              <h3>Connections</h3>
              <h4>Grow your networks</h4>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
            </svg>
          </div>
          <div className="three">
            <span>Access exclusive tools & insights</span>
            <p className="ptag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path
                  d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                  fill="#f8c77e"
                ></path>
                <path
                  d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                  fill="#e7a33e"
                ></path>
              </svg>
              Learn New Skills, Try Premium Free
            </p>
          </div>
          <div className="four">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M13 4a3 3 0 00-3-3H3v14l5-4.5 5 4.5z"></path>
            </svg>
            My Items
          </div>
        </First>
        <Second leftNavScroll={leftNavScroll}>
          <div className="outer">
            <div className="inner">
              <p>Groups</p>
              <p>Events</p>
              <p>Followed Hashtags</p>
            </div>
            <svg
              className="Plussvg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
          </div>
          <div className="more">Discover more</div>
        </Second>
      </LeftWrap>
    </>
  );
};

export default Leftwrap;

const LeftWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;
`;
const First = styled.div`
  width: 240px;
  background-color: #fff;
  border-radius: 10px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  .one {
    position: relative;
    border-bottom: 1px solid rgb(0, 0, 0, 0.3);
    .bg {
      border-radius: 10px 10px 0 0;
      width: 100%;
      height: 60px;
      background-image: url(./images/card-bg.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .profile {
      margin: 5px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translate(-50%);
      cursor: pointer;
    }
    h4 {
      margin-top: 36px;
      font-size: 1.05em;
      text-align: center;
      font-weight: 600;
      color: rgb(0, 0, 0, 0.8);
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      margin-bottom: 30px;
      font-size: 0.75em;
      color: rgb(0, 0, 0, 0.6);
      text-align: center;
      font-weight: 500;
    }
  }
  .two {
    display: flex;
    margin: 10px 0px;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
    color: rgb(0, 0, 0, 0.7);
    cursor: pointer;
    &:hover {
      background-color: #e3e3e3;
    }
    .left2 {
      h3 {
        font-size: 0.81em;
        font-weight: 500;
      }
      h4 {
        font-size: 0.75em;
        font-weight: 600;
        color: rgb(0, 0, 0, 0.9);
      }
    }
    svg {
    }
  }
  .three {
    border-top: 1px solid rgb(0, 0, 0, 0.3);
    padding: 10px 20px;
    font-size: 0.8em;
    font-weight: 600;
    color: rgb(0, 0, 0, 0.6);
    cursor: pointer;
    &:hover {
      background-color: #e3e3e3;
    }
    p {
      margin-top: 4px;
      display: flex;
      color: rgb(0, 0, 0, 0.8);
      font-weight: 700;
      font-size: 0.9em;
      text-decoration: underline;
      &:hover {
        color: var(--blueText);
      }
    }
    p > svg {
      width: 15px;
      margin-right: 6px;
    }
  }
  .four {
    cursor: pointer;
    border-top: 1px solid rgb(0, 0, 0, 0.3);
    padding: 10px 20px;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: rgb(0, 0, 0, 0.8);
    svg {
      color: rgb(0, 0, 0, 0.6);
      margin-right: 5px;
    }
    &:hover {
      background-color: #e3e3e3;
    }
  }
`;
const Second = styled.div`
  width: 240px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 20px;
  @media only screen and (max-width: 2000px) and (min-width: 800px) {
    position: ${(props) => `${props.leftNavScroll ? "fixed" : ""}`};
    top: ${(props) => `${props.leftNavScroll ? "65px" : ""}`};
  }
  @media only screen and (max-width: 1200px) and (min-width: 800px) {
    width: ${(props) => `${!props.leftNavScroll ? "100%" : ""}`};
  }
  @media screen and (max-width: 800px) {
    /* position: relative; */
    margin-top: 20px;
    width: 100%;
    /* position: none; */
  }

  .outer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    .inner {
      font-size: 0.74em;
      line-height: 1.8;
      color: var(--blueText);
      font-weight: 600;
      p {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .Plussvg {
      cursor: pointer;
      width: 30px;
      height: 30px;
      padding: 7.5px;
      border-radius: 50%;
      &:hover {
        text-decoration: underline;
        background-color: rgb(0, 0, 0, 0.1);
      }
    }
  }
  .more {
    font-size: 0.78em;
    letter-spacing: 0.5px;
    font-weight: 500;
    text-align: center;
    padding: 10px 20px;
    border-top: 1px solid rgb(0, 0, 0, 0.3);
    cursor: pointer;
    &:hover {
      background-color: #e3e3e3;
    }
  }
`;
