import { signInWithPopup } from "firebase/auth";
const signInFunc = (
  auth,
  provider,
  addDoc,
  query,
  collection,
  serverTimestamp,
  db,
  where,
  getDocs,
  navigate,
  dispatch
) => {
  signInWithPopup(auth, provider)
    .then(async (data) => {
      dispatch({
        type: "setPageLoader",
        payload: "login",
      });
      const checkUserFunc = async () => {
        const q = query(
          collection(db, `users`),
          where("user__email", "==", `${data.user.email}`)
        );
        const docSnap = await getDocs(q);

        if (docSnap._snapshot.docs.size > 0) {
          localStorage.setItem(
            "linkedIn-by-aman-id",
            data._tokenResponse.localId
          );

          dispatch({
            type: "setPageLoader",
            payload: "none",
          });
          navigate("/");
        } else {
          const messageCollectionRef = collection(db, `users`);
          await addDoc(messageCollectionRef, {
            user__loginId: data._tokenResponse.localId,
            user__name: data.user.displayName,
            user__email: data.user.email,
            user__profileImg: data.user.photoURL,
            // time: serverTimestamp(),
          });
          localStorage.setItem(
            "linkedIn-by-aman-id",
            data._tokenResponse.localId
          );
          dispatch({
            type: "setPageLoader",
            payload: "none",
          });
          navigate("/");
        }
      };
      checkUserFunc();
    })
    .catch((err) => console.warn(err));
};

export default signInFunc;
