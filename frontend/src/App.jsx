import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './components/Test'
import Home from './pages/Home'
import RestaurantDetail from './pages/RestaurantDetail'
import UpdatePage from './pages/UpdatePage'
import AddBar from './components/AddBar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddBar/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/restaurants/:id/update' element={<UpdatePage/>}/>
          <Route path='/restaurants/:id' element={<RestaurantDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
