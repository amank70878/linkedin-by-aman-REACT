import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ModalInput from "./ModalInput";
import { Avatar, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Sharepost = () => {
  const dispatch = useDispatch();
  const { modalValue } = useSelector((state) => state.linkedinReducer);
  const [open, setOpen] = useState(modalValue);
  const { users } = useSelector((state) => state.linkedinReducer);

  const handleModalStateFunc = (type) => {
    dispatch({
      type: "setModalValue",
      payload: type,
    });
    setOpen(type);
  };

  useEffect(() => {
    setOpen(modalValue);
  }, [modalValue]);

  return (
    <>
      <Wrap>
        <div className="tch-aa">
          <Avatar className="profile" src={users && users.user__profileImg} />
          <button className="input" onClick={(e) => handleModalStateFunc(true)}>
            Start a post
          </button>
        </div>
        <div className="tch-bb">
          <span className="tch-bb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>
            <p>Photo</p>
          </span>
          <span className="tch-bb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
            </svg>
            <p>Video</p>
          </span>
          <span className="tch-bb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
            </svg>
            <p>Event</p>
          </span>
          <span className="tch-bb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
            </svg>
            <p>Write Article</p>
          </span>
        </div>
        <Modal
          open={open}
          onClose={(e) => handleModalStateFunc(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <>
            <ModalInput />
          </>
        </Modal>
      </Wrap>
    </>
  );
};

export default Sharepost;

const Wrap = styled.div`
  padding: 15px 30px;
  background: #fff;
  border-radius: 10px;
  @media (max-width: 500px) {
    padding: 15px 10px;
  }
  .tch-aa {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .profile {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      @media (max-width: 500px) {
        width: 37px;
        height: 37px;
      }
    }
    .input {
      margin: 0 20px;
      padding: 12px 30px;
      width: 100%;
      background: #0a66c2;
      color: rgb(255, 255, 255);
      font-size: 1em;
      font-weight: 700;
      border-radius: 15px;
      cursor: pointer;
      border: none;
      outline: none;
      @media (max-width: 500px) {
        margin: 0 10px;
        padding: 8px 30px;
        font-weight: 500;
        border-radius: 12px;
      }
      &:hover {
        background: #0a66c2da;
        color: rgb(0, 0, 0);
        font-weight: 600;
      }
    }
  }
  .tch-bb {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
    span {
      display: flex;
      align-items: center;
      justify-content: space-around;
      svg {
        width: 22px;
        height: 22px;
      }
      p {
        color: rgba(0, 0, 0, 0.65);
        font-size: 0.81em;
        font-weight: 700;
        margin-left: 7px;
      }
    }
    .tch-bb-1 {
      color: #378fe9;
    }
    .tch-bb-2 {
      color: #5f9b41;
    }
    .tch-bb-3 {
      color: #c37d16;
    }
    .tch-bb-4 {
      color: #e16745;
    }
  }
`;
