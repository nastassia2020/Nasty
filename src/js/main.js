var ad = document.createElement('div');
var img = document.createElement('img');
var btn = document.createElement('button');
var txt = document.createElement('p');

var body = document.querySelector('body');
var placeholder = document.querySelector('#ad');

txt.innerText = 'Phassellus gravida semper nisi.'
btn.innerText = 'click me!';
img.src = './img/cat.jpg';

ad.classList.add ('banner')

ad.appendChild(img);
ad.appendChild(txt);
ad.appendChild(btn);

body.replaceChild(ad, placeholder);