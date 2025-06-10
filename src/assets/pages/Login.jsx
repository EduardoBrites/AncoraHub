import Button from '../components/Button/Button'
import FieldOfText from '../components/FieldOfText/FieldOfText'
import Logo from './../components/Logo/Logo'
import { Link } from 'react-router-dom';

function Login(){
    
    return(
        <>
        <div className="pageDiv">
            <div className="centerVertical">
                <Logo></Logo>
                <p className="texth3 fontStyle">bem vindo!</p>
            </div>
            <div className="inputDisplay">
                <FieldOfText type="email" text="EMAIL"></FieldOfText>
                <FieldOfText type="password" text="SENHA"></FieldOfText>
            </div>
            <Button src="home" text="ENTRAR"/>
            <div className="centerVertical">
                <p className="aBitOfText fontStyle">Ainda não possui uma conta?</p>
                <Link className="aBitOfText linkText fontStyle" to="/signin">Cadastre-se!</Link>
            </div>
        </div>
        </>
    )
}

export default Login