const updateLikes = async (arg) => {
  const value = await arg;
  for (let i = 0; i < value.length; i += 1) {
    document.getElementById(`${value[i].item_id}like`).innerHTML = `${value[i].likes} like`;
  }
};
export default updateLikes;