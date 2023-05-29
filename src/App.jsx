import './App.css';
import FormularioTarea from './components/FormularioTarea';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <Container className='main border rounded my-5'>
      <section className='text-light text-center'>
        <h1 className=''>Bienvenido</h1>
        <hr />
      </section>
      <div className=''>
        <FormularioTarea></FormularioTarea>
      </div>
    </Container>
  )
}

export default App;
