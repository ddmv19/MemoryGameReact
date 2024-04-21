import { CATEGORIES } from '../utils/constants'
import { useCategory } from '../hooks/useCategory'

export const SelectCategory = () => {
  const { category, handleClick } = useCategory()

  const visible = category ? 'animate-disappear' : 'block'

  return (
    <section
      className={`flex flex-col items-center justify-center mt-8 max-w-[1000px] border-2 border-indigo-600 rounded-lg m-auto p-8 ${visible}`}
    >
      <h2 className="text-2xl font-bold uppercase tracking-wider mb-4">
        Pick Category
      </h2>
      <main className="w-max flex flex-row gap-10 items-center justify-center mt-4">
        {CATEGORIES.map(({ id, name, border }) => (
          <div
            className={`flex flex-col gap-4 w-64 h-[500px] border-2 transition-shadow duration-300 overflow-hidden cursor-pointer card-category ${border}`}
            key={id}
            data-id={id}
            onClick={handleClick}
          >
            <picture className="w-[100%] h-max">
              <img
                className="w-[100%] h-[450px] transition-transform duration-200 card-category-image"
                src={`/public/${id}.webp`}
                data-id={id}
                alt={name}
              />
            </picture>
            <h3 className="text-xl text-center">{name}</h3>
          </div>
        ))}
      </main>
    </section>
  )
}
