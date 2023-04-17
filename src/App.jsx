

function App() {
  

  return (
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
}

export default App
