import { useState, createContext } from 'react'

export const CategoriesContext = createContext()

export function CategoriesProvider({ children }) {
  const [category, setCategory] = useState(null)

  return (
    <CategoriesContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}
