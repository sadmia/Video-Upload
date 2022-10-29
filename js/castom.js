"use strict";

let bannerUpload = document.getElementById('bannerUpload');
let bannerUploadBtn = document.getElementById("bannerUploadBtn");
let bannerImagesShow = document.getElementById("bannerImagesShow");

let subscribeNumberInput = document.getElementById("subscribeNumberInput");
let subNumberShow = document.getElementById("subNumberShow");


let logoUpload = document.getElementById("logoUpload");
let logoImagesShow = document.getElementById("logoImagesShow");
let logoUploadBtn = document.getElementById("logoUploadBtn");

let nameInput = document.getElementById("nameInput");
let nameShow = document.getElementById("nameShow");

bannerUploadBtn.addEventListener("click", function(){
	bannerUpload.click();
});
bannerUpload.addEventListener("input", function(){

	let vUVlu = bannerUpload.value;
	let ext = vUVlu.slice(-3, vUVlu.length);

	if (ext == "jpg" || ext == "JPG" || ext == "png") {
		let url = URL.createObjectURL(this.files[0]);
		bannerImagesShow.src = url;
	}

});

logoUploadBtn.addEventListener("click", function(){
	logoUpload.click();
});
logoUpload.addEventListener("input", function(){

	let vUVlu = logoUpload.value;
	let ext = vUVlu.slice(-3, vUVlu.length);

	if (ext == "jpg" || ext == "JPG" || ext == "png") {
		let url = URL.createObjectURL(this.files[0]);
		logoImagesShow.src = url;
	}
});

let subscribeCount = 0;

subscribeNumberInput.addEventListener("click", function(){
	let inputSub = prompt("Enter Subscribe Number (Intger) :");

	if (inputSub != "" && inputSub >= 0) {
		
		if (inputSub == 0) {
			subNumberShow.innerHTML = "0";
		} else {
			subscribeCount = inputSub;
			kmConvater(subscribeCount);
		}

	} else {
		subNumberShow.innerHTML = "0";
	}
});

nameInput.addEventListener("click", function(){
	let inputName = prompt("Enter Your Channle Name : ");
	if (inputName != "") {
		nameShow.innerHTML = inputName;
		nameShow.title = inputName;
	} else {
		nameShow.innerHTML = "Sad Mia";
	}
});





let subscribeBtn = document.querySelector(".subscribeBtn");
let subscribe = document.querySelector(".subscribe");
let bellSelect = document.querySelector(".bellSelect");
let bellLi = bellSelect.getElementsByTagName("li");
let subscribeBtnPTag = document.querySelector(".subscribeBtn p");
let bellIcon = document.getElementById("bellIcon");

let subValue = 0;

subscribeBtn.addEventListener("click", function(){
	subValue = subValue + 1;

	if (subValue == 1) {
		subValue = subValue + 1;
		subscribeBtn.style.background = "#333";
		subscribeBtnPTag.style.color = "#fff";
		bellIcon.style.display = "block";
		subscribe.style.right = "70px";
	} else if (subValue == 3) {
		subValue = 0;
		subscribeBtn.style.background = "red";
		subscribeBtnPTag.style.color = "#fff";
		bellIcon.style.display = "none";
		bellSelect.style.display = "none";
		subscribe.style.right = "40px";
		bellLi[0].style.background = "#fff0";
		bellLi[1].style.background = "#fff0";
		bellLi[2].style.background = "#fff0";
		bellIcon.className = "fa-regular fa-bell subBell";
	}
});

bellIcon.addEventListener("click", function(){
	bellSelect.style.display = "block";
});



for (let a = 0; a < bellLi.length; a++) {
	bellLi[a].addEventListener("click", function(){
		if (a == 0) {
			bellIcon.className = "fa-sharp fa-solid fa-bell subBell";
			bellLi[0].style.background = "#fff3";
			bellLi[1].style.background = "#fff0";
			bellLi[2].style.background = "#fff0";
		}else if (a == 1) {
			bellIcon.className = "fa-regular fa-bell subBell";
			bellLi[a].style.background = "#fff3";
			bellLi[0].style.background = "#fff0";
			bellLi[2].style.background = "#fff0";
		}else if (a == 2) {
			bellIcon.className = "fa-regular fa-bell-slash subBell";
			bellLi[a].style.background = "#fff3";
			bellLi[0].style.background = "#fff0";
			bellLi[1].style.background = "#fff0";
		}

		bellSelect.style.display = "none";
	});
}





function kmConvater(vlu){
	let k = Math.floor(vlu / 1000);
	let lastK = Math.floor(vlu % 1000);
	let m = Math.floor(vlu / 1000000);

	if (vlu >= 1000 && vlu < 1000000) {
		subNumberShow.innerHTML = k + "K ";
	} else if (vlu >= 1000000) {
		subNumberShow.innerHTML = m + "M ";
	} else {
		subNumberShow.innerHTML = vlu;
	}
}



