import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <Header></Header>
     

     <div className='md:flex'>
      <Blogs>

      </Blogs>
      <Bookmarks></Bookmarks>
     </div>
    
     
    </>
  )
}

export default App
