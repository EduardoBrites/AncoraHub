import User from "../../img/svg/user.svg"
import NoImage from '../../img/svg/NoImage.svg'
import ProfileButton from "../ImageButton/ProfileButton"

function Contact({ link, image = User, name}){

    return(
        <>
            <div className="cardContact">
                <ProfileButton img={image} link={link} alt="Profile" sellerName={name}></ProfileButton>
            </div>
        </>
    )
}

export default Contact