import { useContext } from 'react'
import { CategoriesContext } from '../context/categories'

export function useCategory() {
  const { category, setCategory } = useContext(CategoriesContext)

  const handleClick = ({ target }) => {
    const newCategory = target.attributes['data-id'].nodeValue
    setCategory(newCategory)
    console.log({ newCategory })
  }

  return { category, setCategory, handleClick }
}
