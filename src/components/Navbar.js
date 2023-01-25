import React, { useState } from "react";
import styled from "@emotion/styled";
import { Avatar, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import NavDrawer from "./NavDrawer";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Link } from "react-router-dom";

const Navbar = () => {
  // redux
  const { users } = useSelector((state) => state.linkedinReducer);
  const dispatch = useDispatch();

  // profile div
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <>
      <Nav>
        <Leftnav>
          <Link to={`/`}>
            <svg
              className="leftnav__svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </Link>
          <div className="search">
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
              <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
            </svg>
            <input type="text" placeholder="Search" />
          </div>
        </Leftnav>
        <Rightnav>
          <Svgs>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
                className="activeNavDSvg"
              >
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
              </svg>
              <span className="activeNavD">Home</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>
              <span>My Networks</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>
              <span>Jobs</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
              </svg>
              <span>Messaging</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
              </svg>
              <span>Notifications</span>
            </div>
            <div>
              <Avatar
                src={users && users.user__profileImg}
                className="profile"
              />
              <span onClick={toggleSwitch} className="profileNav__me">
                Me
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
                  <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
                </svg>
                <ProfileNav
                  isEnabled={isEnabled}
                  photoUrl={users && users.user__profileImg}
                >
                  <div className="first">
                    <div className="firstIMG">
                      <Avatar src={users && users.user__profileImg} />
                      <span>
                        <p className="title">{users && users.user__name}</p>
                        <p className="college">{users && users.user__email}</p>
                      </span>
                    </div>
                    <Link
                      to={`/profile/${localStorage.getItem(
                        "linkedIn-by-aman-id"
                      )}`}
                    >
                      <button>View Profile</button>
                    </Link>
                  </div>
                  <div className="second">
                    <p className="s1">
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
                      Try Premium for free
                    </p>
                    <p className="s1">Settings & Privacy</p>
                    <p className="s1">Help</p>
                    <p className="s1">Language</p>
                  </div>
                  <div className="third">
                    <p className="s1">Posts & Activity</p>
                    <p className="s1">Job Posting Account</p>
                    <p
                      className="s1 s2"
                      onClick={() => {
                        localStorage.removeItem("linkedIn-by-aman-id");
                        window.location.reload();
                      }}
                    >
                      Sign Out
                    </p>
                  </div>
                </ProfileNav>
              </span>
            </div>
          </Svgs>
          <Work>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
              </svg>
              <span>
                Work
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
                  <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
                </svg>
              </span>
            </p>
            <div>
              <p>Learn New Skills</p>
              <p>Try Premium Free</p>
            </div>
          </Work>
        </Rightnav>
        <DrawerDiv>
          <IconButton
            onClick={() => {
              dispatch({
                type: "setDrawer",
                payload: true,
              });
            }}
          >
            <MenuOpenIcon className="nav__openDrawer" />
          </IconButton>
          <NavDrawer />
        </DrawerDiv>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15vw;
  margin: 0 auto;
  background: #fff;
  overflow: hidden;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  @media (max-width: 1450px) {
    padding: 10px 100px;
  }
  @media (max-width: 1200px) {
    padding: 10px 10px;
  }
`;
const Leftnav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .leftnav__svg {
    color: #0a66c2;
    fill: currentColor;
    width: 30px;
    height: 30px;
    @media (max-width: 600px) {
      width: 25px;
      height: 25px;
      object-fit: cover;
    }
  }
  .search {
    background-color: #ecf5ff;
    display: inherit;
    align-items: center;
    padding: 2px 15px;
    margin: 0 10px;
    border-radius: 8px;
    svg {
      color: grey;
    }
    input {
      width: 300px;
      padding: 7px 20px 7px 8px;
      font-size: 0.8em;
      letter-spacing: 0.7px;
      border: none;
      outline: none;
      background: none;
      @media (max-width: 850px) {
        width: 50vw;
      }
    }
  }
`;
const Rightnav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 850px) {
    display: none;
  }
`;
const Svgs = styled.div`
  .activeNav {
    position: relative;
    &:after {
      position: absolute;
      content: "";
      bottom: -5px;
      width: 150%;
      height: 2px;
      background: #272727;
    }
  }
  .activeNavSvg {
    color: #292929;
  }
  display: flex;
  align-items: center;
  flex-direction: row;
  border-right: 1.2px solid rgb(0, 0, 0, 0.3);
  > div {
    display: inherit;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    cursor: pointer;
    > svg {
      width: 23px;
      height: 23px;
      color: rgb(0 0 0 / 60%);
    }
    .profile {
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
    span {
      font-size: 0.7em;
      letter-spacing: 0.2px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      & > svg {
        margin-left: 3px;
      }
    }
  }
  > .profileNav__me {
    position: relative;
  }
`;
const ProfileNav = styled.section`
  display: ${(props) => `${props.isEnabled ? "flex" : "none"}`};
  flex-direction: column;
  position: fixed;
  top: 70px;
  z-index: 10;
  padding: 15px 10px;
  border-radius: 13px;
  border: 1px solid grey;
  background: #fff;
  @media (max-width: 1200px) {
    right: 15px;
  }
  > .line {
    width: 100%;
    height: 1px;
    margin: 2px 0;
    background: grey;
  }
  > .first {
    display: inherit;
    flex-direction: column;
    > .firstIMG {
      display: flex;
      flex-direction: row;
    }
    .MuiAvatar-img {
      margin: 5px;
      width: 50px;
      height: 50px;
      object-fit: contain;
      border-radius: 50%;
    }
    span {
      font-size: 1.1em;
      color: #000;
      display: inherit;
      flex-direction: column;
      align-items: flex-start;
      flex-wrap: nowrap;
      padding-left: 10px;
      letter-spacing: 0.5px;
      .title {
        font-weight: 700;
        &:hover {
          text-decoration: underline;
        }
      }
      .college {
        font-weight: 500;
      }
    }
    button {
      width: 100%;
      margin: auto;
      margin-top: 5px;
      color: var(--blueText);
      background: #fff;
      padding: 4px 20px;
      border: 2px solid var(--blueText);
      font-size: 1em;
      font-weight: 600;
      border-radius: 10px;
      transition-duration: 300ms;
      &:hover {
        background: #e7f1fd;
      }
    }
  }
  > .second,
  > .third {
    padding: 0 10px;
    margin-top: 20px;
    min-width: 250px;
    .s1 {
      font-size: 1.12em;
      color: grey;
      line-height: 1.8;
      font-weight: 500;
      cursor: pointer;
      &:hover,
      &:active {
        text-decoration: underline;
      }
    }
    .s2 {
      color: #000000;
      line-height: 1.8;
    }
    svg {
      width: 15px;
      height: 15px;
      margin-right: 4px;
    }
  }
`;
const Work = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    display: none;
  }
  p {
    display: inherit;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    > svg {
      width: 23px;
      height: 23px;
      color: rgb(0 0 0 / 60%);
    }
    span {
      font-size: 0.68em;
      letter-spacing: 0.2px;
      display: flex;
      align-items: center;
      justify-content: center;
      & > svg {
        margin-left: 2px;
      }
    }
  }
  div {
    margin-left: 6px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    p {
      font-size: 0.7em;
      color: #915907;
      text-decoration: underline;
    }
  }
`;
const DrawerDiv = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: block;
  }
  .nav__openDrawer {
    width: 25px !important;
    height: 25px !important;
    color: #000000b7 !important;
    fill: currentColor !important;
  }
`;
