import '@fontsource/fredoka-one'
import { SelectCategory } from './components/SelectCategory'
import Board from './components/Board'

function App() {
  return (
    <main className="">
      <h1
        className="py-4 text-4xl text-center uppercase tracking-[.3em] border-b-4 border-slate-400 bg-gradient-to-r from-purple-300 to-indigo-700 bg-clip-text text-transparent"
        id="title"
        style={{
          fontFamily: 'Fredoka One',
        }}
      >
        Memory Game
      </h1>
      <SelectCategory />
      <Board />
    </main>
  )
}

export default App
