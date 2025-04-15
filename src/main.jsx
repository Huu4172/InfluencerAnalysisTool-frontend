import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AnalysePosts from './AnalysePosts/AnalysePosts.jsx'
// import './index.css'
import Input from './AnalysePosts/Input.jsx'
import Result from './AnalysePosts/Result.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnalysePosts />
  </StrictMode>,
)
