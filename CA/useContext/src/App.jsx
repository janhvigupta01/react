import React,{useContext} from 'react'
import Header from './Header'
import Footer from './Footer'
import { AppContext } from './AppContext'
import Content from './Content'

const App = () => {
  const {theme,setTheme}=useContext(AppContext)
  return (
    <div >
      <button onClick={()=>setTheme(theme==="light"?"dark":"light")} className="p-2 bg-blue-500 text-white rounded">
        {theme==="light"?"black":"light"}
        </button>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
