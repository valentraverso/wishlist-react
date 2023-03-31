import { WishListContext } from './context/WishContext.jsx'
import { DOMRoutes } from './routes/DOMRoutes.jsx'
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <WishListContext>
        <DOMRoutes />
      </WishListContext>
    </QueryClientProvider>
  )
}

export default App
