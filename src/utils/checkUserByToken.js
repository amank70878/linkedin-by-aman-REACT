export const fetchUserByLocalToken = async (
  query,
  collection,
  where,
  getDocs,
  db,
  searchedUser,
  setSearchedUser,
  navigate,
  dispatch
) => {
  const _localToken = localStorage.getItem("linkedIn-by-aman-id");
  dispatch({
    type: "setPageLoader",
    payload: "app",
  });

  if (_localToken) {
    const q = query(
      collection(db, `users`),
      where("user__loginId", "==", `${_localToken}`)
    );
    const docSnap = await getDocs(q);

    if (docSnap._snapshot.docs.size > 0) {
      await setSearchedUser(
        docSnap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );

      dispatch({
        type: "setPageLoader",
        payload: "none",
      });
      navigate("/");
    } else {
      dispatch({
        type: "setPageLoader",
        payload: "none",
      });
      navigate("login/");
    }
  } else {
    dispatch({
      type: "setPageLoader",
      payload: "none",
    });
    navigate("login/");
  }
};
