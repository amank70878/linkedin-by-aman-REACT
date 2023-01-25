export const addImage = async (
  user,
  addDoc,
  collection,
  serverTimestamp,
  db,
  getImageUrl,
  title,
  dispatch
) => {
  const messageCollectionRef = collection(db, `article__Images`);
  await addDoc(messageCollectionRef, {
    post__userLoginId: user.user__loginId,
    user__name: user.user__name,
    user__email: user.user__email,
    user__profileImg: user.user__profileImg,
    post__title: title,
    post__src: getImageUrl,
    post__mediaType: "image",
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
