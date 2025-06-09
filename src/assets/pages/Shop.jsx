import User from "../img/svg/user.svg"
import ImageButton from "../components/ImageButton/ImageButton"
import FooterMenu from "../components/FooterMenu/FooterMenu"
import SearchBar from "../components/SearchBar/SearchBar"
import ShopCard from "../components/ShopCard/ShopCard"

function Shop(){
    
    return(
        <>
        <div className="fullPage">
            <div className="mainPageArea">
                <div className="fullSearchBar">
                    <ImageButton img={User} link="/profile" alt="Profile"></ImageButton>
                    <SearchBar text="Pesquisar"></SearchBar>
                </div>
                <div className="cardsArea">
                    <ShopCard link="/shop" name="Nome do Vendedor"></ShopCard>
                    <ShopCard link="/shop" name="Nome do Vendedor"></ShopCard>
                    <ShopCard link="/shop" name="Nome do Vendedor"></ShopCard>
                    <ShopCard link="/shop" name="Nome do Vendedor"></ShopCard>
                    <ShopCard link="/shop" name="Nome do Vendedor"></ShopCard>
                    <ShopCard link="/shop" name="Nome do Vendedor"></ShopCard>
                </div>
            </div>
            <FooterMenu home="iconFalse" shop="iconTrue" help="iconFalse" chat="iconFalse" calendar="iconFalse"></FooterMenu>
        </div>
        </>
    )
}

export default Shop