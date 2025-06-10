import User from "../img/svg/user.svg"
import ImageButton from "../components/ImageButton/ImageButton"
import FooterMenu from "../components/FooterMenu/FooterMenu"
import SearchBar from "../components/SearchBar/SearchBar"
import Contact from "../components/Contact/Contact"

function Help(){
    
    return(
        <>
        <div className="fullPage">
            <div className="mainPageArea">
                <div className="fullSearchBar">
                    <ImageButton img={User} link="/profile" alt="Profile"></ImageButton>
                    <SearchBar text="Pesquisar"></SearchBar>
                </div>
                <div className="contactArea">
                    <Contact link="/help" name="Nome da Marca"></Contact>
                    <Contact link="/help" name="Nome da Marca"></Contact>
                    <Contact link="/help" name="Nome da Marca"></Contact>
                    <Contact link="/help" name="Nome da Marca"></Contact>
                    <Contact link="/help" name="Nome da Marca"></Contact>
                    <Contact link="/help" name="Nome da Marca"></Contact>
                    <Contact link="/help" name="Nome da Marca"></Contact>
                    <Contact link="/help" name="Nome da Marca"></Contact>
                    <Contact link="/help" name="Nome da Marca"></Contact>
                    <Contact link="/help" name="Nome da Marca"></Contact>
                    <Contact link="/help" name="Nome da Marca"></Contact>
                    <Contact link="/help" name="Nome da Marca"></Contact>
                    <Contact link="/help" name="Nome da Marca"></Contact>
                    <Contact link="/help" name="Nome da Marca"></Contact>
                </div>
            </div>
            <FooterMenu home="iconFalse" shop="iconFalse" help="iconTrue" chat="iconFalse" calendar="iconFalse"></FooterMenu>
        </div>
        </>
    )
}

export default Help