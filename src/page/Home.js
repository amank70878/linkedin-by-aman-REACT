import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Navbar from "../components/Navbar";
import Leftwrap from "../components/Leftwrap";
import Mainwrap from "../components/Mainwrap";
import Rightwrap from "../components/Rightwrap";

const Home = () => {
  //handling scrollTop
  const [rightNavScroll, setRightNavScroll] = useState(false);
  const [leftNavScroll, setLeftNavScroll] = useState(false);
  useEffect(() => {
    const onScrollRight = () => {
      if (window.pageYOffset > 590) {
        setRightNavScroll(true);
      } else {
        setRightNavScroll(false);
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScrollRight);
    window.addEventListener("scroll", onScrollRight, { passive: true });

    return () => window.removeEventListener("scroll", onScrollRight);
  }, []);

  useEffect(() => {
    const onScrollLeft = () => {
      if (window.pageYOffset > 385) {
        setLeftNavScroll(true);
      } else {
        setLeftNavScroll(false);
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScrollLeft);
    window.addEventListener("scroll", onScrollLeft, { passive: true });

    return () => window.removeEventListener("scroll", onScrollLeft);
  }, []);

  // const [scrollTrue, setScrollTrue] = useState(false);
  // window.addEventListener("resize", () => {
  //   if (window.innerWidth < 1050) {
  //     setScrollTrue(true);
  //   }
  // });

  return (
    <>
      <Navbar />
      navbar
      <Wrap>
        <Leftwrap leftNavScroll={leftNavScroll} />
        <Mainwrap />
        <Rightwrap rightNavScroll={rightNavScroll} />
      </Wrap>
    </>
  );
};

export default Home;

const Wrap = styled.div`
  display: grid;
  grid-template-areas: "leftwrap mainwrap rightwrap";
  grid-template-columns: minmax(0, 7fr) minmax(0, 6fr) minmax(300px, 7fr);
  column-gap: 25px;
  background: var(--bg);
  min-height: 100vw;
  width: 100vw;
  padding: 20px 20px;
  overflow-x: hidden;
  position: relative;
  padding-top: 70px;
  @media screen and (max-width: 1600px) {
    grid-template-columns: minmax(0, 4fr) minmax(0, 6fr) minmax(0, 4fr);
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: minmax(0, 3fr) minmax(0, 6fr) minmax(0, 4fr);
  }
  @media screen and (max-width: 1050px) {
    grid-template-columns: minmax(0, 5fr) minmax(0, 11fr) minmax(0, 0);
    padding-right: 0px;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 20px 20px 10px 20px;
    padding-top: 70px;
    position: relative;
  }
  @media screen and (max-width: 500px) {
    padding: 20px 10px;
    padding-top: 70px;
  }
`;
