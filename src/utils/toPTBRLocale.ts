export default function toPTBRLocale(value: Date, type: 'date' | 'time') {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit'
  }
  
  switch (type) {
    case 'date':
      return value.toLocaleDateString('pt-BR', dateOptions)
    
    case 'time':
      return value.toLocaleTimeString('pt-BR', timeOptions)
    
    default:
      console.error(`The given type "${type}" does not exist.`)
      break;
  }
}