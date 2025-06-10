import User from "../img/svg/user.svg"
import Back from "../img/svg/ArrowLeft.svg"
import ImageButton from "../components/ImageButton/ImageButton"
import FooterMenu from "../components/FooterMenu/FooterMenu"
import ProfilePhoto from "../components/ProfilePhoto/ProfilePhoto"
import FooterHighMenu from "../components/FooterMenu/FooterHighMenu"
import WideButton from "../components/Button/WideButton"

function Profile(){
    
    return(
        <>
        <div className="fullPage">
            <div className="mainPageArea">
                <div className="fullSearchBar">
                    <ImageButton img={Back} link="javascript:history.back()" alt="Profile" onClick={() => window.history.back()}></ImageButton>
                </div>
                <div className="profile">
                    <ProfilePhoto img={User} name="Nome Sobrenome"></ProfilePhoto>
                </div>
            </div>
            <FooterHighMenu></FooterHighMenu>
        </div>
        </>
    )
}

export default Profile