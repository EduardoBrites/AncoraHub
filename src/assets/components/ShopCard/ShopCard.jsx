import User from "../../img/svg/user.svg"
import NoImage from '../../img/svg/NoImage.svg'
import ProfileButton from "../ImageButton/ProfileButton"

function ShopCard({ link, image = User, imageCard = NoImage, name}){

    return(
        <>
            <div className="card">
                <ProfileButton img={image} link={link} alt="Profile" sellerName={name}></ProfileButton>
                <div className="cardImageDiv">
                    <img src={imageCard} className="cardImage"></img>
                </div>
            </div>
        </>
    )
}

export default ShopCard