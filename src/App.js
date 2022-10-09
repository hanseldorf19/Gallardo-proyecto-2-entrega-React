import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar} from './components/NavBar/NavBar';
import { TopBar } from './components/NavBar/TopNav/TopNav';
import { ProdListContainer } from './components/ProdListContainer/ProdListContainer'
import { ContactPage } from './components/ContactPage/ContactPage';
import { useParams } from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail/ProductDetail'

function App() {
  console.log(useParams());
  return (
    <BrowserRouter>
      <div className='App'>
        <TopBar/>
          <header className="App-header">
      
            <NavBar/>
              
          </header>
          <Routes>  
                <Route path="/" element={<ProdListContainer/>}/>
                <Route exact path="/comida/horchatas" element={<ProdListContainer/>}/>
                <Route path="/:category" element={<ProdListContainer/>}/>
                <Route path="/comida/frutossecos" element={<ProdListContainer/>}/>
                <Route path="/comida/deliciasdechufa" element={<ProdListContainer/>}/>
                <Route path="/comida/bebidas-vegetales" element={<ProdListContainer/>}/>
                <Route path="/comida/chocolates" element={<ProdListContainer/>}/>
                <Route path="/comida/coco" element={<ProdListContainer/>}/>

                <Route path='=/product/:id' element={<ProductDetail/>}/>
               
                <Route path="/contacto" element={<ContactPage/>}/>
              </Routes>
       
          <footer>
            derechos reservados
          </footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
