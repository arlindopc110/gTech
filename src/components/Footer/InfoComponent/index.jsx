
export const InfoComponent = ({ title, informations, className }) =>{
    return(
        <nav className={className}>
            <h3>{title}</h3>
            <ul>
                {informations.map((link, index) => <li key={index} ><a href="#">{link}</a></li>)}
            </ul>
        </nav>
    )
}