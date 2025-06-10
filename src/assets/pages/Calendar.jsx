import User from "../img/svg/user.svg"
import ImageButton from "../components/ImageButton/ImageButton"
import FooterMenu from "../components/FooterMenu/FooterMenu"

function Calendar(){
    
    return(
        <>
        <div className="fullPage">
            <div className="mainPageArea">
                <div className="fullSearchBar">
                    <ImageButton img={User} link="/profile" alt="Profile"></ImageButton>
                </div>
                <div className="calendar">
                    <h2 className="fontStyle">Junho</h2>
                    <div className="days">
                        <ul className="calendarRow">
                            <li className="fontStyle calendarHeader">D</li>
                            <li className="fontStyle calendarHeader">S</li>
                            <li className="fontStyle calendarHeader">T</li>
                            <li className="fontStyle calendarHeader">Q</li>
                            <li className="fontStyle calendarHeader">Q</li>
                            <li className="fontStyle calendarHeader">S</li>
                            <li className="fontStyle calendarHeader">S</li>
                        </ul>
                        <ul className="calendarRow">
                            <li className="fontStyle">1</li>
                            <li className="fontStyle">2</li>
                            <li className="fontStyle">3</li>
                            <li className="fontStyle">4</li>
                            <li className="fontStyle">5</li>
                            <li className="fontStyle">6</li>
                            <li className="fontStyle">7</li>
                        </ul>
                        <ul className="calendarRow">
                            <li className="fontStyle">8</li>
                            <li className="fontStyle">9</li>
                            <li className="fontStyle">10</li>
                            <li className="fontStyle">11</li>
                            <li className="fontStyle">12</li>
                            <li className="fontStyle">13</li>
                            <li className="fontStyle">14</li>
                        </ul>
                        <ul className="calendarRow">
                            <li className="fontStyle">15</li>
                            <li className="fontStyle">15</li>
                            <li className="fontStyle">17</li>
                            <li className="fontStyle">18</li>
                            <li className="fontStyle">19</li>
                            <li className="fontStyle">20</li>
                            <li className="fontStyle">21</li>
                        </ul>
                        <ul className="calendarRow">
                            <li className="fontStyle">22</li>
                            <li className="fontStyle">23</li>
                            <li className="fontStyle">24</li>
                            <li className="fontStyle">25</li>
                            <li className="fontStyle">26</li>
                            <li className="fontStyle">27</li>
                            <li className="fontStyle">28</li>
                        </ul>
                        <ul className="calendarRow">
                            <li className="fontStyle">29</li>
                            <li className="fontStyle">30</li>
                            <li className="fontStyle">31</li>
                            <li className="fontStyle"></li>
                            <li className="fontStyle"></li>
                            <li className="fontStyle"></li>
                            <li className="fontStyle"></li>
                        </ul>
                    </div>
                </div>
            </div>
            <FooterMenu home="iconFalse" shop="iconFalse" help="iconFalse" chat="iconFalse" calendar="iconTrue"></FooterMenu>
        </div>
        </>
    )
}

export default Calendar