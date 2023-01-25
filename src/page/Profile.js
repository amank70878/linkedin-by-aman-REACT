import styled from "@emotion/styled";
import {
  Avatar,
  CircularProgress,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Loader from "../components/Loader";
import ImagesCards from "../components/ImagesCards";
import VideoCards from "../components/VideoCards";
import { fetchArticleOfUser } from "../utils/FetchArticleOfUser";
import { useParams } from "react-router-dom";

export default function Profile() {
  // fetching user logged__Id
  const { profileid } = useParams();
  const [fetchedUser, setFetchedUser] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      const q = query(
        collection(db, `users`),
        where("user__loginId", "==", `${profileid}`)
      );
      const docSnap = await getDocs(q);

      if (docSnap._snapshot.docs.size > 0) {
        setFetchedUser(
          docSnap.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      }
    };
    fetchUser();
  }, [profileid]);

  // redux pageloader
  const { pageLoader } = useSelector((state) => state.linkedinReducer);

  // fetching articles to displaying in the profile page
  const [fetchedArticles, setFetchedArticles] = useState("");
  const [Loading, setLoading] = useState(true);
  const [articleType, setArticleType] = useState("image");
  const [emptyArticles, setEmptyArticles] = useState(false);

  useEffect(() => {
    fetchArticleOfUser(
      query,
      collection,
      where,
      getDocs,
      db,
      setFetchedArticles,
      setLoading,
      articleType,
      setEmptyArticles,
      profileid
    );
  }, [articleType, setArticleType, pageLoader, profileid]);
  return (
    <>
      <ProfileSection>
        <Navbar />
        <div className="profile__first">
          <div className="profile1__details">
            <Avatar
              className="profile1__img"
              src={fetchedUser && fetchedUser[0].user__profileImg}
            />
            <div className="profile1__title">
              <div className="profile1__name">
                {fetchedUser && fetchedUser[0].user__name}
              </div>
              <div className="profile1__email">
                {fetchedUser && fetchedUser[0].user__email}
              </div>
            </div>
          </div>
        </div>
        <div className="profile__second">
          <span>
            Total Numbers of {articleType} articles :{" "}
            {fetchedArticles ? (
              fetchedArticles.length
            ) : (
              <CircularProgress className="num__loader" />
            )}
          </span>
          <FormControl sx={{ m: 1, minWidth: 120 }} variant="standard">
            <Select
              value={articleType}
              onChange={(e) => setArticleType(e.target.value)}
              label="Article Types"
            >
              <MenuItem value="video">Videos</MenuItem>
              <MenuItem value="image">Images</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="profile__third">
          {articleType === "video" &&
            (Loading ? (
              <Loader title="fetching post videos ....." />
            ) : emptyArticles ? (
              <div className="itemNotFound">no videos are available</div>
            ) : (
              fetchedArticles.map((items, index) => {
                return (
                  <div className="profile__cards" key={`${index}`}>
                    <VideoCards
                      id={`${items.id}`}
                      user__name={`${items.user__name}`}
                      user__email={`${items.user__email}`}
                      user__profileImg={`${items.user__profileImg}`}
                      post__title={`${items.post__title}`}
                      post__videoSrc={`${items.post__src}`}
                      post__mediaType={`${items.post__mediaType}`}
                      post__likes={`${items.post__likes}`}
                      post__comments={`${items.post__comments}`}
                      post__reposts={`${items.post__reposts}`}
                      time={`${items.time}`}
                    />
                  </div>
                );
              })
            ))}

          {articleType === "image" &&
            (Loading ? (
              <Loader title="fetching post images....." />
            ) : emptyArticles ? (
              <div className="itemNotFound">no images are available</div>
            ) : (
              fetchedArticles.map((items, index) => {
                return (
                  <div className="profile__cards" key={`${index}`}>
                    <ImagesCards
                      id={`${items.id}`}
                      user__name={`${items.user__name}`}
                      user__email={`${items.user__email}`}
                      user__profileImg={`${items.user__profileImg}`}
                      post__title={`${items.post__title}`}
                      post__videoSrc={`${items.post__src}`}
                      post__mediaType={`${items.post__mediaType}`}
                      post__likes={`${items.post__likes}`}
                      post__comments={`${items.post__comments}`}
                      post__reposts={`${items.post__reposts}`}
                      time={`${items.time}`}
                    />
                  </div>
                );
              })
            ))}
        </div>
      </ProfileSection>
    </>
  );
}

const ProfileSection = styled.section`
  background: var(--bg);
  width: 100vw;
  min-height: 100vh;
  padding-top: 70px;
  overflow-x: hidden;
  position: relative;
  > .profile__first {
    position: relative;
    width: 100vw;
    height: 25vh;
    background-image: url("https://img.freepik.com/premium-photo/linkedin-sign-3d-rendering-abstract-look-dark-realistic-iconic-background-with-podium-stage_492780-1264.jpg?w=1380");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    > .profile1__details {
      position: absolute;
      bottom: -120px;
      z-index: 9;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      > .profile1__img {
        width: 120px;
        height: 120px;
        border: 2px solid transparent;
        @media (max-width: 500px) {
          width: 100px;
          height: 100px;
        }
        &:hover {
          border: 2px solid lightgrey;
          cursor: pointer;
          transform: scale(1.112);
          transition: all 100ms ease-in-out !important;
        }
      }
      > .profile1__title {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.4;

        > .profile1__name {
          font-size: 1.6em;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.8);
          text-transform: capitalize;
          @media (max-width: 500px) {
            font-size: 1.2em;
          }
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        > .profile1__email {
          cursor: pointer;
          font-size: 1.2em;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.8);
          @media (max-width: 500px) {
            font-size: 1em;
          }
        }
      }
    }
  }
  > .profile__second {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    @media (max-width: 630px) {
      margin-top: 100px;
    }
    @media (max-width: 450px) {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 134px;
    }
    > span {
      font-size: 1em;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.7);
      @media (max-width: 450px) {
        margin-bottom: -5px;
        font-size: 0.79em;
        margin-left: 4px;
      }
      > .num__loader {
        width: 15px !important;
        height: 15px !important;
        margin-left: 5px;
        color: rgba(0, 0, 0, 0.7) !important;
        fill: currentColor !important;
      }
    }
  }
  > .profile__third {
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    align-items: center;
    padding: 0 50px;
    @media (max-width: 1450px) {
      justify-content: center;
    }
    @media (max-width: 1200px) {
      padding: 0;
    }
    @media (max-width: 630px) {
      margin-top: 10px;
      gap: 0px;
    }
    @media (max-width: 450px) {
      margin-top: 0px;
    }
    > .profile__cards {
      width: 30vw;
      height: 530px;
      @media (max-width: 1450px) {
        width: 45vw;
      }
      @media (max-width: 1000px) {
        width: 97vw;
        height: auto;
      }
    }
  }
`;
