export default function toPTBRLocale(
  value: Date | undefined, 
  type: 'date' | 'shortDate' | 'time'
) {
  if (!value) return undefined;

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit'
  }
  if (type === 'shortDate') {
    dateOptions['month'] = 'short'
  }
  
  switch (type) {
    case 'date':
    case 'shortDate':
      return value.toLocaleDateString('pt-BR', dateOptions)
    
    case 'time':
      return value.toLocaleTimeString('pt-BR', timeOptions)
    
    default:
      console.error(`The given type "${type}" does not exist.`)
      return undefined;
  }
}