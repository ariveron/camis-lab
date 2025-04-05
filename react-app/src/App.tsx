import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './routes';
import { Header } from './components/Header';

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
}

export default App;