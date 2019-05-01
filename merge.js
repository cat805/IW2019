const droppable = new Droppable.default(document.querySelectorAll('.container'), {
  draggable: '.item',
  dropzone: '.dropzone'

});

let droppableOrigin;

// --- Draggable events --- //
droppable.on('drag:start', (evt) => {
  droppableOrigin = evt.originalSource.parentNode.dataset.dropzone;
});

droppable.on('droppable:dropped', (evt) => {
  if (droppableOrigin !== evt.dropzone.dataset.dropzone) {
    evt.cancel();
  }

  else{
    changeColor();
  }
});

function changeColor(){
  document.getElementById("cat").style.backgroundColor = "lightgreen";
}


function changeToCat() {
  const text = document.getElementById("catherine").innerHTML;
  if (text === "4") {
    document.getElementById("catherine").innerHTML = "Catherine was here";
  } else {
    document.getElementById("catherine").innerHTML = "4";
  }
}

function showStep2() {
    document.getElementById("step2").style.visibility = "visible";
}

function showStep3(){
    document.getElementById("step3").style.visibility = "visible";
}

function showStep4(){
    document.getElementById("step4").style.visibility = "visible";
}
