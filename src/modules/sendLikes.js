const sendLikes = (link, id) => {
  fetch(link, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: id }),
  })
    .catch((err) => err);
};

export default sendLikes;