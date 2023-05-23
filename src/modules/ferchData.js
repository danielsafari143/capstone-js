const fetchingData = (apiLink) => fetch(apiLink)
  .then((data) => data.json())
  .then((datas) => datas)
  .catch((err) => err);

export default fetchingData;
