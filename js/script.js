function sayIt() { 
	document.querySelector('h1').innerHTML = "Congratulations <br>" + window.location.hash + "!!"; 
}

if (window.location.hash) { 
	sayIt(); 
}

var cl = [];
var clr = ['#ff3b30', '#ffac55', '#5ac8fa', '#5856d6', '#ff9500', '#4cd964', '#007aff', '#ff2d55'];
if (cl.length == 0) { 
	cl = clr.slice(); 
}
var randomnumber = Math.floor(Math.random() * cl.length);

document.body.style.backgroundColor = cl[randomnumber];
cl.splice(randomnumber, 1);
setInterval(function() { 
	if (cl.length == 0) { 
		cl = clr.slice(); 
	} 
	var randomnumber = Math.floor(Math.random() * cl.length);
    document.body.style.backgroundColor = cl[randomnumber];
    cl.splice(randomnumber, 1); 
}, 1000);

