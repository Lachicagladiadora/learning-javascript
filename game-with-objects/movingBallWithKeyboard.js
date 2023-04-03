//moving ball with keyboard event
const circleElement = document.getElementById("circle")

window.addEventListener(
    "keydown",
    (event) => {
      // if (event.defaultPrevented) {
      //   return; // Do nothing if the event was already processed
      // }
      console.log({event})

      const circle = circleElement.getBoundingClientRect()
      if(event.code==='ArrowUp') circleElement.style.top=`${circle.top-10}px`
      if(event.code==='ArrowDown') circleElement.style.top=`${circle.top+10}px`
      if(event.code==='ArrowRight') circleElement.style.left=`${circle.left+10}px`
      if(event.code==='ArrowLeft') circleElement.style.left=`${circle.left-10}px`
  
      // switch (event.key) {
      //   case "Down": // IE/Edge specific value
      //   case "ArrowDown":
      //     console.log('dn')
      //       circleElement.style.top=`${circleElement.style.top+10}px`
      //       // circleElement.setAttribute("style", "background-color:cyan;");
      //     console.log('Do something for "down arrow" key press.')
      //     break;
      //   case "Up": // IE/Edge specific value
      //   case "ArrowUp":
      //       circleElement.setAttribute("style", "margin-top:0.5%;", );
      //       // circleElement.setAttribute("style", "background-color:yellow;");
      //     console.log('Do something for "up arrow" key press.')
      //     break;
      //   case "Left": // IE/Edge specific value
      //   case "ArrowLeft":
      //       circleElement.setAttribute("style", "margin-left:0.5%;","background-color:indigo;");
      //     console.log('Do something for "left arrow" key press.')
      //     break;
      //   case "Right": // IE/Edge specific value
      //   case "ArrowRight":
      //       circleElement.setAttribute("style", "margin-right:0.5%;","background-color:red;");
      //     console.log('Do something for "right arrow" key press.')
      //     break;
      //   case "Enter":
      //       circleElement.setAttribute("style", "background-color:green;");
      //     // Do something for "enter" or "return" key press.
      //     break;
      //   case "Esc": // IE/Edge specific value
      //   case "Escape":
      //       circleElement.setAttribute("style", "background-color:brown;");
      //     // Do something for "esc" key press.
      //     break;
      //   default:
      //     return; // Quit when this doesn't handle the key event.
      // }
  
      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    },
    true
  );
  