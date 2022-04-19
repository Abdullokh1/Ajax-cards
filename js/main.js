window.addEventListener('load', loadHTTP);

function loadHTTP(){
  let outrequest = new XMLHttpRequest();
  let url = "https://reqres.in/api/users";
  outrequest.open("GET", url);

  outrequest.onload = function(){
    let outdata = JSON.parse(outrequest.responseText);
    renderHtml(outdata);
  }

  outrequest.send();
}


const list = document.querySelector('.card');

function renderHtml(data){
  
  data.data.forEach(element => {
    let li = document.createElement('li');
    li.className = 'col-lg-3 col-xs-12 col-sm-4 col-md-4 card__item';
    li.innerHTML = `
    <div class="d-flex align-items-center p-3">
      <div class="me-2">
        <img class="card__img" src="${element.avatar}" alt="hero-img" width='50' height='50'>
      </div>
      <div>
        <h3 class="m-0  card__title">${element.first_name}</h3>
        <h4 class="card__surname m-0">${element.last_name}</h4>
      </div>
     <button class="card__btn">Remove User</button>
    </div>
  
    <ul class=" m-0 p-0 list-unstyled">

      <li class="card__inner__item mb-3">
        <div class="d-flex justify-content-between mb-3 ps-3 pe-3">
          <p class="m-0 card__company">Company</p>
          <p class="m-0">Romaroa something</p>
        </div>
      </li>

      <li class="card__inner__item mb-3">
        <div class="d-flex justify-content-between mb-3 ps-3 pe-3">
          <p class="m-0 card__company">Email</p>
          <p class="m-0 card__email">${element.email}</p>
        </div>
      </li>

      <li class="card__inner__item mb-3">
        <div class="d-flex justify-content-between mb-3 ps-3 pe-3">
          <p class="m-0 card__company">Phone</p>
          <p class="m-0">+0033242</p>
        </div>
      </li>

      <li class="card__inner__item mb-3">
        <div class="d-flex justify-content-between mb-3 ps-3 pe-3">
          <p class="m-0 card__company">Website</p>
          <p class="m-0">something.com</p>
        </div>
      </li>
    </ul>
    `;
    list.appendChild(li);
  
    const buttons = document.querySelectorAll('.card__btn');
    buttons.forEach(el =>{
      el.addEventListener('click', ()=>{
        el.parentElement.parentElement.classList.add('removed');
        list.addEventListener('transitionend', ()=>{
          el.parentElement.parentElement.remove();
        })
      })
    })   

  });
}




