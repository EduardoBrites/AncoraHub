import WideButton from '../Button/WideButton';
import StarSVG from './../../img/svg/Star1.svg?react';

function FooterHighMenu({ home, shop, help, chat, calendar }) {
  return (
    <>
    <StarSVG className="bottomLeftHigh"></StarSVG>
    <StarSVG className="bottomRightHigh"></StarSVG>
    <div className="menuDiv">
        <ul className="menuUlHigh">
          <WideButton link="/completeinfo" text="Completar Dados"></WideButton>
          <WideButton link="/" text="Sair"></WideButton>
        </ul>
    </div>
    </>
  );
}

export default FooterHighMenu;
