// Get all elements with the 'tags' class
var tagElements = document.querySelectorAll('.article');
var titleEl = document.getElementById("title");
var graphFunc = document.getElementById('network').contentWindow;
var graphWindows = document.querySelectorAll(".title, .gap:not(.main)");
var allExceptGraph = document.querySelectorAll("body > div:not(.first):not(.main, #network, .graph)");
var interactiveMode = document.querySelectorAll(".interactivemode");
var exitInteractiveMode = document.getElementById("exitinteractivemode");
var activeNode;
var currentScrollPosition;


var waypoint = new Waypoint({
  element: document.getElementById('n52271'),
  handler: function (direction) {
    console.log('Direction: ' + direction)
    if (direction == "down") {
      activeNode = 132;
      graphFunc.nodeActive(activeNode);
    }
    else if (direction == "up") {
      activeNode =
      graphFunc.nodeNormal()
      
    }
  }
})


for (var graphWindow of graphWindows) {
  graphWindow.addEventListener("click", function () {
    console.log("clicked!")
    waypoint.disable();
    currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
    for (let element of interactiveMode) {
      element.classList.remove("hidden");
    }
    for (let element of allExceptGraph) {
      element.classList.add("hidden")
    }
  })
}


exitInteractiveMode.addEventListener("click", function () {
  for (let element of allExceptGraph) {
    element.classList.remove("hidden");
  }
  for (let element of interactiveMode) {
    element.classList.add("hidden")
  }
  window.scrollTo(0, currentScrollPosition);
  if (activeNode) {
    graphFunc.nodeActive(activeNode);
  }
  else {
    graphFunc.nodeNormal()
  }
  graphFunc.sigInst.position(0, 0, 1).draw();
  waypoint.enable();
})




// // Loop through the elements and add the mouseover event listener
// for (var i = 0; i < tagElements.length; i++) {
//   tagElements[i].addEventListener('mouseover', function () {
//     var id = this.id;
//     console.log("You're hovering over the " + id + " tag.");

//     activeNode = id.slice(1);
//     graphFunc.nodeActive(activeNode);
//   });
// }



titleEl.addEventListener("click", function () {
  graphFunc.nodeNormal()
})



window.addEventListener('scroll', function() {
  if (window.scrollY >= 100) {
    // Trigger your JavaScript code here
    console.log('Scroll position is at least 20 pixels from the top');
    titleEl.innerHTML = "<h1>This User</h1>"
    // Add any additional functionality you need
  }
  else if (window.scrollY < 100) {
    titleEl.innerHTML = "<h1>This is"
  }

});










// // Get all the article divs
// const articleDivs = document.querySelectorAll('.article');

// // Loop through the article divs
// for (let i = 0; i < articleDivs.length; i++) {
//   // Get the current article div
//   const currentArticle = articleDivs[i];

//   // Get the next article div (if it exists)
//   const nextArticle = articleDivs[i + 1];

//   // Get the background colors of the current and next article divs
//   const currentColor = window.getComputedStyle(currentArticle).backgroundColor;
//   const nextColor = nextArticle ? window.getComputedStyle(nextArticle).backgroundColor : null;

//   // Get the gradient div that comes after the current article div
//   const gradientDiv = currentArticle.nextElementSibling;

//   // Set the gradient on the gradient div
//   if (gradientDiv && gradientDiv.classList.contains('gradient')) {
//     gradientDiv.style.backgroundImage = `linear-gradient(to bottom, ${currentColor}, ${nextColor || currentColor})`;
//   }
// }


