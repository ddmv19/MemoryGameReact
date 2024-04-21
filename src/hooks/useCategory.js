import { useContext } from 'react'
import { CategoriesContext } from '../context/categories'
import { CATEGORIES } from '../utils/constants'

export function useCategory() {
  const { category, setCategory } = useContext(CategoriesContext)

  const handleClick = ({ target }) => {
    const categorySelected = target.attributes['data-id'].nodeValue
    const newCategory = CATEGORIES.find(({ id }) => id === categorySelected)
    setCategory(newCategory)
  }

  return { category, setCategory, handleClick }
}
