import Button from '../components/Button/Button'
import FieldOfText from '../components/FieldOfText/FieldOfText'
import Logo from './../components/Logo/Logo'
import { Link } from 'react-router-dom';

function Signin(){
    
    return(
        <>
        <div className="pageDiv">
            <div className="centerVertical">
                <Logo></Logo>
                <p className="texth3 fontStyle">bem vindo!</p>
            </div>
            <div className="inputDisplay">
                <FieldOfText type="text" text="EMAIL"></FieldOfText>
                <FieldOfText type="text" text="REPITA O EMAIL"></FieldOfText>
                <FieldOfText type="password" text="SENHA"></FieldOfText>
                <FieldOfText type="password" text="REPITA A SENHA"></FieldOfText>
            </div>
            <Button src="home" text="CADASTRAR"/>
            <div className="centerVertical">
                <p className="aBitOfText fontStyle">Ja possui uma conta?</p>
                <Link className="aBitOfText linkText fontStyle" to="/login">Entre!</Link>
            </div>
        </div>
        </>
    )
}

export default Signin