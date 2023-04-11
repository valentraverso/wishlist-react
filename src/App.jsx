import { WishListContext } from './context/WishContext.jsx'
import { DOMRoutes } from './routes/DOMRoutes.jsx'
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  const queryClient = new QueryClient();

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_ISSUER}
      clientId={import.meta.env.VITE_AUTH0_CLIENT}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: import.meta.env.VITE_API_URL
      }}>
      <QueryClientProvider client={queryClient}>
        <WishListContext>
          <DOMRoutes />
        </WishListContext>
      </QueryClientProvider>
    </Auth0Provider>
  )
}

export default App
