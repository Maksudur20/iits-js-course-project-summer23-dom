// Your solution goes here
// Hints:
// 1. Assign a id to the tags you want to select
// 2. Use appropriate methods and properties to complete the specified task.
// Example: 
// (style) property to change style
// (classList) property to modify class
// (getAttribute) and (setAttribute) to modify attributes

// now modify the backgorund

const docsBackground = document.getElementById('iits-bg');
docsBackground.classList.remove('bg-danger');
docsBackground.classList.add('c-bg');


//now modify the button

const cvButton = document.getElementById('iits-btn');

cvButton.classList.remove('btn-danger');
cvButton.classList.add('c-button');

const TextColor = document.getElementsByTagName('span');
console.log(TextColor);
for (let i = 1; i < TextColor.length; i++) {
    TextColor[i].classList.remove('text-danger');
    TextColor[i].style.color = '#ff6600';
}
//modify my details in here 


document.getElementById('iits-cr-msg').innerHTML = "Maksudur Sium";

document.getElementById('iits-name').innerHTML = "Maksudur Sium";

document.getElementById('iits-prof').innerHTML = "Web developer";

document.getElementById('iits-edu').innerHTML = "Javascript";

document.getElementById('iits-study').innerHTML = "Bachelor of Computer Science and Engineering";

document.getElementById('iits-school').innerHTML = "International University of Business Agriculture and Technology";

document.getElementById('iits-passion').innerHTML = "Debugging";

document.getElementById('iits-numYears').innerHTML = "1 year";

document.getElementById('iits-hobby').innerHTML = "playing Cricket,Football and Video-game";

document.getElementById('iits-crc').innerHTML = "Freemind";

document.getElementById('iits-ability').innerHTML = "learn everything";

document.getElementById('iits-goal').innerHTML = "Cyber security expert";
 
/*now add to img */

const imgURL = document.getElementById('iits-img');
imgURL.setAttribute('src','img/img.jpg.jpg');

/*now add to my account*/
const facebookURL = document.getElementById('iits-fb-link');
facebookURL.setAttribute('href', 'https://www.facebook.com/Maksudur.Sium/');

const gitURL = document.getElementById('iits-github-link');
gitURL.setAttribute('href', 'https://github.com/Maksudur20/');

const mailto = document.getElementById('iits-email-link');
mailto.setAttribute('href', 'mailto:20maksudur00@gmail.com');


/*const instagramURL = document.getElementById('custom-Instagram-handler');
facebookURL.setAttribute('href', 'https://www.instagram.com/its_sium/');*/
// 1. Assign a id to the tags you want to select
// 2. Use appropriate methods and properties to complete the specified task.
// Example: 
// (style) property to change style
// (classList) property to modify class
// (getAttribute) and (setAttribute) to modify attributes

