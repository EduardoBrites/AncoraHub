import { Link } from 'react-router-dom';

function ImageButton({ img, link, alt, onClick}){

    return(
        <>
            <Link to={link} onClick={onClick}><img src={img} alt={alt} className="imageButton"></img></Link>
        </>
    )
}

export default ImageButton