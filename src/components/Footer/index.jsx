import { StyledFooter } from "./styles";
import { Logo } from '../Logo'
import logofooter from '../../assets/logo-footer.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import { InfoComponent } from "./InfoComponent";

export const Footer = () => {
    return(
        <StyledFooter>
            <div id="main-container">
                <div id="left-container">
                    <Logo source={ logofooter } />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <nav>
                        <ul id="social">
                            <li><img src={ facebook } alt="Facebook" /></li>
                            <li><img src={ instagram } alt="Instagram" /></li>
                            <li><img src={ twitter } alt="Twitter" /></li>
                        </ul>
                    </nav>
                </div>
                <div id="right-container">
                    <div id="left-side">
                        <InfoComponent
                            className="info-component"
                            title={'Informação'} 
                            informations={[
                                'Sobre Drip Store',
                                'Segurança',
                                'Wishlist',
                                'Blog',
                                'Trabalhe Conosco',
                                'Meus Pedidos',
                            ]}
                        />
                        <InfoComponent
                            className="info-component"
                            title={'Categorias'} 
                            informations={[
                                'Camisetas',
                                'Calças',
                                'Bonés',
                                'Headphones',
                                'Tênis',
                            ]}
                        />
                    </div>
                    <div id="right-side">
                        <InfoComponent
                            className="info-component"
                            title={'Contato'} 
                            informations={[
                                'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161',
                                '(85) 3051-3411'
                            ]}
                        />
                    </div>
                </div>
            </div>
            <hr />
            <p id="license">@ 2022 Digital College</p>
        </StyledFooter>
    )
}