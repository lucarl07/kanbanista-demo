import * as types from "utils/types";

function getPriorityNumber(priority: types.TaskPriority): number {
  switch (priority) {
    case 'Low': return 1
    case 'Medium': return 2
    case 'High': return 3
    default:
      console.error(`[TypeError] The given priority level "${priority}" does not exist.`)
  }
  return 0
}

export default function sortTasks(a: types.Task, b: types.Task): number {
  const aPriority = getPriorityNumber(a.priority)
  const bPriority = getPriorityNumber(b.priority)
  return bPriority - aPriority
}