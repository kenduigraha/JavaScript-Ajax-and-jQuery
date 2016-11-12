$(document).ready(function(){
  // alert(`aaadasasdfadsfsdfasfdafasfaa`)
  $('.circle').css("border", "1px solid").css("height", "100px")
  $('#btn_click').on("click", function(e){
    e.preventDefault()
    $.ajax({
      url: 'http://localhost:3000/api/colors',
      method: 'GET',
      contentType: 'application/x-www-form-urlencoded',
      success : function(data){
        console.log(data);
        var rand = Math.floor(Math.random()*9)+1

        $(`#${rand}`).css('background-color', `#${data}`)
      }
    })
  })
})
