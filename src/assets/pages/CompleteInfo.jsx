import Button from '../components/Button/Button'
import FieldOfText from '../components/FieldOfText/FieldOfText'
import Logo from './../components/Logo/Logo'

function CompleteInfo(){
    
    return(
        <>
        <div className="pageDiv">
            <div className="centerVertical">
                <Logo></Logo>
                <p className="texth3 fontStyle">bem vindo!</p>
            </div>
            <div className="inputDisplay">
                <FieldOfText type="text" text="ENDEREÇO"></FieldOfText>
                <FieldOfText type="text" text="NÚMERO"></FieldOfText>
                <FieldOfText type="text" text="EMPRESA"></FieldOfText>
                <FieldOfText type="tel" text="TELEFONE"></FieldOfText>
            </div>
            <Button src="home" text="COMPLETAR"/>
        </div>
        </>
    )
}

export default CompleteInfo