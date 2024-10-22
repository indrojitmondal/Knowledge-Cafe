import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'




function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTimes,setReadingTimes]=useState(0);


  const handleAddToBookmark = blog =>{

    const newBookmarks = [...bookmarks, blog];
    
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (time,id)=>{
    console.log("Mark As read",time);
    const newReadingTime= readingTimes+ time;
    setReadingTimes(newReadingTime);
    const newBookmarks = bookmarks.filter(bookmark => bookmark.id !=id);
    setBookmarks(newBookmarks); 
  }

  return (
    <>
      
     <Header></Header>
     

     <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} 
             handleMarkAsRead={handleMarkAsRead}
      >

      </Blogs>
      <Bookmarks bookmarks={bookmarks}
          readingTimes={readingTimes} 
      ></Bookmarks>
     </div>
    
     
    </>
  )
}

export default App
