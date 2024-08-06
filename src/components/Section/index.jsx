import { NavLink } from 'react-router-dom'
import { StyledSection } from './styles'
import LinkArrow from '../../assets/link-arrow.svg'

export const Section = ({ title, link, titlePosition, children }) => {

    function positionSetter(){
        if(titlePosition == 'center') return {position: 'absolute', left: '50%', transform: 'translate(-50%, 0)'}
        return {}
    }
    return(
        <StyledSection>
            <div id="container">
                <p style={positionSetter()}>{title}</p>
                <NavLink to={'/products'} style={{position: 'absolute', right: '0'}} >{link}<img style={{visibility: link ? 'visible' : 'hidden'}} src={LinkArrow} /></NavLink>
            </div>
            <div id="chidren">{children}</div>
        </StyledSection>
    )
}