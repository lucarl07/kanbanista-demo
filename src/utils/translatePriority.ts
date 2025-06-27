import type { TaskPriority, TranslatedTaskPriority } from "utils/types";

export default function translatePriority(
  priority: TaskPriority
): (TranslatedTaskPriority | 'N/A') {
  switch (priority) {
    case 'Low': return 'Baixa'
    case 'Medium': return 'Média'
    case 'High': return 'Alta'
    default:
      console.error(`[TypeError] The given priority level "${priority}" does not exist.`)
  }
  return 'N/A'
}