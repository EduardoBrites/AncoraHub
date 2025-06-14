import User from "../img/svg/user.svg"
import ImageButton from "../components/ImageButton/ImageButton"
import FooterMenu from "../components/FooterMenu/FooterMenu"

function Home(){
    
    return(
        <>
        <div className="fullPage">
            <div className="mainPageArea">
                <div className="fullSearchBar">
                    <ImageButton img={User} link="/profile" alt="Profile"></ImageButton>
                </div>
            </div>
            <FooterMenu home="iconTrue" shop="iconFalse" help="iconFalse" chat="iconFalse" calendar="iconFalse"></FooterMenu>
        </div>
        </>
    )
}

export default Home