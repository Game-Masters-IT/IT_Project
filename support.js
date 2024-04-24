function func1(x) {
    document.getElementById("poi");
   if (x) {
       poi.textContent = "Glad we could be helpful. Thanks for the feedback.";
   } else {
       poi.textContent = "Thanks for the feedback. We will improve this article.";
   }
   
}
function func2(y) {
   document.getElementById("lo");
   if (y) {
       lo.textContent = "Glad we could be helpful. Thanks for the feedback.";
   } else {
       lo.textContent = "Thanks for the feedback. We will improve this article.";
   }
   
}
function func3(z) {
   document.getElementById("de");
   if (z) {
       de.textContent = "Glad we could be helpful. Thanks for the feedback.";
   } else {
       de.textContent = "Thanks for the feedback. We will improve this article.";
   }
   
}
function func4(event) {
    var zl = document.getElementById("zl");
    zl.textContent = "We appreciate your feedback.";
}
document.getElementById("feedbackForm").addEventListener("submit", func4);
