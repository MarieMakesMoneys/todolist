import displayTasks from "./home.js"
import { allTasks } from "./index.js"

export default function displayTimeline() {
    allTasks.sort(function(a, b){return a.dueDate - b.dueDate})
    displayTasks(allTasks)
}