let videoUrl = "";
let imagesUrl = "";
let videoExt = "";
let imagesExt = "";
let view = 358;


let videoUploadBtn = document.getElementById("videoUploadBtn");
let videoUploadSection = document.querySelector(".videoUploadSection");
let fullSection = document.querySelector(".fullSection");
let videoSection = document.querySelector(".videoSection");


videoUploadBtn.addEventListener("click", function(){
	videoUploadSection.style.display = "block";
	fullSection.style.display = "none";
});





function createVideo(videosrc, imgsrc, videoTitle, videotime, view, uploadTime){
	let div = document.createElement("div");
	div.className = "video";
	let div2 = document.createElement("div");
	div2.className = "videoOrImages";
	let video = document.createElement("video");
	video.className = "videotag";
	video.controls = "0";
	let source = document.createElement("source");
	source.src = videosrc;
	source.type = "video/mp4";
	let img = document.createElement("img");
	img.src = imgsrc;
	img.className = "imgTag";
	let span = document.createElement("span");
	span.innerHTML = videotime;
	let h1 = document.createElement("h1");
	h1.innerHTML = videoTitle;
	let p = document.createElement("p");
	let pSpanView = document.createElement("span");
	pSpanView.innerHTML = view + " views | ";
	let pSpantime = document.createElement("span");
	pSpantime.innerHTML = uploadTime + " ago";

	div.appendChild(div2);
		div.appendChild(h1);
		div.appendChild(p);
			p.appendChild(pSpanView);
			p.appendChild(pSpantime);

	div2.appendChild(video);
		video.appendChild(source);

	div2.appendChild(img);
	div2.appendChild(span);

	videoSection.appendChild(div);
}



let uploadBtn = document.querySelector(".uploadBtn");
let uploadVideoBtn = document.querySelector(".UploadVideoBtn");
let titleInput = document.querySelector(".titleInput");
let imagesBanner = document.querySelector(".imagesBanner");

let videoUpload = document.getElementById("videoUpload");
let bannderUpload = document.getElementById("bannderUpload");

let videoUploadWarning = document.getElementById("videoUploadWarning");
let imagesUploadWarning = document.getElementById("imagesUploadWarning");






uploadVideoBtn.addEventListener("click", function(){
	videoUpload.click();
});

imagesBanner.addEventListener("click", function(){
	bannderUpload.click();
});


videoUpload.addEventListener("input", function(){
	let vUVlu = videoUpload.value;
	let ext = vUVlu.slice(-3, vUVlu.length);
	videoExt = ext;

	if (ext == "mp4") {
		let url = URL.createObjectURL(this.files[0]);
		videoUrl = url;
		videoUploadWarning.innerHTML = "video Uploaded!";
		videoUploadWarning.style.color = "green";
		videoUploadWarning.style.display = "block";

		let titleSlice = vUVlu.slice(12, -4);
		
		if (titleSlice.length >= 30) {
			let slice25 = titleSlice.slice(0, 30);
			console.log(slice25);
			titleInput.value = slice25;
		} else {
			titleInput.value = titleSlice;
		}


	} else {
		videoUploadWarning.innerHTML = "video Upload File!";
		videoUploadWarning.style.color = "red";
		videoUploadWarning.style.display = "block";
	}
	
});


	

bannderUpload.addEventListener("input", function(){

	let vUVlu = bannderUpload.value;
	let ext = vUVlu.slice(-3, vUVlu.length);
	imagesExt = ext;

	if (ext == "jpg" || ext == "JPG" || ext == "png") {
		let url = URL.createObjectURL(this.files[0]);
		imagesUrl = url;
		imagesUploadWarning.innerHTML = "Images Uploaded!";
		imagesUploadWarning.style.color = "green";
		imagesUploadWarning.style.display = "block";
	} else {
		imagesUploadWarning.innerHTML = "Images Upload File!";
		imagesUploadWarning.style.color = "red";
		imagesUploadWarning.style.display = "block";
	}
});



uploadBtn.addEventListener("click", function(){

	let titleVlu = titleInput.value;

	if (titleVlu == "") {
		titleInput.style = "border 1px solid red";
	}


	let vUVlu = bannderUpload.value;
	let ext = vUVlu.slice(-3, vUVlu.length);

	if (videoExt == "mp4" && titleVlu != "") {

		createVideo(videoUrl, imagesUrl, titleVlu, "3:22", view, "2 days");
		videoUploadSection.style.display = "none";
		fullSection.style.display = "block";

		let imgTag = document.querySelector(".imgTag");
		let videotag = document.querySelector(".videotag");

		if (ext == "jpg" || ext == "JPG" || ext == "png") {
			videotag.style.display = "none";
		} else {
			videotag.style.display = "block";
		}

	}

});