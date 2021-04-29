var index = 0;
// var img = ['images/toi.png',
//     'images/huy.png', 'images/truong.png',
//     'images/tung.png', 'images/thanh.png',
//     'images/hoang.png', 'images/sang.png'
// ];
var img = ['https://s1.uphinh.org/2021/04/27/toi.png',
    'https://s1.uphinh.org/2021/04/27/huy.png', 'https://s1.uphinh.org/2021/04/27/truong.png',
    'https://s1.uphinh.org/2021/04/27/tung.png', 'https://s1.uphinh.org/2021/04/27/thanh.png',
    'https://s1.uphinh.org/2021/04/27/hoang.png', 'https://s1.uphinh.org/2021/04/27/sang.png'
];
var listtext = ['Trùm Lươn', 'Trùm Tia Gái',
    'Trùm Cơm Tróoo', 'Trùm XiaoLon',
    'Trùm Dẹo', 'Trùm Đũy Đựk',
    'Trùm Delay'
];
var textshow = document.getElementById("textshow");
var dem = 0;

function next() {
    dem++;
    var i = document.getElementById("bg");
    //i.style.backgroundSize = "cover";
    // i.style.backgroundImage = "url('" + img[index] + "')";
    i.style.backgroundImage = "url(" + img[index] + ")";
    textshow.innerHTML = listtext[index];
    if (index < img.length - 1) {
        index++;
    } else {
        index = 0;
    }
}


function prev() {
    if (index === 0) {
        index = img.length - 1;
    } else {
        index--;
    }
    var i = document.getElementById("bg");
    //i.style.backgroundSize = "cover";
    i.style.backgroundImage = "url('" + img[index] + "')";
    textshow.innerHTML = listtext[index];
}
setInterval(() => {
    next();
}, 3000);