import React from 'react';
import './Main.css';

import appMain from '../../static/appMainImage.png';
import appContents from '../../static/appContentsImage.png';
import travelMate from '../../static/travel-mate.png';
import restaurant from '../../static/restaurant.png';
import calendar from '../../static/calendar.png';

const Main = () => {
    return (
        <div className="main-wrapper">
            <div className="main-first">
                <div className="main-logo">
                    <p>withTrip</p>
                </div>

                <div className="main-first-content">
                    <div className="main-title">
                        <h1>함께하는 여행</h1>
                        <h1>위드트립</h1>
                    </div>
                    
                    <div className="main-sub-title">
                        <p>설레는 장소에서 함께 할 여행 메이트를 찾아보세요!</p>
                    </div>                    

                    <img src={appMain} alt="위드트립 앱 메인화면" />
                    <button>앱 다운로드</button>
                </div>
            </div>

            <div className="main-second">
                <div className="main-second-content">
                    <div className="main-title">
                        <h1>함께하는 여행</h1>
                        <h1>즐거움이 두 배</h1>
                    </div>

                    <div className="main-sub-title">
                        <p>혼자하는 여행도 두렵지 않아요</p>
                        <h3>위드트립과 함께라면</h3>
                    </div>    
                    

                    <div className="main-advantage">
                        <div className="main-advantage-title">
                            <img src={travelMate} alt="여행 메이트 만들기" />
                            <h3>여행 메이트 만들기</h3>
                        </div>
                        <p>Slate helps you see how many more days you need to work to reach your financial goal</p>
                    </div>

                    <div className="main-advantage">
                        <div className="main-advantage-title">
                            <img src={restaurant} alt="국내여행의 모든 것 확인하기" />
                            <h3>장소, 활동, 음식 등<br/>국내여행의 모든 것</h3>
                        </div>
                        <p>Slate helps you see how many more days you need to work to reach your financial goal</p>
                    </div>

                    <div className="main-advantage">
                        <div className="main-advantage-title">
                            <img src={calendar} alt="일정 만들기" />
                            <h3>쉽고 빠르게 일정 만들기</h3>
                        </div>
                        <p>Slate helps you see how many more days you need to work to reach your financial goal</p>
                    </div>
                </div>
            </div>

            <div className="main-third">
                <div className="main-third-content">
                    <div className="main-title">
                        <h1>즐거운 시도가 필요할 땐</h1>
                    </div>

                    <div className="main-sub-title">
                        <h3>내 손 안의 여행플래너</h3>
                        <h3>위드트립과 함께하세요!</h3>
                    </div>  

                    <button>앱 다운로드</button>
                    
                    <img src={appContents} alt="위드트립 전체적인 이미지 확인하기" />
                </div>
            </div>

            <div className="footer">
                ⓒ 위드트립<br/>
                <a href="https://github.com/GDG-Campus-Group-3">코드 확인하기</a>
            </div>
        </div>
    )
}

export default Main;