import { Link } from 'react-router-dom';

function ProfileButton({ img, link, alt, sellerName }){

    return(
        <>
            <div className="sellerProfile">
                <Link to={link}><img src={img} alt={alt} className="profileButton"></img></Link>
                <p class="sellerName fontStyle">{sellerName}</p>
            </div>
        </>
    )
}

export default ProfileButton