/*var animation = 'easeOutCubic';
delay = 60;

$(document)
    .on('click', '.fa-bars', function() {
        var i = 0;
        $('nav').before($('#bongbong'));
        $('#bongbong').fadeIn();
        $('#mainnav').find('li').each(function() {
            var that = $(this);
            (function(i, that) {
                setTimeout(function() {
                    that
                        .animate({ 'left': '20px' }, {
                            duration: 350,
                            easing: animation
                        })
                        .fadeIn({ queue: false });
                }, )
            }(i, that))
        });
        $('.fa-bars').fadeOut(function() {
            $(this)
                .removeClass('fa-bars')
                .addClass('fa-times')
                .fadeIn();
        });
    })


.on('click', '#bongbong, .fa-times', function() {
    $('#bongbong').fadeOut();
    $('#mainnav').find('li')
        .animate({ 'left': '-500px' }, { duration: 250 })

    $('.hamb').fadeOut(function() {
        $(this)
            .find($('i'))
            .removeClass('fa-times')
            .addClass('fa-bars')
            .end()
            .fadeIn();
    });
})
*/


var animation = 'easeOutCubic';
delay = 60;
/*
$(document)
    .on('click', '.fa-bars', function() {
        var i = 0;
        $('nav').before($('#bongbong'));
        $('#bongbong').fadeIn();
    })


.on('click', '#bongbong, .fa-times', function() {
    $('#bongbong').fadeOut();
})*/
$('nav').before($('#bongbong'));
$('#bongbong').fadeIn();

var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('bongbong'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 300,
    time,
    count,
    size = 5,
    speed = 10,
    lights = new Array,
    colors = ['#ffffff'];

canvas.setAttribute('width', w);
canvas.setAttribute('height', h);

function init() {
    time = 0;
    count = 0;

    for (var i = 0; i < arc; i++) {
        lights[i] = {
            x: Math.ceil(Math.random() * w),
            y: Math.ceil(Math.random() * h),
            toX: Math.random() * 5 + 1,
            toY: Math.random() * 5 + 1,
            c: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * size
        }
    }
}

function bongbong() {
    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < arc; i++) {
        var li = lights[i];

        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.fill();

        li.x = li.x + li.toX * (time * 0.05);
        li.y = li.y + li.toY * (time * 0.05);

        if (li.x > w) { li.x = 0; }
        if (li.y > h) { li.y = 0; }
        if (li.x < 0) { li.x = w; }
        if (li.y < 0) { li.y = h; }
    }
    if (time < speed) {
        time++;
    }
    timerID = setTimeout(bongbong, 1000 / rate);
}
init();
bongbong();