import './style.css';
import displayListItems from './modules/displayListItems.js';
import fetchingData from './modules/ferchData.js';
import likes from './modules/likes.js';
import fetchLikes from './modules/fetchLikes.js';
import updateLikes from './modules/updateLike.js';

displayListItems(fetchingData('https://api.tvmaze.com/search/shows?q=girls'), fetchLikes('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sc87C4sjE8VQg9VVNXwH/likes/'));
await updateLikes(fetchLikes('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sc87C4sjE8VQg9VVNXwH/likes/'));

window.addEventListener('click', async (e) => {
  likes(e.target.id);
  likes(e.target.id);
});