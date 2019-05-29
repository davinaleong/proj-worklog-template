/**
 * This script requires jQuery to be included.
 */

// Declare element properties
const workLogClickable = {
  selector: '.clickable.worklog-card',
  jqElement: null
}

$(document).ready(function () {

  // Assign jQuery elements by their selectors
  workLogClickable.jqElement = $(workLogClickable.selector)

  registerEvents()

})

/**
 * Register events on jQuery elements
 */
function registerEvents() {

  // Go to 'existing-log' html page when a work-log card is clicked.
  workLogClickable.jqElement.click(function() {
    window.location.href = './existing-log.html'
  })

}