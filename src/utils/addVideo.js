export const addVideo = async (
  user,
  addDoc,
  collection,
  serverTimestamp,
  db,
  _videoUrl,
  title,
  dispatch
) => {
  const messageCollectionRef = collection(db, `article__Videos`);
  await addDoc(messageCollectionRef, {
    post__userLoginId: user.user__loginId,
    user__name: user.user__name,
    user__email: user.user__email,
    user__profileImg: user.user__profileImg,
    post__title: title,
    post__src: _videoUrl,
    post__mediaType: "video",
    post__likes: "79",
    post__comments: "80",
    post__reposts: "2",
    time: serverTimestamp(),
  });
  dispatch({
    type: "setPageLoader",
    payload: false,
  });
};
