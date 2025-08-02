import './App.css'
import { Layout } from './components'
import store from './redux/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <>
    <Provider store={store} ><Layout /></Provider>
      
    </>
  )
}

export default App
