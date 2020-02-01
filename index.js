/* Given Code, don't edit */
function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString){
  let timeSplit = timeString.split(":")
  let time = parseInt(timeSplit[0], 10)
  if(time < 12){
    return "Good Morning"
  }
}
