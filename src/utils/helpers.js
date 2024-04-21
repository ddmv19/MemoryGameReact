export const checkMatch = (array = []) => {
  return array[0] === array[1]
}

export const changeToPatternImg = (targetsArray = [], categoryId) => {
  targetsArray.forEach((target) => {
    target.setAttribute('src', `/public/${categoryId}-pattern.png`)
  })
}

export const removeListenerFromMatches = (targetsArray = []) => {
  targetsArray.forEach((target) => {
    target.classList.add('pointer-events-none')
  })
}
