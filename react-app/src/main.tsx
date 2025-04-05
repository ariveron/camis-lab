import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from 'react-oidc-context'
import { Env } from './lib/Env.ts'

const cognitoAuthConfig = {
  authority: Env.COGNITO_AUTHORITY,
  client_id: Env.COGNITO_CLIENT_ID,
  redirect_uri: Env.COGNITO_REDIRECT_URI,
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
