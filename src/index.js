import displayListItems from "./modules/displayListItems";
import fetchingData from "./modules/ferchData";

displayListItems(fetchingData('https://api.tvmaze.com/search/shows?q=girls'))