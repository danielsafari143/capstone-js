const displayListItems = async (itemsApi) => {
  const screenItems = document.getElementById('items');
  const apiData = await itemsApi;
  screenItems.innerHTML = '';
  for (let i = 0; i < apiData.length; i += 1) {
    screenItems.innerHTML += `<li id="${apiData[i].show.id}item" class="col-sm mt-3">
                                  <div class="card" style="width: 17rem;">
                                   <img src="${apiData[i].show.image.medium}" class="card-img-top image" alt="...">
                                   <div class="card-body">
                                    <div class="space">
                                     <h5 class="card-title">${apiData[i].show.name}</h5>
                                                <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-heart-fill heart" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" id=${apiData[i].show.id} d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                                </svg> 
                                    </div>
                                     <span  class="likes"><P id=${`${apiData[i].show.id}like`} >0 like</P></span>
                                     <div class="btn-container">
                                       <a href="#" class="btn btn-1 comments">Comments</a>
                                     </div>
                                   </div>
                               </div>
                               </li>`;
  }
};

export default displayListItems;