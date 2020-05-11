$(document).ready(function() {
  let groceriesItems = ['bread', 'eggs', 'milk'];

  groceriesItems.forEach(function(groceryItem) {
  $("ul").append("<li>" + groceryItem + "</li>");
  });

  // let listItems = $("." + element.className);

});





// var li = document.getElementById("navp").getElementsByTagName("li");
// for (var i = 0, len = li.length; i < len; i++) {
//     li[i].innerHTML = myList[i][1];
// }