// let list=document.getElementById('list')

// const API = 'https://jsonplaceholder.typicode.com/users'
// const request= new XMLHttpRequest()

// request.open('GET', API)
// request.send()

// request.addEventListener('readystatechange',()=>{
//     if(request.readyState===4){
//         let api2=JSON.parse(request.responseText)
//         let liEl=document.createElement('li');
//         api2.forEach(user => {
//             liEl.innerHTML=`
//             <h2>Name: ${user.name}</h2>
//             <p>Username: ${user.username}</p>
//             <p>lat: ${user.address.geo.lat}
//             lng: ${user.address.geo.lng}</p>
//             `
//             list.appendChild(liEl)
//         });
//     }
// })
document.addEventListener("DOMContentLoaded", function () {
  function showLoading() {
    document.getElementById("loading-container").style.display = "flex";
  }
  function hideLoading() {
    document.getElementById("loading-container").style.display = "none";
  }
  function simulateLoading() {
    showLoading();
    setTimeout(function () {
      hideLoading();
      document.getElementById("main-content").style.display = "block";
    }, 2000);
  }
  simulateLoading();
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => createLiEl(data));

function createLiEl(data) {
  data.forEach((user) => {
    let liEl = document.createElement("li");
    liEl.innerHTML = `
            <h3>Id: ${user.id}</h3>
           <h2>Name: ${user.name}</h2>
             <p>Username: ${user.username}</p>
             <p>Company: ${user.company.name}</p>
             <p>Phone: ${user.phone}</p>
        `;
    list.appendChild(liEl);
  });
}
