import SearchSVG from './../../img/svg/Search.svg?react'; 

function SearchBar({ text }){

    return(
        <>
        <form className="searchDiv">
            <input type="text" className="searchBar fontStyle" placeholder={text}></input>
            <button type="submit" className="searchBarButton"><SearchSVG></SearchSVG></button>
        </form>
        </>
    )
}

export default SearchBar