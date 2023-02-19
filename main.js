//const middleDiv = document.getElementById("middle-div");
const paragraphs = document.getElementsByTagName("p");
let currentParagraphIndex = 0;

setInterval(() => {
  // hide the current paragraph
  paragraphs[currentParagraphIndex].style.display = "none";

  // increment the current paragraph index and loop back to the first paragraph if necessary
  currentParagraphIndex = (currentParagraphIndex + 1) % paragraphs.length;

  // show the next paragraph
  paragraphs[currentParagraphIndex].style.display = "block";
}, 2000);

// initially hide all paragraphs except the first one
for (let i = 1; i < paragraphs.length; i++) {
  paragraphs[i].style.display = "none";
}
