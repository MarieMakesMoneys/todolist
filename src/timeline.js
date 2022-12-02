import { displayTasks } from "./home.js"
import { allTasks } from "./index.js"

let sortedTasks;
function displayTimeline() {
    sortedTasks = [...allTasks]
    sortedTasks.sort(function(a, b){return a.dueDate - b.dueDate})
    displayTasks(sortedTasks)
}

export {sortedTasks, displayTimeline}