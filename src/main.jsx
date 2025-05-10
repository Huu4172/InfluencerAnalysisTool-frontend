import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AnalysePosts from './analyseposts/AnalysePosts.jsx'
// import './index.css'
import Input from './analyseposts/Input.jsx'
import Result from './analyseposts/Result.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnalysePosts />
  </StrictMode>,
)
