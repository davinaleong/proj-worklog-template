/**
 * This script requires jQuery to be included.
 */

// Declare element properties
const worklogCard = {
  selector: '.clickable.worklog-card',
  jqElement: null,
  location: 'existing-log.html'
}

const worklogCardEdit = {
  selector: '.clickable.worklog-card-edit',
  jqElement: null,
  location: 'existing-log-edit.html'
}

const jqObjects = [];

$(document).ready(function () {

  addJqObjectsToArray()

  initJqElements()
  registerJqEvents()

})

/**
 * Add objects to jqObjects array
 */
function addJqObjectsToArray() {

  console.log('--- fn addJqObjectsToArray')

  jqObjects.push(worklogCard)
  jqObjects.push(worklogCardEdit)

}

/**
 * Initialise jQuery elements
 */
function initJqElements() {

  console.log('--- fn initJqElements')

  // worklogCard.jqElement = $(worklogCard.selector)
  // worklogCardEdit.jqElement = $(worklogCardEdit.selector)
  jqObjects.map(jqObject => {
    jqObject.jqElement = $(jqObject.selector)
  })

}

/**
 * Register events on jQuery elements
 */
function registerJqEvents() {

  console.log('--- fn registerJqEvents')

  // Go to 'existing-log' html page when a work-log card is clicked.
  worklogCard.jqElement.click(function() {
    window.location.href = worklogCard.location
  })

  // Go to 'existing-log-edit' html page when a work-log card is clicked.
  worklogCardEdit.jqElement.click(function() {
    window.location.href = worklogCardEdit.location
  })

}