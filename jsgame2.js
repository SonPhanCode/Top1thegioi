var menu = document.getElementsByClassName("menu")[0];
var tg = 10;
/*var images = [
    "images/10cogai.jpg",
    "images/bennharong.jpg",
    "images/bevandan.jpg",
    "images/buidinhcu.jpg",
    "images/buidinhduc.jpg",
    "images/chientranhbiengioi.jpg",
    "images/cuchinhlan.jpg",
    "images/dangdinhho.jpg",
    "images/dbptrenkhong.jpg",
    "images/dinhthilekim.jpg",
    "images/lathitam.jpg",
    "images/lavancau.jpg",
    "images/lethinghe.jpg",
    "images/lytutrong.jpg",
    "images/menguyenthithu.jpg",
    "images/ngothituyen.jpg",
    "images/nguyenthisuot.jpg",
    "images/nguyenvancu.jpg",
    "images/nguyenvanthuong.jpg",
    "images/phamxuanan.jpg",
    "images/phandinhgiot.jpg",
    "images/tadinhbe.jpg",
    "images/thanhcoquangtri.jpg",
    "images/tovinhdien.jpg",
    "images/trancan.jpg",
    "images/tranquangman.jpg",
    "images/uthue.jpg",
    "images/vonguyengiap.jpg",
    "images/vothisau.jpg",
    "images/vuaadinh.jpg"
];*/
var images = [
    "https://s1.uphinh.org/2021/04/29/10cogai.jpg",
    "https://s1.uphinh.org/2021/04/29/bennharong.jpg",
    "https://s1.uphinh.org/2021/04/29/bevandan.jpg",
    "https://s1.uphinh.org/2021/04/29/buidinhcu.jpg",
    "https://s1.uphinh.org/2021/04/29/buidinhduc.jpg",
    "https://s1.uphinh.org/2021/04/29/chientranhbiengioi.jpg",
    "https://s1.uphinh.org/2021/04/29/cuchinhlan.jpg",
    "https://s1.uphinh.org/2021/04/29/dangdinhho.jpg",
    "https://s1.uphinh.org/2021/04/29/dbptrenkhong.jpg",
    "https://s1.uphinh.org/2021/04/29/dinhthilekim.jpg",
    "https://s1.uphinh.org/2021/04/29/lathitam.jpg",
    "https://s1.uphinh.org/2021/04/29/lavancau.jpg",
    "https://s1.uphinh.org/2021/04/29/lethinghe.jpg",
    "https://s1.uphinh.org/2021/04/29/lytutrong.jpg",
    "https://s1.uphinh.org/2021/04/29/menguyenthithu.jpg",
    "https://s1.uphinh.org/2021/04/29/ngothituyen.jpg",
    "https://s1.uphinh.org/2021/04/29/nguyenthisuot.jpg",
    "https://s1.uphinh.org/2021/04/29/nguyenvancu.jpg",
    "https://s1.uphinh.org/2021/04/29/nguyenvanthuong.jpg",
    "https://s1.uphinh.org/2021/04/29/phamxuanan.jpg",
    "https://s1.uphinh.org/2021/04/29/phandinhgiot.jpg",
    "https://s1.uphinh.org/2021/04/29/tadinhbe.jpg",
    "https://s1.uphinh.org/2021/04/29/thanhcoquangtri.jpg",
    "https://s1.uphinh.org/2021/04/29/tovinhdien.jpg",
    "https://s1.uphinh.org/2021/04/29/trancan.jpg",
    "https://s1.uphinh.org/2021/04/29/tranquangman.jpg",
    "https://s1.uphinh.org/2021/04/29/uthue.jpg",
    "https://s1.uphinh.org/2021/04/29/vonguyengiap.jpg",
    "https://s1.uphinh.org/2021/04/29/vothisau.jpg",
    "https://s1.uphinh.org/2021/04/29/vuaadinh.jpg"
]
var result = [
    "10 c?? g??i ng?? ba ?????ng L???c",
    "B???n Nh?? R???ng",
    "B??? V??n ????n (1931 - 1953)",
    "B??i ????nh C?? (1927 - ?)",
    "B??i ?????c H??ng (1939 - 1968)",
    "Chi???n tranh bi??n gi???i ph??a B???c 1979",
    "C?? Ch??nh Lan (1930 - 1952)",
    "?????ng ????nh H??? (1925 - ?)",
    "H?? N???i - ??i???n Bi??n Ph??? tr??n kh??ng 1972",
    "??inh Th??? L?? Kim, SN 1951",
    "La Th??? T??m (10/1949)",
    "La V??n C???u (1932)",
    "M??? L?? Th??? Ngh?? (N??m Ngh??)",
    "L?? T??? Tr???ng (1914 - 1931)",
    "M??? Nguy???n Th??? Th??? (1904 - 2010)",
    "Ng?? Th??? Tuy???n (1946)",
    "M??? Nguy???n Th??? Su???t (1908 - 1968)",
    "Nguy???n V??n C??? (1912 - 1941)",
    "Nguy???n V??n Th????ng (1938 - 2018)",
    "Ph???m Xu??n ???n (1927 - 2006) t??n th???t Ph???m V??n Th??nh",
    "Phan ????nh Gi??t (1922 - 1954)",
    "T??? ????nh ????? (c??n c?? t??n l?? L??m Giang) (1917 - 1998)",
    "Cu???c chi???n th??nh c??? Qu???ng Tr??? 1972",
    "T?? V??nh Di???n (1924-1953)",
    "Tr???n Can (1931- 1954)",
    "M??? Tr???n Th??? Quang M???n (1926 - 2021)",
    "L?? Th??? Hu??? (??t Hu???)",
    "V?? Nguy??n Gi??p (1911 - 2013)",
    "V?? Th??? S??u (1933???1952)",
    "V??? A D??nh (1934-1949)"
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createListItemClass(text, tag, id) {
    var ilm = document.createElement(tag);
    ilm.textContent = text;
    ilm.id = id;
    return ilm;
}

function getOnclick(id, i) {
    animation(id);
    document.getElementById(id).onclick = function() {
        document.getElementById("time").style.height = "100%";
        document.getElementById("menu").style.opacity = "0.1";
        countdown(tg);
        document.getElementById(id).style.display = "none";
        document.getElementById("img").style.backgroundImage = "url(" + images[i] + ")";
        document.getElementById("img").style.display = "block";
        document.getElementById("img").onclick = function() {
            document.getElementById("dapan").style.display = "block";
            document.getElementById("dapan").innerText = result[i].toString();
            sleep(3000).then(() => {
                document.getElementById("img").style.display = "none";
                document.getElementById("dapan").style.display = "none";
                document.getElementById("menu").style.opacity = "1";
            });
            if (menu.offsetHeight == 0) {
                document.getElementById("playagain").style.display = "block";
            }
        }
    }
}



for (var i = 0; i < 30; i++) {
    menu.appendChild(createListItemClass((i + 1).toString(), "button", "btn" + i.toString()));
}

for (var i = 0; i < 30; i++) {
    getOnclick("btn" + i.toString(), i);
}
document.getElementById("playagain").onclick = function() {
    location.reload();
}
document.getElementById("body").onclick = function() {
    document.getElementById("nhacnen").play();
}

function countdown(x) {
    var temp = x;
    var time = setInterval(() => {
        document.getElementById("time").style.transition = "5s";
        document.getElementById("time").style.height = (100 / temp * x).toString() + "%";
        x--;
    }, 1000);
    setTimeout(function() {
        clearInterval(time);
    }, (temp + 2) * 1000);
}

/*
function animation(id) {

    document.getElementById(id).animate([
        { transform: 'scale(1)', background: 'yellow', opacity: 1, offset: 0 },
        { transform: 'scale(.5) rotate(270deg)', background: 'blue', opacity: .5, offset: .2 },
        { transform: 'scale(1) rotate(0deg)', background: 'black', opacity: 1, offset: 1 },
    ], {
        duration: 500, //milliseconds
        easing: 'ease-in-out', //'linear', a bezier curve, etc.
        delay: 10, //milliseconds
        iterations: 5, //or a number Infinity
        direction: 'alternate', //'normal', 'reverse', etc.
        //fill: 'auto' //'backwards', 'both', 'none', 'auto' , 'forwards'
    });

}*/
//background-image: linear-gradient( to right, #c0c4fc, #a6fdbc);
function animation(id) {

    document.getElementById(id).animate([
        { transform: 'scale(1)', backgroundImage: 'linear-gradient( to right, #c0c4fc, #a6fdbc)', opacity: 1, offset: 0 },
        { transform: 'scale(.5) rotate(270deg)', backgroundImage: 'linear-gradient( to right, #78f374, #8eb1ff)', opacity: .5, offset: .2 },
        { transform: 'scale(1) rotate(0deg)', backgroundImage: 'linear-gradient( to right, #85baf7, #ff8ea1)', opacity: 1, offset: 1 },
    ], {
        duration: 500, //milliseconds
        easing: 'ease-in-out', //'linear', a bezier curve, etc.
        delay: 10, //milliseconds
        iterations: 5, //or a number Infinity
        direction: 'alternate', //'normal', 'reverse', etc.
        //fill: 'auto' //'backwards', 'both', 'none', 'auto' , 'forwards'
    });

}