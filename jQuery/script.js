"use strict";

// The below code is waiting for the document to fully load, then calling the function which turns the H1 to red.
/* This is generally for if you don't have the script tags at the bottom of the body.
$(document).ready(function() {
  $('h1').css('color', 'red');
})*/

// jQuery vs Vanilla JS:
/*for (let i = 0; i < document.querySelectorAll("button").length; i++) // Iterating through all of the buttons that have been "queried" via querySelectorAll 
{
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelectorAll(h1).style.color = "red";
  });
}

// Now, again in jQuery:
$('button').click(function() {
  $('h1').css('color', 'red');
})
*/


/* Minification Notes:
You can convert your own code using minifier.org. 
All it's doing is erasing the extra syntax and comments that separates it out, giving the compiler less unnecessary bits to read.
Libraries will often come with a minified version in its files for web use (ie: jquery.min.js)
*/

// Selecting Elements with jQuery, example: a h1 with a classname of title, nested in a div with an id of header:
$('#header h1.title');

// Selecting all of the buttons on screen (ie: document.querySelectorAll('button')):
$('button');

// Manipulating CSS styles with jQuery (using .css("property", "value")):
$("h1").css("color", "blue");

// If it's one value in the method, we are getting the property, if there is a property-value pair, we are setting it, ie:
console.log($('h1').css("font-size")); // Gets the current font size of the selected element.
$('h1').css("font-size", "5rem"); // Sets the font-size to 5rem

// Of course this begs the question of a separation of concerns in where styles should be kept in CSS and interactivity in JS. 
// So, we define a class in the CSS and then attach it to the JS:
$("h1").addClass("big-title");

// Or if we wanted to remove:
$('h1').removeClass('big-title');

// Or add/remove multiple classes, just add spaces like previously mentioned with #header h1.title:
$('h1').addClass('big-title margin-50');
$('h1').removeClass('margin-50');

// We can also check if an element has a class or not:
console.log($('h1').hasClass('margin-50'));

// Manipulating text with jQuery:
$('h1').text('Goodbye'); // Will change the h1 text from "Hello" to "Goodbye"

// The problem with doing this to something that has multiple queries (such as a querySelectorAll for buttons), is it will change them all.
// Solution? this, but it's going to have to be run like an event listener:
$('button').on('click', function(evt) {
  $(this).text("Clicked!"); // does not run a DOM query, whereas reassignment does.
  // This also works for implementing animations like : $(selector).animate({opacity: 0.5})
  $(this).animate({opacity: 0.5});
}); 

// Animations MUST be numeric values, so you can't set colours, only things like transition eases, opacities etc.


// Manipulating Attributes with jQuery ie: image source (src), in anchor tags (the href is the attr):
$('img').attr('src');  // Will get the value of the src attribute if there is one
// We can also set an attribute:
$('a').attr('href', 'https://urlgoeshere'); // Get the href attr, and set it to the url.

// Classes are also attributes, so:
$('h1').attr('class'); // Gets all class names attached to the h1 element

// Adding eventListeners with jQuery, we kinda did this above when we thought about using 'this':
$('h1').click(function() {
  $('h1').css("color", "purple");
})

// Another example of using it vanillajs:
/*for (let i = 0; i < 5; i++) {
  document.querySelectorAll('button')[i].addEventListener("click", function() {
    document.querySelector('h1').style.color = 'purple';
  })
}*/

//vs jQuery:
$('button').click(function() {
  $('h1').css('color', 'purple')
})

// It can also be done via keypresses:
$('input').keypress(function(event) {
  console.log(event.key);
})

// Challenge: change the header on keystroke
$(document).keypress(function(event) {
  $('h1').text(event.key);
})

// Adding and removing elements with jQuery, such as, adding a button to appear before the h1:
$('h1').before("<button>New</button>");
$('input').after("<h2>Stuff and things</h2>");

// Prepend and Append: It goes inside the tags it's being append/prepended to. ie, the H3 is going into the H2. Terrible DOM manips, but an example.
$('h2').prepend('<h3>This is terrible order control but here we are</h3>')
$('h1').append('<button>Append</button>');

/* To review:
Before example will produce the following:
<button>New</button> <h1>Hello</h1>

vs Prepend:
<h2> <h3>This is terrible order control but here we are</h3> "Stuff and things"</h2>

After and Append work in the same way.
*/

// Remove also exists, ie:
$('h2').remove(); // Will remove all h2 elements from the page.

// Animations: We've mentioned them previously when doing event listeners. We can chain them too:
$('button').on('click', function() {
  $('h1').slideUp(1000).slideDown(3000).animate({opacity: 0.5})
})