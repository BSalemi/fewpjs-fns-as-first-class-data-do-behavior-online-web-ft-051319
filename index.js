/* Given Code, don't edit */
function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
function greet(time){
  if(time < "12:00"){
    return "Good Morning"
  }
}
