const fetchLikes = (arg) => fetch(arg)
  .then((respsonse) => respsonse.json())
  .then((response) => response)
  .catch((err) => err);

export default fetchLikes;