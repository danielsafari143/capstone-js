import './style.css';
import displayListItems from './modules/displayListItems.js';
import fetchingData from './modules/ferchData.js';
import likes from './modules/likes.js';
import fetchLikes from './modules/fetchLikes.js';
import updateLikes from './modules/updateLike.js';

displayListItems(fetchingData('https://api.tvmaze.com/search/shows?q=girls'));
await updateLikes(fetchLikes('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DonU6QfOk4iiEnTnnZtN/likes/'));

window.addEventListener('click', async (e) => {
  likes(e.target.id);
});