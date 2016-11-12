$(document).ready(function(){
  // alert(`aaadasasdfadsfsdfasfdafasfaa`)
  $('.circle').css("border", "1px solid").css("height", "100px")
  $('#btn_click').on("click", function(e){
    e.preventDefault()
    var rand = Math.floor(Math.random()*9)+1
    var colors = ['6984c9', '0EFF6A', 'ea7e3f', '1e90ff', 'ff6a6a', 'ffff66', 'ff7256', '00fa9a', '3a3b33']

    $(`#${rand}`).css('background-color', `#${colors[rand]}`)
  })
})
