let i=0;
const images=['image/banner.jpeg','image/banner1.jpeg','image/Capture.jpg']
function changeImg(){
  console.log(i);
    document.querySelector(".main1 img").src=images[i];
		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", 3000);
}

window.onload = changeImg;
