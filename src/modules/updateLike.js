const updateLikes = async (arg) => {
  const value = await arg;
  for (let i = 0; i < value.length; i += 1) {
    if (document.getElementById(`${value[i].item_id}like`) !== null) {
      document.getElementById(`${value[i].item_id}like`).innerHTML = `${value[i].likes} ${value[i].likes > 1 ? 'likes' : 'like'}`;
    }
  }
};
export default updateLikes;