import { Link } from 'react-router-dom';

function ImageButton({ img, link, alt }){

    return(
        <>
            <Link to={link}><img src={img} alt={alt} className="imageButton"></img></Link>
        </>
    )
}

export default ImageButton