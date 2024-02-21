import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import RestaurantDetail from './pages/RestaurantDetail'
import { RestaurantsContextProvider } from './context/RestaurantsContext'

function App() {
  return (
    <>
    <RestaurantsContextProvider >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/restaurants/:id' element={<RestaurantDetail/>}/>
        </Routes>
      </BrowserRouter>
      </RestaurantsContextProvider>
    </>
  )
}

export default App
