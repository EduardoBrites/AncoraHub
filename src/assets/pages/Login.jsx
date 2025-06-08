import Button from '../components/Button/Button'
import FieldOfText from '../components/FieldOfText/FieldOfText'
import Logo from './../components/Logo/Logo'

function Login(){
    
    return(
        <>
        <div className="pageDiv">
            <div className="centerVertical">
                <Logo></Logo>
                <p className="texth3 fontStyle">bem vindo!</p>
            </div>
            <div className="inputDisplay">
                <FieldOfText text="EMAIL"></FieldOfText>
                <FieldOfText text="SENHA"></FieldOfText>
            </div>
            <Button src="home" text="Entrar"/>
        </div>
        </>
    )
}

export default Login