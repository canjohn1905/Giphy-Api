var familyGuy = ["Peter", "Stewie", "Maggie", "Lois", "Chris"];

function renderButtons() {
        
    // Delete the content inside the buttons-view div prior to adding new movies
    $( "#buttons-view" ).empty();
    // (this is necessary otherwise you will have repeat buttons)

    // Loop through the array of charaters, then generate buttons for each person in the array
    var i;
    for (i = 0; i < familyGuy.length; i++) { 
      // $("<div>")
      // create <button> with jQuery
        var btn = $("<button>").text(familyGuy[i]);
         $("#buttons-view").append(btn);
    } 
  }

  $("#add-person").on("click", function(event) {
    // event.preventDefault() prevents submit button from trying to send a form.
    // Using a submit button instead of a regular button allows the user to hit
    // "Enter" instead of clicking the button if desired
    event.preventDefault();

    // Write code to grab the text the user types into the input field
    var personInput = $("#family-input").val();
    console.log(personInput);
    // Write code to add the new person into the movies array
    familyGuy.push(personInput);

    // The renderButtons function is called, rendering the list of movie buttons
    renderButtons();
  });
  renderButtons();