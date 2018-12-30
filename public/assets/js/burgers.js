// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newStatus = $(this).data("newstatus");
  
      var newStatusState = {
        devoured: newStatus
      };
      // alert("You clicked a button to change status. the id is: " + id + " and the new state will be: " + newStatusState.devoured);
      // console.log("You clicked a button to change status. the id is: " + id + " and the new state will be: " + newStatusState.devoured);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newStatusState
      }).then(
        function() {
          console.log("changed status to", newStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: 0
      };

      console.log("you clicked the button to create a new burger. Its properties will be: " + JSON.stringify(newBurger));
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  