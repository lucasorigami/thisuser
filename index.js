// Get all elements with the 'tags' class
var tagElements = document.querySelectorAll('.article');
var titleEl = document.getElementById("title")
var graphFunc = document.getElementById('network').contentWindow 


// Loop through the elements and add the mouseover event listener
for (var i = 0; i < tagElements.length; i++) {
  tagElements[i].addEventListener('mouseover', function() {
    var id = this.id;
    console.log("You're hovering over the " + id + " tag.");

    let idnum = id.slice(1);
    graphFunc.nodeActive(idnum);
  });
}



titleEl.addEventListener("mouseover", function() {
    graphFunc.nodeNormal() 
})


const posiionedEl = document.querySelectorAll(".left, .middle, .right");

var j = 0;
for (i of posiionedEl) {
  j++;
  i.style.grid-row("one");

}


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


