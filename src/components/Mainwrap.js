import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ImagesCards from "./ImagesCards";
import Sharepost from "./Sharepost";
import VideoCards from "./VideoCards";
import { fetchArticlesFunc } from "../utils/fetchArticlesFunc";
import { query, collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Loader from "./Loader";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Modal from "@mui/material/Modal";
import PageLoader from "../page/PageLoader";
import { useSelector } from "react-redux";

const Mainwrap = () => {
  // fetching articles to displaying in the main section
  const [fetchedArticles, setFetchedArticles] = useState("");
  const [Loading, setLoading] = useState(true);
  const [articleType, setArticleType] = useState("image");
  const [emptyArticles, setEmptyArticles] = useState(false);
  const [orderNew, setOrderNew] = useState(true);

  // redux pageloader
  const { pageLoader } = useSelector((state) => state.linkedinReducer);

  useEffect(() => {
    fetchArticlesFunc(
      query,
      collection,
      getDocs,
      db,
      orderBy,
      setFetchedArticles,
      setLoading,
      articleType,
      setEmptyArticles,
      orderNew
    );
  }, [articleType, pageLoader, orderNew]);

  return (
    <>
      <MainWrap>
        <Sharepost />
        <div className="heading">
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 60 }}
            size="small"
          >
            <Select
              value={orderNew}
              onChange={(e) => setOrderNew(e.target.value)}
              label="Article Types"
            >
              <MenuItem value={true}>New</MenuItem>
              <MenuItem value={false}>Old</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 80 }}
            size="small"
          >
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
        {articleType === "video" &&
          (Loading ? (
            <Loader title="fetching post videos ....." />
          ) : emptyArticles ? (
            <div className="itemNotFound">no videos are available</div>
          ) : (
            fetchedArticles.map((items, index) => {
              return (
                <VideoCards
                  key={`${index}`}
                  id={`${items.id}`}
                  post__userLoginId={`${items.post__userLoginId}`}
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
                <ImagesCards
                  key={`${index}`}
                  id={`${items.id}`}
                  post__userLoginId={`${items.post__userLoginId}`}
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
              );
            })
          ))}
      </MainWrap>
      <Modal
        open={pageLoader === "input" ? true : false}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <PageLoader title="your post is uploading to our database......." />
        </div>
      </Modal>
    </>
  );
};

export default Mainwrap;

const MainWrap = styled.div`
  width: 100%;
  > .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
  > .itemNotFound {
    text-align: center;
    font-size: 1.12em;
    font-weight: 500;
    text-transform: capitalize;
    margin: 20px 0;
    color: rgba(0, 0, 0, 0.77);
  }
`;
