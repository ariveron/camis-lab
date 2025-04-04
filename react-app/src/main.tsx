import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from 'react-oidc-context'

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_Irrs98eac",
  client_id: "6rtm3untp0m1geb9cuva1m94t0",
  redirect_uri: "https://camislab.com/",
  response_type: "code",
  scope: "openid email",
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider { ...cognitoAuthConfig }>
      <App />
    </AuthProvider>
  </StrictMode>,
)
