const displayListItems = async (itemsApi) => {
    let screenItems = document.getElementById('items');
    let apiData = await itemsApi;
    screenItems.innerHTML = "";
    for(let i=  0 ; i < apiData.length ; i += 1){
        screenItems.innerHTML += `<li> <img src="image src="image"/> <div><p>Name</p> <div></img src="" alt="like">5 likes</div></div></li>`
    }
}

export default displayListItems; 