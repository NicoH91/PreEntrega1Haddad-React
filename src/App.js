import Header from './components/Header';


import './App.css';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el CSS de Bootstrap
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer/>
      <Footer />
    </div>
  );
}

export default App;
