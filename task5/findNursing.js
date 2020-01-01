function bandEvent() {
  seleteFun();
}

function seleteFun() {
  var dom = document.getElementsByClassName('options');
  for (var i = 0; i < dom.length; i ++) {
    dom[i].onclick = function () {
      var op = this.getElementsByClassName('option-content')[0];
      if ( op.className.indexOf('show')  >= 0 ) {
        op.className = "option-content"; 
      }else {
        op.className = "option-content show"; 
      }
      
    }
  }

}

bandEvent();