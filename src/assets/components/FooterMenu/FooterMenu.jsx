import HomeSVG from './../../img/svg/Home.svg?react';
import ShopSVG from './../../img/svg/Shop.svg?react';
import HelpSVG from './../../img/svg/Help.svg?react';
import ChatSVG from './../../img/svg/Chat.svg?react';
import CalendarSVG from './../../img/svg/Calendar.svg?react';
import StarSVG from './../../img/svg/Star1.svg?react';
import { Link } from 'react-router-dom';

function FooterMenu({ home, shop, help, chat, calendar }) {
  return (
    <>
    
    <StarSVG className="bottomLeft"></StarSVG>
    <StarSVG className="bottomRight"></StarSVG>
    <div className="menuDiv">
        <ul className="menuUl">
            <li className="iconInstance"><Link to="/home"><HomeSVG className={home} /></Link></li>
            <li className="iconInstance"><Link to="/shop"><ShopSVG className={shop} /></Link></li>
            <li className="iconInstance"><Link to="/help"><HelpSVG className={help} /></Link></li>
            <li className="iconInstance"><Link to="/chat"><ChatSVG className={chat} /></Link></li>
            <li className="iconInstance"><Link to="/calendar"><CalendarSVG className={calendar} /></Link></li>
        </ul>
    </div>
    </>
  );
}

export default FooterMenu;
