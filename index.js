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


for (var graphWindow of graphWindows) {
  graphWindow.addEventListener("click", function () {
    console.log("clicked!")
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
})




// Loop through the elements and add the mouseover event listener
for (var i = 0; i < tagElements.length; i++) {
  tagElements[i].addEventListener('mouseover', function () {
    var id = this.id;
    console.log("You're hovering over the " + id + " tag.");

    activeNode = id.slice(1);
    graphFunc.nodeActive(activeNode);
  });
}



titleEl.addEventListener("click", function () {
  graphFunc.nodeNormal()
})






var waypoint = new Waypoint({
  element: document.getElementById('n52271'),
  handler: function () {
    activeNode = 132;
    graphFunc.nodeActive(activeNode);
    console.log('Basic waypoint triggered')
  }
})






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


