function bandEvent() {
  seleteFun();
}

function seleteFun() {
  var dom = document.getElementsByClassName('options');
  for (var i = 0; i < dom.length; i ++) {
    dom[i].onclick = function () {
      var op = this.getElementsByClassName('option-content');
      console.log(op);
    }
  }
}

bandEvent();