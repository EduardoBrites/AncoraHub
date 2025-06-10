import User from "../img/svg/user.svg"
import ChatSVG from "./../img/svg/Chat.svg"
import SubmitImageButton from "../components/ImageButton/SubmitImageButton"
import ImageButton from "../components/ImageButton/ImageButton"
import FooterMenu from "../components/FooterMenu/FooterMenu"
import FieldOfText from "../components/FieldOfText/FieldOfText"

function Chat(){
    
    return(
        <>
        <div className="fullPage">
            <div className="mainPageArea">
                <div className="fullSearchBar">
                    <ImageButton img={User} link="/profile" alt="Profile"></ImageButton>
                </div>
                <div className="chat">
                    <div className="listening">
                        <div className="verticalLines">
                            <p className="smallLine fontStyle">|</p>
                            <p className="bigLine fontStyle">|</p>
                            <p className="smallLine fontStyle">|</p>
                            <p className="bigLine fontStyle">|</p>
                            <p className="smallLine fontStyle">|</p>
                        </div>
                        <p className="chatText fontStyle">Olá!<br/>Como posso te ajudar?</p>
                    </div>
                </div>
                <div className="chatField">
                    <FieldOfText text="Pergunte" type="text"></FieldOfText>
                <SubmitImageButton alt="Microphone" link="/chat" img={ChatSVG}></SubmitImageButton>
                </div>

            </div>
            <FooterMenu home="iconFalse" shop="iconFalse" help="iconFalse" chat="iconTrue" calendar="iconFalse"></FooterMenu>
        </div>
        </>
    )
}

export default Chat