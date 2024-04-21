import { useCategory } from '../hooks/useCategory'
import {
  changeToPatternImg,
  checkMatch,
  removeListenerFromMatches,
} from '../utils/helpers'

const Board = () => {
  const { category } = useCategory()

  if (!category) return

  const { characters, border, id } = category
  const suffledCharacters = characters.sort(() => Math.random() - 0.5)
  const visibility = category ? 'animate-fade-in' : 'hidden'
  let charactersFlip = []
  let targetsFlip = []
  let match = false

  const handleFlip = ({ target }) => {
    if (charactersFlip.length < 2) {
      const character = target.getAttribute('data-id')
      target.setAttribute('src', `/public/${character}.webp`)
      targetsFlip.push(target)
      charactersFlip.push(character)
      console.log({ character, targetsFlip })
      setTimeout(() => {
        if (charactersFlip.length === 1) {
          changeToPatternImg(targetsFlip, id)
          targetsFlip = []
          charactersFlip = []
        }
      }, 1500)
    }
    if (charactersFlip.length === 2) {
      match = checkMatch(charactersFlip)
      console.log({ match })
      if (!match) {
        setTimeout(() => {
          changeToPatternImg(targetsFlip, id)
          targetsFlip = []
          charactersFlip = []
        }, 1500)
      } else {
        removeListenerFromMatches(targetsFlip)
        targetsFlip = []
        charactersFlip = []
      }
    }
  }

  console.log({ suffledCharacters })
  console.log({ category })

  return (
    <section
      className={`flex flex-row flex-wrap items-center justify-center gap-8 mt-8 max-w-[1400px] border-2 border-red-600 rounded-lg m-auto p-8 ${visibility} animate-duration-[1.3s]`}
    >
      {suffledCharacters.map(({ id, name, flip }, index) => (
        <picture
          key={index}
          className={`relative z-50 flex items-center justify-center w-60 h-80 rounded-md cursor-pointer overflow-visible card-board-image`}
        >
          <img
            className={`absolute z-30 object-cover w-[100%] h-[100%]  border-2 ${border} hover:scale-105 transition-transform duration-150`}
            src={`/public/${category.id}-pattern.png`}
            alt={flip ? name : `${category.name} Character`}
            data-id={id}
            onClick={handleFlip}
            style={
              category.name === 'Dragon Ball'
                ? { boxShadow: '2px 2px 10px orange' }
                : category.name === 'Demon Slayer'
                ? { boxShadow: '2px 2px 10px blue' }
                : { boxShadow: '2px 2px 10px purple' }
            }
          />
        </picture>
      ))}
    </section>
  )
}

export default Board
