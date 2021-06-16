var menuList = [];

function addMenu() {
    let menu = document.getElementById("menu").value;
    if(menu == "") {
        document.getElementById("message").innerHTML = "Please enter a menu first.";
    }
    else {
        menuList.push(menu);
        document.getElementById("message").innerHTML = menu + " is added.";
    }
    return false;
}

function menuGen() {
    if(menuList == 0) {
        document.getElementById("message").innerHTML = "There is no menu to random. Please add menu first";
    }
    else {
        var i = Math.floor((Math.random() * menuList.length));
        document.getElementById("generated").innerHTML = menuList[i];
        document.getElementById("message").innerHTML = "Random!";
    }
}