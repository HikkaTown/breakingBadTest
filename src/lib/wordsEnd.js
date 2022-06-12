const wordsEnd = (n) => {
  const textForms = ['персонаж', 'персонажей']
  if (n > 1) {
    return textForms[1]
  }
  if (n < 1) {
    return textForms[1]
  }
  return textForms[0]
}

export default wordsEnd
