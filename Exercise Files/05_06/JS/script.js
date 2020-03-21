var Figure = document.querySelector(".featured-image");
var Image = Figure.querySelector("img");
var altText = Image.getAttribute("alt");

var figCaption = document.createElement("figCaption");
var captionText = document.createTextNode(altText);

figCaption.appendChild(captionText);

//console.log(figCaption);
Figure.appendChild(figCaption);

//console.log(Figure);

Image.removeAttribute("alt");

