import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CategoriesProvider } from './context/categories.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CategoriesProvider>
    <App />
  </CategoriesProvider>
)
