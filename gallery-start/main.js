var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for(var i=1;i<=5;i++)
{
  var newImage = document.createElement('img');
  var path ="images/pic"+i+".jpg";
  newImage.setAttribute('src', path);
  newImage.addEventListener("click",
  function(e){
    var imgSrc = e.target.getAttribute('src');
    onShow(imgSrc);
  }
  );
  console.log(newImage);
  thumbBar.appendChild(newImage);
}

function onShow(path)
{
  console.log(path);
  displayedImage.setAttribute('src',path);
  console.log(displayedImage);
  console.log(path);
}
/* Wiring up the Darken/Lighten button */

