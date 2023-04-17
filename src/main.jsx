import ReactDOM from 'react-dom/client'
import { WishListContext } from './context/WishContext.jsx'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Auth0Provider } from "@auth0/auth0-react";
import Router from './routes/router.jsx';
import './Main.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_ISSUER}
      clientId={import.meta.env.VITE_AUTH0_CLIENT}
      authorizationParams={{
        redirect_uri: import.meta.env.VITE_MAIN_URL,
        audience: import.meta.env.VITE_API_URL
      }}>
      <QueryClientProvider client={queryClient}>
        <WishListContext>
          <Router />
        </WishListContext>
      </QueryClientProvider>
    </Auth0Provider>
)
