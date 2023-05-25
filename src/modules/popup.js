import { Modal } from 'bootstrap';
import insertValue from './insertValue.js';

const popUpContainer = document.getElementById('staticBackdrop');
const modal = document.querySelector('.modal');
let output = '';
const showModalPopup = async (ids) => {
  if (ids > 267095) {
    const id = ids - 267095;
    const showListItemComments = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fUbqF1yL645NYNB2lPxl/comments?item_id=${id}`,
    );
    const comments = await showListItemComments.json();
    const showResponse = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const showData = await showResponse.json();
    const ul = document.createElement('ul');
    const h3 = document.createElement('h3');
    if (comments.length) {
      h3.innerHTML = `Comments (${comments.length})`;
    } else {
      h3.innerHTML = 'Comments (0)';
    }
    ul.appendChild(h3);
    output = `
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">${showData.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="popup-image col-sm-12">
      <img class='img-popup' src=${showData.image.medium} id="staticBackdropLabel" alt="Girls Image">
      <div class="subtitles">
        <div class="subtitles-container">
        <p><b>Language</b>:<span>${showData.language}</span></p>
        <p><b>Premiered</b>:<span>${
  showData.premiered === null ? 'Not Available' : showData.premiered
}</span></p>
        <p><b>Type</b>:<span>${showData.type}</span></p>
        <p><b>Rating</b>:<span>${
  showData.rating.average === null
    ? 'Not Available'
    : showData.rating.average
}</span></p>
        </div>
        <p><b>Summary</b>:<span>${
  showData.summary === null ? 'Not Available' : showData.summary
}</span></p>
      </div>
      </div>
        <div class='comments-container'>
        ${comments.length > 0 ? `
        ${comments.forEach((comment) => {
    const li = document.createElement('li');
    li.innerText = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
    ul.appendChild(li);
  })}
        ` : ''
}
        </div>
        <div class='add-container'>
        <h3>Add a comment</h3>
    <form class="needs-validation" novalidate>
    <div class="col-md-4 input-container">
      <input type="hidden" value='${showData.id}' class="form-control hidden" required>
      <input type="text" class="form-control required" id="name" placeholder = "Your name" required>
      <div class="invalid-feedback">
          Please enter a username.
        </div>
    </div>
    <div class="col-md-4 mb-3 id="name" input-container">
      <textarea class="form-control id="textarea" required" id="textarea" placeholder="Your insights" required></textarea>
      <div class="invalid-feedback">
          Please enter a comment.
        </div>
    </div>
    <div class="col-12 btn-submit">
      <button class="btn btn-1 submit comments" id="sub" type="submit">Comment</button>
    </div>
    </form>
        </div>
      </div>
    </div>
  </div>
    `;
    popUpContainer.innerHTML = output;
    document.querySelector('.comments-container').appendChild(ul);
    ul.classList.add('comments-list');
    const myModal = new Modal(modal, {
      keyboard: false,
      focus: true,
    });
    myModal.show();
    (() => {
      const forms = document.querySelectorAll('.needs-validation');
      Array.prototype.slice.call(forms)
        .forEach((form) => {
          form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
    })();
    document.getElementById('sub').addEventListener('click', async () => {
      const name = document.getElementById('name').value;
      const text = document.getElementById('textarea').value;
      await insertValue(id, name, text);
      myModal.hide();
      showModalPopup(ids);
    });
  }
};
export default showModalPopup;