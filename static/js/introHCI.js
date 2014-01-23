'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Nice, Javascript is connected");
		$('#testjs').text("You're Awesome");
		$(".jumbotron p").toggleClass("active");
	});
	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(changeWidth);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function changeWidth(e){
		var projectToChange= $("#project").val();
		var changedDescription = $('#description').val();
		var widthEntrered= $("#width").val();
		$(projectToChange).animate({
			width: widthEntrered
		});
		
   		$(projectToChange + " .project-description").text(changedDescription);	
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    //console.log("Change header to " + jumbotronHeader.length)
    jumbotronHeader.text(projectTitle);
    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       $(containingProject).find(".project-description").hide();
    }
}