import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagenLogo from '../../assets/logo-mejor-horchata.png'
import { CardWidget } from '../CardWidget/CardWidjet';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = ()=>{
    return( 
        <nav className='navigation '>
            <Link to="/"><img src={ImagenLogo} className='logoImg' alt="Mejor Horchata"></img></Link>
            <ul className='list mt-4 pt-1'>
                <li><NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInActiva'} 
                to="/horchatas">Horchatas</NavLink></li>
                <li><NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInActiva'} 
                 to="/fartons">Fartons</NavLink></li>
                <li><NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInActiva'} 
                to="/frutossecos">Frutos Secos</NavLink></li>
                <li><NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInActiva'} 
                to="/:chufadelight">Chufa Delights</NavLink></li>
                <li><NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInActiva'} 
                to="/:bebidas-vegetales">Bebidas Vegetales</NavLink></li>
                <li><NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInActiva'} 
                to="/:choco">Choco</NavLink></li>
                <li><NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInActiva'} 
                to="/:coco">Coco</NavLink></li>
                 <li><NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInActiva'} 
                to="/:mas-productos">...</NavLink></li>
            </ul>
            <CardWidget/>
        </nav>

    )
}