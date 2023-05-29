const insertValue = async (id, username, comment) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oQY2tT2Wba5rNrRwD9NX/comments',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username,
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
};
export default insertValue;