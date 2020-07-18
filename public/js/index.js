var loginPage = function(){
    var s = Math.floor((((Math.random())*10)+5)%4);
    var st = 'url("../img/' + s.toString() + '.jpg")';
    console.log(st)
    $('.login-page').css('background-image',st);
}

    

var goToNextInput =  function(e) {
      var key = e.which,
        t = $(e.target),
        sib = t.next('input');

      if(key===8){
        t.prev('input').select().focus();
        return true;
      }
      if (key != 9 && (key < 48 || key > 57)) {
        e.preventDefault();
        return false;
      }
  
      if (key === 9) {
        return true;
      }
  
      if (!sib || !sib.length) {
        sib = body.find('input').eq(0);
      }
      sib.select().focus();
    }
  
var onkeydown =  function onKeyDown(e) {
      var key = e.which;
      if(key === 8){
        return true;
      }
      if (key === 9 || (key >= 48 && key <= 57)) {
        return true;
      }
  
      e.preventDefault();
      return false;
    }
    
var onFocus = function onFocus(e) {
      $(e.target).select();
    }

var forOtpForm = function(){
    var elem = $('#otp-enter-form')
        elem.on('keyup', 'input', goToNextInput);   
        elem.on('keydown', 'input', onKeyDown);
        elem.on('click', 'input', onFocus);
}

var loginGo = function(){
  console.log('loaded')
  $('#login-go').click(
    ()=>{
      console.log('clicked')
      $('.login-page .login-form:first-child').addClass('slideOutLeft')
    }
  )
  $('#login-back').click(
    ()=>{
      console.log('clicked')
      $('.login-page .login-form:first-child').removeClass('slideOutLeft')
      $('.login-page .login-form:first-child').addClass('slideInLeft')
    }
  )
}