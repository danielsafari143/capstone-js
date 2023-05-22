const fetchingData = (apiLink) => {
    return fetch(apiLink)
        .then(data => data.json())
        .then(datas => datas)
        .catch((err) =>  console.log(err))
};

export default fetchingData;