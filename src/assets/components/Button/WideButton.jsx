import { Link } from "react-router-dom"

function WideButton({ link, text }){

    return(
        <>
            <Link to={link} className="wideButton"><p className="fontStyle">{text}</p></Link>
        </>
    )
}

export default WideButton