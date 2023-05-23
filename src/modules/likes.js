import sendLikes from './sendLikes.js';
import fetchLikes from './fetchLikes.js';
import updateLikes from './updateLike.js';

const likes = async (idRef) => {
  const val = parseInt(idRef, 10);
  if (!Number.isNaN(val)) {
    await sendLikes('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sc87C4sjE8VQg9VVNXwH/likes/', val);
    const ids = document.getElementById(idRef);
    const parent = ids.parentNode;
    parent.style.color = 'red';
    await updateLikes(fetchLikes('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sc87C4sjE8VQg9VVNXwH/likes/'));
  }
};

export default likes;