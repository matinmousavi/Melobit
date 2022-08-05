   import "./App.css";
import { useRoutes } from 'react-router-dom';
import { routes } from './routes'
import { Container , Row } from "react-bootstrap";
import Header from "./Components/Header/Header";

function App() {
  let route = useRoutes(routes)
   

  return (
    <>
      <Container>
        <Header />
        {route}
      </Container>
    </>
  );
}

export default App;
