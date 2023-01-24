export const fetchArticlesFunc = async (
  query,
  collection,
  where,
  getDocs,
  db,
  orderBy,
  setFetchedArticles,
  setLoading,
  articleType,
  setEmptyArticles,
  orderNew
) => {
  const _type = articleType === "image" ? "article__Images" : "article__Videos";

  const msgDataCollectionRef = collection(db, _type);

  const q = orderNew
    ? query(msgDataCollectionRef, orderBy("time", "desc"))
    : query(msgDataCollectionRef, orderBy("time", "asc"));
  const docSnap = await getDocs(q);
  if (docSnap._snapshot.docs.size > 0) {
    setFetchedArticles(
      docSnap.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
    setLoading(false);
  } else {
    setLoading(false);
    setEmptyArticles(true);
  }
};
