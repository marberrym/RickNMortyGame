var newimg = document.createElement('img');
newimg.setAttribute('src', 'Images/mainmorty.png');
newimg.classList.add('mainimage');

var playscreen = document.querySelector('.flexcontainer');
playscreen.appendChild(newimg);
playscreen.appendChild(newimg);
playscreen.appendChild(newimg);

var movement = function(event) {
    var pageX = event.pageX;
    pageX += 10;
    newimg.setAttribute('transform', pageX);
}

playscreen.addEventListener("onmousemove", movement);