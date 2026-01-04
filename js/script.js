// 等網頁內容載入完才綁事件
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("welcomeBtn");
    if(btn){
        btn.addEventListener("click", function(){
            alert("謝謝您造訪我們的網站!再麻煩您幫我們的粉絲專業按個追蹤以及按個讚，多多支持一下我們!!!");
        });
    }
});
