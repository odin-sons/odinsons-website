const transform = (text) => {
  if(text.startsWith('# ')) {
    return `<strong class="text-gray-500">${text.slice(2)}</strong>`
  }
  
  if(text.startsWith('https://')) {
    const [ link, rest ] = text.split(/ (.+)/)
  
    return `<a href="${link}" class="text-blue-600" target="_blank">🔗 ${rest}</a>`
  }

  return text
}
export const description = ({ header, toggler = 'Подробнее', blocks = [''] }) => {
  return `${header}<details><summary><strong class="text-gray-500">${toggler}</strong></summary>${blocks.map(el => transform(el)).join('<br>')}</details)}`
}