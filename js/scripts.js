$(document).ready(function() {
   
  $("#groceries-required").submit(function(event) {
    event.preventDefault();
    let numbers = [1, 2, 3, 4, 5];
    let groceryItems = [];

      // consider rewriting code below so that when user submits form, we have a variable that increases by 1 for each item and adds to the numbers array, so that if we have 100 items, we don't need to manually write out 100 numbers in the numbers array

      // take in each item user enters and push into groceryItems array
    numbers.forEach(function(number) {
      groceryItems.push($("input#item" + number).val());
    });

      // sort grocery Items array in alphabetical order
    let itemsInOrder = groceryItems.sort();

      // make a new array with entries capitalized
    let upperCaseItems = itemsInOrder.map(function(itemInOrder) {
      return itemInOrder.toUpperCase();
    });

    // hide form, display items back to user in ul as list items
    upperCaseItems.forEach(function(upperCaseItem) {
      $("ul").append("<li>" + upperCaseItem + "</li>");
    });

    $(".form-div").hide();
    $(".final-list").show();

  });
});
