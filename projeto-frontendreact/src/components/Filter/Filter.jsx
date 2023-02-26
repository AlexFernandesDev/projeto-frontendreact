import { FilterContainer, TitleFilter, StyledLabel, TextLabel, Input} from "./styled";


export function Filter ({ minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter}) {

    function handleMinFilterChange(event){
        const value = parseInt(event.target.value);
        if(!isNaN(value) && value >= 0){
            setMinFilter(value)
        }
    }
    console.log(minFilter);
    function handleMaxFilterChange(event){
        const value = parseInt(event.target.value);
        if(!isNaN(value) && value >= 0){
            setMaxFilter(value)
        }
    }

    function hanfleSearchFilterChange(event){
        setSearchFilter(event.target.value)
    }

    return(
        <FilterContainer>
            <TitleFilter>Filtrar Produtos</TitleFilter>
            <StyledLabel htmlFor="valor-minimo">
                <TextLabel>Valor mínimo:</TextLabel>
                <Input id="valor-minimo" type="number" value={minFilter} onChange={handleMinFilterChange}/>
            </StyledLabel>
            
            <StyledLabel htmlFor="valor-maximo">
                <TextLabel>Valor máximo:</TextLabel>
                <Input id="valor-maximo" type="number" value={maxFilter} onChange={handleMaxFilterChange}/>
            </StyledLabel>
            
            <StyledLabel htmlFor="busca-nome">
                <TextLabel>Busca por nome:</TextLabel>
                <Input id="busca-nome" type="text" />
            </StyledLabel>    
        </FilterContainer>
    )
}