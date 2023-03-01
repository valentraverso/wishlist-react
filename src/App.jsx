import {WishListContext} from './context/WishContext.jsx'
import {DOMRoutes} from './routes/DOMRoutes.jsx'
import './App.css';

function App() {
  return (
    <WishListContext>
        <DOMRoutes/>
    </WishListContext>
  )
}

export default App
