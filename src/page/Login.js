import styled from "@emotion/styled";
import { auth, provider } from "../firebaseConfig";
import signInFunc from "../utils/auth";
import { addDoc, query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@mui/material";
import PageLoader from "./PageLoader";

const Login = () => {
  const navigate = useNavigate();
  const { pageLoader } = useSelector((state) => state.linkedinReducer);
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <Nav>
          <a href="/">
            <img
              src="https://raw.githubusercontent.com/CleverProgrammers/cp-linkedin-clone/f014d361d787029f15ea0f0f78c053d8c214f138/public/images/login-logo.svg"
              alt=""
            />
          </a>
          <button
            onClick={() =>
              signInFunc(
                auth,
                provider,
                addDoc,
                query,
                collection,
                db,
                where,
                getDocs,
                navigate,
                dispatch
              )
            }
          >
            Sign in
          </button>
        </Nav>
        <Section>
          <div>
            <Hero>
              <h1>
                Welcome to your professional <br /> community
              </h1>
            </Hero>

            <Google
              onClick={() =>
                signInFunc(
                  auth,
                  provider,
                  addDoc,
                  query,
                  collection,
                  db,
                  where,
                  getDocs,
                  navigate,
                  dispatch
                )
              }
            >
              <img
                src="https://raw.githubusercontent.com/CleverProgrammers/cp-linkedin-clone/f014d361d787029f15ea0f0f78c053d8c214f138/public/images/google.svg"
                alt=""
              />
              Sign in with Google
            </Google>
          </div>
          <Image>
            <img
              className="img__login"
              src="https://raw.githubusercontent.com/CleverProgrammers/cp-linkedin-clone/f014d361d787029f15ea0f0f78c053d8c214f138/public/images/login-hero.svg"
              alt=""
            />
          </Image>
        </Section>
      </Container>
      <Modal
        open={pageLoader === "login" ? true : false}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <PageLoader title="Signing In......." />
        </div>
      </Modal>
    </>
  );
};
export default Login;

const Container = styled.div`
  padding: 20px 50px;
  @media (max-width: 500px) {
    padding: 10px 20px;
  }
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding-right: 5px;
    }
  }

  & > button {
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 15px;
    transition-duration: 167ms;
    border: 1px solid #0a66c2;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 0px 24px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    &:hover {
      background-color: #0a66c2;
      color: #ffffff;
      text-decoration: none;
    }
    @media (max-width: 500px) {
      padding: 0px 20px;
    }
  }
  @media (max-width: 500px) {
    margin-bottom: 30px;
  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  @media (max-width: 850px) {
    margin: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    gap: 30px;
  }
`;
const Hero = styled.div`
  width: 100%;
  h1 {
    font-size: 3em;
    color: #2977c9;
    font-weight: 200;
    @media (max-width: 1500px) {
      font-size: 2.3em;
    }
    @media (max-width: 850px) {
      text-align: center;
      font-weight: 500;
    }
    @media (max-width: 600px) {
      text-align: center;
      font-size: 1.5em;
    }
    @media (max-width: 400px) {
      text-align: center;
      font-size: 1.2em;
    }
  }
`;
const Google = styled.button`
  padding: 10px 0;
  min-width: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
  font-size: 20px;
  margin-top: 100px;
  font-weight: 700;
  @media (max-width: 850px) {
    margin-top: 50px;
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 90vw;
    margin-top: 30px;
    font-size: 17px;
  }
`;
const Image = styled.div`
  & > img {
    width: 700px;
    height: 700px;
  }
  @media screen and (max-width: 1300px) {
    & > img {
      width: 500px;
      height: 500px;
    }
  }
  @media screen and (max-width: 500px) {
    & > img {
      width: 90vw;
      height: 90vw;
    }
  }
`;
