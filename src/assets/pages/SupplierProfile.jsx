import User from "../img/svg/user.svg"
import Back from "../img/svg/ArrowLeft.svg"
import Phone from "../img/svg/Help.svg"
import Whatsapp from "../img/svg/Whatsapp.svg"
import Email from "../img/svg/Email.svg"
import ImageButton from "../components/ImageButton/ImageButton"
import FooterMenu from "../components/FooterMenu/FooterMenu"
import ProfilePhoto from "../components/ProfilePhoto/ProfilePhoto"
import Label from "../components/FieldOfText/Label"

function SupplierProfile(){
    
    return(
        <>
        <div className="fullPage">
            <div className="mainPageArea">
                <div className="fullSearchBar">
                    <ImageButton img={Back} link="javascript:history.back()" alt="Profile" onClick={() => window.history.back()}></ImageButton>
                </div>
                <div className="profile">
                    <ProfilePhoto img={User} name="Nome da Marca"></ProfilePhoto>
                </div>
                <div className="supplierInfo">
                    <Label img={Phone} text="(xx) xxxxx-xxxx"></Label>
                    <Label img={Whatsapp} text="(xx) xxxxx-xxxx"></Label>
                    <Label img={Email} text="nomedamarca.dominio.com"></Label>
                </div>
            </div>
            <FooterMenu home="iconNone" shop="iconNone" help="iconNone" chat="iconNone" calendar="iconNone"></FooterMenu>
        </div>
        </>
    )
}

export default SupplierProfile