var result1 = "Việt Nam";
var result2 = "Độc lập";
var result3 = "Tự Do";
var result4 = "Hạnh phúc";
var result5 = "Bình đẳng";
var result6 = "Phát triển";
var result7 = "vững mạnh";
var result8 = "bền bỉ";
var result9 = "vô địch";
var result10 = "yêu nướcquáhiiha";
var start1 = 2;
var start2 = 3;
var start3 = 4;
var start4 = 1;
var start5 = 2;
var start6 = 1;
var start7 = 2;
var start8 = 3;
var start9 = 2;
var start10 = 1;

var check = 0;

var arr = new Array();
arr[0] = new Array("h1", start1, result1.length + start1 - 1, result1);
arr[1] = new Array("h2", start2, result2.length + start2 - 1, result2);
arr[2] = new Array("h3", start3, result3.length + start3 - 1, result3);
arr[3] = new Array("h4", start4, result4.length + start4 - 1, result4);
arr[4] = new Array("h5", start5, result5.length + start5 - 1, result5);
arr[5] = new Array("h6", start6, result6.length + start6 - 1, result6);
arr[6] = new Array("h7", start7, result7.length + start7 - 1, result7);
arr[7] = new Array("h8", start8, result8.length + start8 - 1, result8);
arr[8] = new Array("h9", start9, result9.length + start9 - 1, result9);
arr[9] = new Array("h10", start10, result10.length + start10 - 1, result10);

function showText(id, index, offset, str) {
    var j = 0;
    for (var i = index; i <= offset; i++) {
        try {
            if (str[j] != null)
                document.getElementById(id + (i).toString()).innerText = str[j++];
            else
                document.getElementById(id + (i).toString()).innerText = "";
        } catch (error) {
            //khong co gi hihi
        }
    }
}

function notShowText(id, index, offset) {
    for (var i = index; i <= offset; i++) {
        try {
            document.getElementById(id + (i).toString()).innerText = "";
        } catch (error) {
            //khong co gi hihi
        }
    }
}


function delIlm(id, index, offset) {
    for (var i = 1; i < index; i++) {
        try {
            document.getElementById(id + (i).toString()).style.backgroundColor = "white";
            document.getElementById(id + (i).toString()).innerText = "";
        } catch (error) {
            //
        }
    }
    for (var i = offset + 1; i <= 16; i++) {
        try {
            document.getElementById(id + (i).toString()).style.backgroundColor = "white";
            document.getElementById(id + (i).toString()).innerText = "";
        } catch (error) {
            //
        }
    }

}

function showResult(id) {
    if (check == 0) {
        showText(arr[id][0], arr[id][1], arr[id][2], arr[id][3]);
        delIlm(arr[id][0], arr[id][1], arr[id][2]);
        check = 1;
    } else {
        notShowText(arr[id][0], arr[id][1], arr[id][2]);
        check = 0;
    }
}

function question() {
    alert("Cái đầu cắt moi trong tác phẩm anh pình moi moi là gì ?/");
}

// for (var i = 0; i < arr.length; i++) {
//     showText(arr[i][0], arr[i][1], arr[i][2], arr[i][3]);
//     delIlm(arr[i][0], arr[i][1], arr[i][2]);
// }
for (var i = 0; i < arr.length; i++) {
    notShowText(arr[i][0], arr[i][1], arr[i][2]);
    delIlm(arr[i][0], arr[i][1], arr[i][2]);
}
for (var i = 1; i <= 10; i++) {
    document.getElementById("h" + i.toString() + "5").style.backgroundColor = "blue";
}
document.getElementsByClassName("cc")[0].style.color = "blue";