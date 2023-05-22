import './style.css';
import displayListItems from './modules/displayListItems';
import fetchingData from './modules/ferchData';

displayListItems(fetchingData('https://api.tvmaze.com/search/shows?q=girls'));

window.addEventListener('click' , (e) => {
    console.log(e.target.id)
})