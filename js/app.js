var box1Div, msgDiv;
window.onload = function()
{
	box1Div = document.getElementById("box1");
	msgDiv = document.getElementById('msg');
	img1 = document.getElementById('img1');

	box1Div.ondragover = function(e){
		e.preventDefault();
	}

	box1Div.ondrop = function(e){
		e.preventDefault();
		var img = document.getElementById(e.dataTransfer.getData("imgId"));
		box1Div.appendChild(img);
	}

	img1.ondragstart = function(e){
		e.dataTransfer.setData('imgId','img1');
	}

	imgcontainer = document.getElementById('imgcontainer');
	imgcontainer.ondragover = function(e){
		e.preventDefault();
	}

	imgcontainer.ondrop = function(e){
		e.preventDefault();
		var f = e.dataTransfer.files[0];
		var filereader = new FileReader();
		filereader.onload=function(e){
			imgcontainer.innerHTML = "<img src=\""+filereader.result+"\">";
		}
		filereader.readAsDataURL(f);
	}
}



function showObj(obj){
	var s = '';
	for(var k in obj)
	{
		s += k+':'+obj[k]+'<br/>';
	}
	msgDiv.innerHTML = s;
}