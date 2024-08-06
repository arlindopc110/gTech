import { Logo } from '../Logo'
import { StyledHeader } from './styles/index'

import logoheader from '../../assets/logo-header.svg'
import minicart from '../../assets/mini-cart.svg'
import searchicon from '../../assets/search.svg'
import { NavLink } from 'react-router-dom'


export const Header = () => {
    async function search({ code }){
        if(code == 'Enter'){
            const submitEvent = new SubmitEvent('submit')
            dispatchEvent(submitEvent)
        }
        
    }
    return (
        <StyledHeader>
            <div id="main-container">
                <div id="logo-container">
                    <Logo className="logo" source={logoheader} />
                </div>
                <form id="search-container">
                    <div style={{position: 'relative'}}>
                        <input type="text" placeholder='Pesquisar produto...' name="filter" id="search" onKeyUp={search} />
                        <button type="submit"><img id="searchIcon" src={searchicon} alt="Search Icon" /></button>
                    </div>
                </form>
                <div id="redirect-container">
                    <div id="links">
                        <a href="#">Cadastre-se</a>
                        <a href="#" id="button">Entrar</a>
                    </div>
                    <div id="minicart" style={{position: 'relative'}}>
                        <img style={{cursor: 'pointer'}} src={minicart} alt="mini-cart icon" />
                        <p id="minicart-counter"></p>
                    </div>
                </div>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/products">Produtos</NavLink></li>
                    <li><NavLink to="/categories">Categorias</NavLink></li>
                    <li><NavLink to="/orders">Meus Pedidos</NavLink></li>
                </ul>
            </nav>
        </StyledHeader>
    )
}