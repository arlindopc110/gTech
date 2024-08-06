import { StyledFilterGroup } from "./styles";


const FilterGroup = ({ title, inputType, options }) => {
    
    return ( 
        <StyledFilterGroup >
            <p>{title}</p>
            {options.map((item, index) =>{
                return <>
                    <input key={index} type={inputType} value={item.value} id={`input${index}`} name={title.toLowerCase()} />
                    <label htmlFor={`input${index}`}>{item.text}</label>
                </>
            })}
        </StyledFilterGroup>
     );
}
 
export default FilterGroup;