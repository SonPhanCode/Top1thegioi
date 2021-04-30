var result = new Array();
result[0] = new Array();
let inputfile1 = document.getElementById("inputfile1");
inputfile1.addEventListener('change', () => {
    let files = inputfile1.files;
    if (files.length == 0) return;
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        for (var i = 0; i < lines.length; i++) {
            var temp = lines[i].replace(/\s/g, '');
            result[0].push(temp);
        }
        result[0].push("");
    };
    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsText(file);
});
var start = new Array();
start[0] = new Array();
let inputfile2 = document.getElementById("inputfile2");
inputfile2.addEventListener('change', () => {
    let files = inputfile2.files;
    if (files.length == 0) return;
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        for (var i = 0; i < lines.length; i++) {
            var temp = lines[i].replace(/\s/g, '');
            start[0].push(parseInt(temp));
        }
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
});
var question = new Array();
question[0] = new Array();
let inputfile3 = document.getElementById("inputfile3");
inputfile3.addEventListener('change', () => {
    let files = inputfile3.files;
    if (files.length == 0) return;
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        for (var i = 0; i < lines.length; i++) {
            var temp = lines[i];
            question[0].push(temp);
        }
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
});
/* 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
*/
var check = 0;
var valueKey = 5;
var time = 15;
var checkontime = 1;
// === clean array result

// ==== function
function createListItem(tag, clazz) {
    var ilm = document.createElement(tag, clazz);
    ilm.className = clazz;
    return ilm;
}

function createListItemClass(text, tag, clazz, id) {
    var ilm = document.createElement(tag);
    ilm.textContent = text;
    ilm.className = clazz;
    ilm.id = id;
    return ilm;
}

function maxLength() {
    var max = result[0][0].length;
    for (var i = 0; i < result[0].length; i++) {
        if (max < result[0][i].length) {
            max = result[0][i].length;
        }
    }
    return max + 3;
}

function showText() {
    var x = 0;
    for (var i = 0; i < result[0].length; i++) {
        for (var j = 0; j < maxLength(); j++) {
            if (j >= start[0][i]) {
                document.getElementsByClassName("tr")[i].appendChild(createListItemClass(result[0][i][x++], "td", "td" + i.toString(), "td" + i.toString()));
            } else {
                document.getElementsByClassName("tr")[i].appendChild(createListItemClass("", "td", "td" + i.toString(), "td" + i.toString()));
            }
        }
        x = 0;
    }
}

function delIlm(clazz, index, offset) {
    for (var i = 0; i < index; i++) {
        try {
            document.getElementsByClassName(clazz)[i].style.backgroundColor = "none";
            document.getElementsByClassName(clazz)[i].innerText = "";
        } catch (error) {
            //
        }
    }
    for (var i = offset + 1; i <= maxLength(); i++) {
        try {
            document.getElementsByClassName(clazz)[i].style.backgroundColor = "none";
            document.getElementsByClassName(clazz)[i].innerText = "";
        } catch (error) {
            //
        }
    }
}

function create(clazz, index, offset) {
    for (var i = index; i <= offset; i++) {
        try {
            document.getElementsByClassName(clazz)[i].style.backgroundColor = "red";
        } catch (error) {
            //
        }
    }
}

function notShowText(clazz, index, offset) {
    for (var i = index; i <= offset; i++) {
        try {
            document.getElementsByClassName(clazz)[i].innerText = "";
        } catch (error) {
            //khong co gi hihi
        }
    }
}

function showResult(clazz, index, offset, kq) {
    var x = 0;
    for (var i = index; i <= offset; i++) {
        try {
            document.getElementsByClassName(clazz)[i].innerText = result[0][kq][x++];
        } catch (error) {
            //khong co gi hihi
        }
    }
}

function setClick(x) {
    document.getElementsByClassName("tr")[x].onclick = function() {
        var temp;
        if (typeof(start[0][x]) == "undefined") temp = 0;
        else temp = start[0][x];
        if (check == 0) {
            showResult("td" + x.toString(), temp, result[0][x].length + temp - 1, x);
            check = 1;
        } else {
            notShowText("td" + x.toString(), temp, result[0][x].length + temp - 1);
            check = 0;
        }
    };
}

function setKey(index) {
    for (var i = 0; i < result[0].length; i++) {
        document.getElementsByClassName("td" + i.toString())[index - 1].style.backgroundColor = "yellow";
        document.getElementsByClassName("td" + i.toString())[index - 1].style.color = "black";
    }
}

function createButton() {
    var x = 0;
    for (var i = 0; i < result[0].length; i++) {
        document.getElementById("left").appendChild(createListItemClass((i + 1).toString(), "button", "btn" + i.toString(), "btn" + i.toString()));
    }
}


function questions(x) {
    if (checkontime == 1) {
        document.getElementById("cauhoi").style.display = "block";
        document.getElementById("cauhoi").innerText = x;
        countdown(time);
        document.getElementById("nhac").play();
    } else {
        alert("Sống chậm lại đi :)");
    }
}

