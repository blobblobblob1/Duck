var count = 0;
var loops = 0;
function Update(){
	let duckAnimation = document.getElementsByClassName("duckanim")[0];
	let hold = count;
	count++;
	imageId = "033";
	if(count> hold){
		hold = count;
		imageId = to3String(count);
	}
	duckAnimation.style.animationPlayState = "running";
	duckAnimation.innerHTML = 
	"<img src=\'./Images/frame_" + imageId + "_delay-0.05s.gif\'>";
	document.getElementById("loops").innerHTML = "<h1>Loops: " + loops + "</h1>";
}
function to3String(x){
	if(x === 110){
		count = 0;
		loops++;
		return "00" + count.toString();
	}
	if(Math.floor(Math.log10(x)) === 0 ){
		return "00" + x.toString();
	}
	if(Math.floor(Math.log10(x)) === 1 ){
		return "0" + x.toString();
	}
	if(Math.floor(Math.log10(x)) === 2 ){
		return x.toString();
	}
}