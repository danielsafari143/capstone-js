import './style.css';
import displayListItems from './modules/displayListItems.js';
import fetchingData from './modules/ferchData.js';
import likes from './modules/likes.js';
import fetchLikes from './modules/fetchLikes.js';
import updateLikes from './modules/updateLike.js';
import counterApi from './modules/counterItems.js';
import showModalPopup from './modules/popup.js';

displayListItems(fetchingData('https://api.tvmaze.com/search/shows?q=girls'));
counterApi(fetchingData('https://api.tvmaze.com/search/shows?q=girls'), document.getElementById('counterItem'));
await updateLikes(fetchLikes('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DonU6QfOk4iiEnTnnZtN/likes/'));

window.addEventListener('click', async (e) => {
  likes(e.target.id);
  if (!Number.isNaN(parseInt(e.target.id, 10))) {
    showModalPopup(parseInt(e.target.id, 10));
  }
});
