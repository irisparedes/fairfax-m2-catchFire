'use strict';

const submitButton = document.querySelector('.share__button');
const responseURL = document.querySelector('.response');
const field = document.querySelector('#field');
const fullName = document.querySelector('#fullName');
const jobTitle = document.querySelector('#jobTitle');
let email1 = document.querySelector('#email');
let phone1 = document.querySelector('#phone');
let linkedin1 = document.querySelector('#linkedin');
let github1 = document.querySelector('#github');


function sendRequest(){
  const obj = {
    palette: 1,
    name: fullName.value,
    job: jobTitle.value,
    phone: phone1.value,
    email: email1.value,
    linkedin: linkedin1.value,
    github: github1.value,
    photo: 'https://cdn.memegenerator.es/imagenes/memes/full/6/47/6470819.jpg'
  }
console.log(obj);

 /* console.log('esto nos sale');
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(objJson),
    headers: {
      'content-type': 'application/json'
      
    }
  })
  .then(response => response.json())
  .then(data=>{
    console.log(data);
    for (let i=0; i<data.length; i++) {
      obj[i]=data[i];
  }}
  );*/
}
submitButton.addEventListener('click', sendRequest);
