
    var index = 1;
    function changeImage(){
        var imgs = ["../image/imgTrangChu/imgTrangChu1.png", "../image/imgTrangChu/imgTrangChu2.jpg"];
        document.getElementById('img').src = imgs[index];
        index++;
        if(index==2){
            index=0;
        }
    }
    setInterval(changeImage ,10000);