function showQuestion(x, len) {
    document.getElementById("btn" + x.toString()).onclick = function() {
        questions("Câu " + (x + 1).toString() + ": " + question[0][x] + " (" + len.toString() + " chữ cái) ?");
    };
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function countdown(x) {
    var temp = x;
    checkontime = 0;
    document.getElementById("hetgio").style.display = "none";
    var time = setInterval(() => {
        document.getElementById("time2").style.transition = "1s";
        document.getElementById("time2").style.display = "block";
        document.getElementById("time2").style.width = (100 / temp * x).toString() + "%";
        document.getElementById("time").style.display = "block";
        document.getElementById("time").innerText = (x--).toString();
    }, 1000);
    setTimeout(function() {
        clearInterval(time);
        document.getElementById("hetgio").style.display = "block";
        document.getElementById("time").style.display = "none";
        document.getElementById("time2").style.display = "none";
        document.getElementById("cauhoi").style.display = "none";
        checkontime = 1;
        sleep(1500).then(() => {
            document.getElementById("hetgio").style.display = "none";
        });
    }, (x + 2) * 1000);

}

function showKeyHidden() {
    var x = result[0].length - 1;
    var ilm = document.getElementsByClassName("td" + x.toString())[valueKey - 1];
    var btn = document.getElementById("btn" + x.toString());
    btn.style.backgroundColor = "none";
    btn.style.color = "black";
    btn.innerText = "ALL";
    btn.style.fontFamily = "'Courier New', Courier, monospace";
    btn.style.fontWeight = "bold";
    var checkbtn = 1;
    btn.onclick = function() {
        //location.reload();
        if (checkbtn == 1) {

            for (var i = 0; i < result[0].length; i++) {
                var temp;
                if (typeof(start[0][i]) == "undefined") temp = 0;
                else temp = start[0][i];
                showResult("td" + i.toString(), temp, result[0][i].length + temp - 1, i);
            }
            btn.style.backgroundColor = "black";
            btn.style.color = "white";
            checkbtn = 0;

        } else {
            for (var i = 0; i < result[0].length; i++) {
                var temp;
                if (typeof(start[0][i]) == "undefined") temp = 0;
                else temp = start[0][i];
                notShowText("td" + i.toString(), temp, result[0][i].length + temp - 1);
            }
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
            checkbtn = 1;
        }


    };
    ilm.style.backgroundColor = "#EFEFEF";
    ilm.innerText = "KQ";
    ilm.style.color = "black";
    ilm.onclick = function() {
        if (check == 0) {
            for (var i = 0; i < result[0].length - 1; i++) {
                var temp;
                if (typeof(start[0][i]) == "undefined") temp = 0;
                else temp = start[0][i];
                document.getElementsByClassName("td" + i.toString())[valueKey - 1].innerText = result[0][i][valueKey - temp - 1];
            }
        } else {
            for (var i = 0; i < result[0].length - 1; i++) {
                document.getElementsByClassName("td" + i.toString())[valueKey - 1].innerText = "";
            }
            check = 1;
        }
    }
}
// ========MAIN===========
function mains() {
    // create table
    for (var i = 0; i < result[0].length; i++) {
        document.getElementById("table").appendChild(createListItem("tr", "tr"));
    }
    // showtable
    showText();
    // hidden table text
    for (var i = 0; i < result[0].length; i++) {
        var temp;
        if (typeof(start[0][i]) == "undefined") temp = 0;
        else temp = start[0][i];
        create("td" + i.toString(), temp, result[0][i].length + temp - 1);
        delIlm("td" + i.toString(), temp, result[0][i].length + temp - 1);
        notShowText("td" + i.toString(), temp, result[0][i].length + temp - 1);
    }
    // event click show text table
    for (var i = 0; i < result[0].length; i++) {
        setClick(i);
    }
    // set hidden key
    setKey(valueKey);
    // create button question
    createButton();
    // show question
    for (var i = 0; i < result[0].length; i++) {
        var x = result[0][i].length;
        showQuestion(i, x);
    }
    //button show all result
    showKeyHidden();
    document.getElementById("main").style.height = ((result[0].length - 1) * 100).toString() + "px";
    document.getElementById("game").style.borderRight = "2px solid rgb(0, 0, 0)";
}

var ok = document.getElementById("input2");
var form = document.getElementById("form");
var loadanh = document.getElementById("content");
var nhacnen = document.getElementById('nhacnen');

function mouseDownBody() {
    nhacnen.play();
}
document.getElementById("main").style.display = "none";
ok.onclick = function() {
    var password;
    password = document.getElementById("input1").value;
    var pass = "25a8407af12d92ed31eea1508a1b4f98";
    if (md5(password) == pass) {
        document.getElementById("main").style.display = "block";
        mains();
        form.style.display = "none";
        loadanh.style.display = "none";
        nhacnen.pause();
        document.getElementById("inputfile").style.display = "none";
        document.getElementById("next").style.display = "block";
        document.getElementById("bongbong").style.zIndex = "4";

    } else alert("PASSWORD sai");
}

// window.onload = function(e) {
//     for (;;) {
//         console.log("x");
//     }
// }
