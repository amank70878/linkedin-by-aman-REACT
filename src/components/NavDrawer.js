import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { Avatar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const NavDrawer = () => {
  // redux
  const { users } = useSelector((state) => state.linkedinReducer);
  const { drawer } = useSelector((state) => state.linkedinReducer);
  const dispatch = useDispatch();

  // drawer
  const [drawerOpen, setDrawerOpen] = useState(drawer);
  useEffect(() => {
    setDrawerOpen(drawer);
  }, [drawer]);

  return (
    <>
      <Drawer
        open={drawerOpen}
        anchor={"right"}
        onClose={() => {
          setDrawerOpen(false);
          dispatch({
            type: "setDrawer",
            payload: false,
          });
        }}
      >
        <DrawerBox>
          <Svgs>
            <ProfileNav photoUrl={users && users.user__profileImg}>
              <div className="firstD">
                <div className="firstIMGD">
                  <Avatar src={users && users.user__profileImg} />
                  <span>
                    <p className="titleD">{users && users.user__name}</p>
                    <p className="collegeD">
                      Email : {users && users.user__email}
                    </p>
                  </span>
                </div>
                <Link
                  to={`/profile/${localStorage.getItem("linkedIn-by-aman-id")}`}
                  onClick={() => {
                    dispatch({
                      type: "setDrawer",
                      payload: false,
                    });
                  }}
                >
                  <button>View Profile</button>
                </Link>
              </div>
              <div className="secondD">
                <p className="s1D">
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
                <p className="s1D">Settings & Privacy</p>
                <p className="s1D">Help</p>
                <p className="s1D">Language</p>
              </div>
              <div className="thirdD">
                <p className="s1D">Posts & Activity</p>
                <p className="s1D">Job Posting Account</p>
                <p
                  className="s1D s2D"
                  onClick={() => {
                    localStorage.removeItem("linkedIn-by-aman-id");
                    window.location.reload();
                  }}
                >
                  Sign Out
                </p>
              </div>
            </ProfileNav>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
                className="activeNavSvg"
              >
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
              </svg>
              <span className="activeNavDrawer">Home</span>
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
          <IconButton
            className="drawer__close"
            onClick={() => {
              dispatch({
                type: "setDrawer",
                payload: false,
              });
            }}
          >
            <CloseIcon />
          </IconButton>
        </DrawerBox>
      </Drawer>
    </>
  );
};

export default NavDrawer;

const DrawerBox = styled.div`
  width: 25vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  position: relative;
  @media (max-width: 1230px) {
    width: 45vw;
  }
  @media (max-width: 800px) {
    width: 70vw;
  }
  @media (max-width: 450px) {
    width: 80vw;
    padding: 20px 5px;
  }
  .drawer__close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
const Svgs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1.2px solid rgb(0, 0, 0, 0.3);
  width: 100%;

  > div {
    display: inherit;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 10px auto;
    width: 90%;

    cursor: pointer;
    > svg {
      width: 30px;
      height: 30px;
      color: rgb(0 0 0 / 60%);
      margin-right: 10px;
      @media (max-width: 550px) {
        width: 25px;
        height: 25px;
      }
    }
    > .profileD {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 10px;
    }
    > span {
      font-size: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      & > svg {
        margin-left: 3px;
      }
    }
  }
  .activeNavSvg {
    color: #000000;
  }
  .activeNavDrawer {
    position: relative;
    color: #000000 !important;
    &:after {
      position: absolute;
      content: "";
      bottom: -3px;
      width: 100%;
      height: 2px;
      background: #707070;
    }
  }
`;
const ProfileNav = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  border-bottom: 1.2px solid rgb(0, 0, 0, 0.3);
  background: #fff;
  width: 100%;
  margin-bottom: 10px;
  > .lineD {
    width: 100%;
    height: 1px;
    margin: 2px 0;
    background: grey;
  }
  > .firstD {
    display: inherit;
    flex-direction: column;
    > .firstIMGD {
      display: flex;
      flex-direction: row;
    }
    > .MuiAvatar-imgD {
      margin-right: 5px;
      width: 50px;
      height: 50px;
      object-fit: contain;
      border-radius: 50%;
      @media (max-width: 550px) {
      }
    }
    span {
      font-size: 1em;
      color: #000;
      display: inherit;
      flex-direction: column;
      align-items: flex-start;
      flex-wrap: nowrap;
      padding-left: 10px;
      letter-spacing: 0.5px;
      @media (max-width: 550px) {
        font-size: 0.9em;
      }
      > .titleD {
        font-weight: 700;
        &:hover {
          text-decoration: underline;
        }
      }
      > .collegeD {
        font-weight: 500;
      }
    }
    button {
      width: 100%;
      margin: 10px auto;
      color: var(--blueText);
      background: #fff;
      padding: 4px 20px;
      border: 2px solid var(--blueText);
      font-size: 1em;
      font-weight: 600;
      border-radius: 10px;
      transition-duration: 300ms;
      @media (max-width: 550px) {
        font-size: 0.9em;
      }
      &:hover {
        background: #e7f1fd;
      }
    }
  }
  > .secondD,
  > .thirdD {
    padding: 0 10px;
    margin-top: 10px;
    > .s1D {
      font-size: 1.02em;
      color: grey;
      line-height: 1.8;
      font-weight: 500;
      cursor: pointer;
      @media (max-width: 550px) {
        font-size: 0.9em;
      }
      &:hover,
      &:active {
        text-decoration: underline;
      }
    }
    > .s2D {
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
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 88%;
  align-items: flex-start;
  > p {
    display: inherit;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    > svg {
      margin-right: 10px;
      width: 23px;
      height: 23px;
      color: rgb(0 0 0 / 60%);
      @media (max-width: 550px) {
        width: 20px;
        height: 20px;
      }
    }
    > span {
      font-size: 1em;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 550px) {
        font-size: 0.9em;
      }
      & > svg {
        margin-left: 2px;
      }
    }
  }
  > div {
    margin-top: 10px;
    margin-left: 6px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 550px) {
      margin-left: 2px;
    }
    > p {
      font-size: 0.8em;
      color: #915907;
      margin-bottom: 5px;
      text-decoration: underline;
    }
  }
`;
