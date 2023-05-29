import { Modal } from 'bootstrap';
import insertValue from './insertValue.js';
import fetchingData from './ferchData.js';

const showModalPopup = async (ids) => {
  const windowPopUp = document.getElementById('staticBackdrop');
  const popup = document.querySelector('.modal');

  if (ids > 267095) {
    const id = ids - 267095;
    const additionInfo = await fetchingData(`https://api.tvmaze.com/shows/${id}`);
    const comment = await fetchingData(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fUbqF1yL645NYNB2lPxl/comments?item_id=${id}`);
    console.log(comment);
    windowPopUp.innerHTML = `
    <div class="modal-dialog modal-dialog-centered  modal-lg">
      <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">${additionInfo.name}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="certain">
            <div class= "crt">
            <div class="carte">
              <img class="images" src='${additionInfo.image.medium}'/>
              <div class="addInfo">
                <h3>Description</h3>
                <ul id="list" class="list">
                    <li>Title :${additionInfo.name} <li>
                    <li>Language : ${additionInfo.language}<li>
                    <li>Genre : ${additionInfo.genres[0]} <li>
                    <li>Schedule : ${additionInfo.schedule.days[0]} <li>
                    <li>Ended : ${additionInfo.ended ? additionInfo.ended : 'Not available'}<li>
                <ul>
                <p>${additionInfo.summary ? additionInfo.summary : 'Summary Not available'}</p>
              <div/>
            </div>
        </div>
        </div>
        <div class="comments">
          <div>
            <h3>Comments</h3>
            <div id="cmmtId">
              <ul id="listComments"></ul>
            </div>
          </div>
          <input type="text" class="input" id="userName"/>
          <input type="text" class="input" id="userMessage"/>
          <input type="button" value="submit" id="submit"/>
        </div>
            </div>  
        </div>
      </div>
    `;

    for (let i = 0; i < comment.length; i += 1) {
      document.getElementById('listComments').innerHTML += `<li>commnet : ${comment[i].comment}</li>`;
    }

    const popWindow = new Modal(popup, { keyboard: true });
    popWindow.show();

    document.getElementById('submit').addEventListener('click', async () => {
      const name = document.getElementById('userName').value;
      const text = document.getElementById('userMessage').value;
      await insertValue(id, name, text);
      popWindow.hide();
      showModalPopup(ids);
    });
  }
};
export default showModalPopup;