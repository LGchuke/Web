var timelineBlocks = document.querySelectorAll('.cd-timeline-block');
var offset = 0.8;

console.log(timelineBlocks);

hideBlocks(timelineBlocks, offset);

window.onscroll = function() {
  (!window.requestAnimationFrame)
  ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
  : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
};

function showBlocks(blocks, offset) {
  for (var i = 0; i < timelineBlocks.length; i++) {
    // console.log(timelineBlocks[i].offsetTop);
    // console.log(timelineBlocks[i].offsetLeft);
    // console.log(window.innerHeight * offset);
    console.log(timelineBlocks[i].offsetTop - window.scrollY + window.innerHeight * offset);

    if (timelineBlocks[i].offsetTop <= (window.scrollY + window.innerHeight * offset)) {
      timelineBlocks[i].querySelector(".cd-timeline-img").className = removeClassString(timelineBlocks[i].querySelector(".cd-timeline-img").className, "is-hidden");
      timelineBlocks[i].querySelector(".cd-timeline-img").className = addClassString(timelineBlocks[i].querySelector(".cd-timeline-img").className, "bounce-in");
      timelineBlocks[i].querySelector(".cd-timeline-content").className = removeClassString(timelineBlocks[i].querySelector(".cd-timeline-content").className, "is-hidden");
      timelineBlocks[i].querySelector(".cd-timeline-content").className = addClassString(timelineBlocks[i].querySelector(".cd-timeline-content").className, "bounce-in");
    }

    // console.log(timelineBlocks[i].querySelector(".cd-timeline-img").className.split(/\s+/).length);
    // console.log(timelineBlocks[i].querySelector(".cd-timeline-img"));
    // console.log(timelineBlocks[i].querySelector(".cd-timeline-content"));
  }
}

function hideBlocks(blocks, offset) {
  for (var i = 0; i < timelineBlocks.length; i++) {
    if (timelineBlocks[i].offsetTop > (window.scrollY + window.innerHeight * offset)) {
      timelineBlocks[i].querySelector(".cd-timeline-img").className = addClassString(timelineBlocks[i].querySelector(".cd-timeline-img").className, "is-hidden");
      timelineBlocks[i].querySelector(".cd-timeline-content").className = addClassString(timelineBlocks[i].querySelector(".cd-timeline-content").className, "is-hidden");
      // timelineBlocks[i].className = addClassString(timelineBlocks[i].className, "is-hidden");
    }
  }
}



function addClassString(ec, _class) {
  var classNames = ec.split(/\s+/);
  classNames[classNames.length] = _class;

  return (classNames.join(" "));
}

function removeClassString(ec, _class) {
  var classNames = ec.split(/\s+/);
  for (var i = 0; i < classNames.length; i++) {
    if (classNames[i] == _class) {
      classNames.splice(i, 1);
      break;
    }
  }
  return (classNames.join(" "));
}

