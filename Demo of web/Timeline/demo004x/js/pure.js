var timelineBlocks = document.querySelectorAll('.cd-timeline-block');
var offset = 0.8;

console.log(timelineBlocks);

hideBlocks(timelineBlocks, offset);

window.onscroll = function() {
  (!window.requestAnimationFrame)
  ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 500)
  : window.requestAnimationFrame(function(){ setTimeout(showBlocks(timelineBlocks, offset), 500); });
};

function showBlocks(blocks, offset) {
  for (var i = 0; i < timelineBlocks.length; i++) {
    // console.log(timelineBlocks[i].offsetTop);
    console.log("i: " + i + " -- " + (timelineBlocks[i].offsetTop - (window.scrollY + window.innerHeight * offset)));
    if (timelineBlocks[i].offsetTop <= (window.scrollY + window.innerHeight * offset)) {
      // timelineBlocks[i].querySelector(".cd-timeline-img").className = removeClassString(timelineBlocks[i].querySelector(".cd-timeline-img").className, "is-hidden");
      // timelineBlocks[i].querySelector(".cd-timeline-img").className = addClassString(timelineBlocks[i].querySelector(".cd-timeline-img").className, "bounce-in");
      timelineBlocks[i].querySelector(".cd-timeline-img").classList.remove("is-hidden");
      timelineBlocks[i].querySelector(".cd-timeline-img").classList.add("bounce-in");
      timelineBlocks[i].querySelector(".cd-timeline-content").classList.remove("is-hidden");
      timelineBlocks[i].querySelector(".cd-timeline-content").classList.add("bounce-in");
    }
  }
}

function hideBlocks(blocks, offset) {
  for (var i = 0; i < timelineBlocks.length; i++) {
    if (timelineBlocks[i].offsetTop > (window.scrollY + window.innerHeight * offset)) {
      timelineBlocks[i].querySelector(".cd-timeline-img").classList.add("is-hidden");
      timelineBlocks[i].querySelector(".cd-timeline-content").classList.add("is-hidden");
    }
  }
}



// such stupid methods: teaching material by negative example ｜ material for teaching by negative example
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

