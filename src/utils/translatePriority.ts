import type { TaskPriority, PortugueseTaskPriority } from "utils/types";

export default function translatePriority(
  priority: TaskPriority | PortugueseTaskPriority,
  toLanguage: 'pt' | 'en'
): (PortugueseTaskPriority | TaskPriority | 'N/A') {
  
  // ENGLISH TO PORTUGUESE
  if (toLanguage === 'pt') {
      switch (priority) {
      case 'Low': return 'Baixa'
      case 'Medium': return 'Média'
      case 'High': return 'Alta'
      default:
        console.error(`[TypeError] The given priority level "${priority}" does not exist.`)
    }
  }

  // PORTUGUESE TO ENGLISH
  if (toLanguage === 'en') {
      switch (priority) {
        case 'Baixa': return 'Low'
        case 'Média': return 'Medium'
        case 'Alta': return 'High'
        default:
          console.error(`[TypeError] The given priority level "${priority}" does not exist.`)
      }
  }

  return 'N/A'
}