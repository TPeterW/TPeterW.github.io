window.onload = function() {
    setTimeout(changeTitle, 1000);
    
    bounce1 = document.getElementById("bounce1");
    bounce2 = document.getElementById("bounce2");
    
    bounce1.style.left = window.innerWidth / 2 - 22 + "px";
    bounce2.style.left = window.innerWidth / 2 - 22 + "px";
    
    hideLoading();
}

function changeTitle() {
    title = document.getElementById("mirror-title");
    title.innerHTML = "点击按钮看看你有多美";
}

function ask() {
    var name = prompt("请输入你的姓名：", "");
    if (name.length <= 0) {
        alert("\n请输入姓名");
        return;
    }
    
    showLoading();
    setTimeout(hideLoading, 1400);
    setTimeout(function() {
        if (name == "金小力")
            alert("\n金女神！世界第一美！！！");
        else
            if (confirm("\n恭喜你！你是世界上第二美的人\n想看看第一美的是谁吗？"))
                showImages();
    }, 1500);
}

function showImages() {
    img = document.getElementById("photo-holder");
    title = document.getElementById("mirror-title");
    button = document.getElementById("mirror-button");
    
    showLoading();
    setTimeout(hideLoading, 1500);
    
    num = -1;
    window.setInterval(function () {
        num = (num + 1) % 4;
        img.className = "center-block img-responsive";
        img.setAttribute("src", "img/jxl" + num + ".jpg");
        title.innerHTML = "快看！女神！";
        
        button.innerHTML = "魔镜被美哭了，停止工作了";
        button.disabled = true;
    }, 2000);
}

function showLoading() {
    bounce1.style.visibility = "visible";
    bounce2.style.visibility = "visible";
}

function hideLoading() {
    bounce1.style.visibility = "hidden";
    bounce2.style.visibility = "hidden";
}

