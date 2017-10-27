var ball = document.getElementById('ball');
var objBall = {};
var shadow = document.getElementsByTagName('shadow')[0];


var shadowWithBall = function(top) {
    // 0 ~ 500
    var top = top || parseInt(ball.style.top),
    scale = 1 + (500 - top) / 300;
    opacity = 1 - (500 - top) / 300;
    if (opacity < 0) opacity = 0;
    shadow.style.opacity = opacity;
    // .css("WebkitTransform", "scale("+ [scale, scale].join(",") +")")
    shadow.style.transform = 'scale('+ [scale, scale].join(',') + ')';
}, funFall = function() {
    var start = 0, during = 100;
    var _run = function() {
         start++;
         var top = Tween.Bounce.easeOut(start, objBall.top, 500 - objBall.top, during);
         ball.style.top = top + 'px';
         shadowWithBall(top);    // 投影跟随小球的动
         if (start < during) requestAnimationFrame(_run);
    };
    _run();
};

ball.addEventListener('mousedown', function(event) {
    objBall.pageY = event.pageY;
    objBall.flagFollow = true;
});

document.addEventListener('mousemove', function(event) {
    if (objBall.flagFollow) {
        var pageY = event.pageY;
        objBall.top = 500 - (objBall.pageY - pageY);
        if (objBall.top < 0) {
            objBall.top = 0;
        } else if (objBall.top > 500) {
            objBall.top = 500;
        }
        //cosnole.log(objBall.top);
        ball.style.top = objBall.top + 'px';
        shadowWithBall(objBall.top);
    }
});

document.addEventListener('mouseup', function(event) {
    if (objBall.flagFollow) funFall();
    objBall.flagFollow = false;
});
