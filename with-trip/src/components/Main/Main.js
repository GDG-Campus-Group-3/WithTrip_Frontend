import React from 'react';
import Slider from 'react-slick';
import Advantage from './Advantage/Advantage';
import './Main.css';
import './Main-Media.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import appMain from '../../static/appMainImage.png';
import travelMate from '../../static/travel-mate.png';
import restaurant from '../../static/restaurant.png';
import calendar from '../../static/calendar.png';

import loginApp from '../../static/loginApp.png';
import homeApp from '../../static/homeApp.png';
import writeApp from '../../static/writeApp.png';
import attendApp from '../../static/attendApp.png';
import detailApp from '../../static/detailApp.png';

const Main = () => {
    var settings = {
        arrows : false,
        infinite: true,
        autoplay : true,
        autoplaySpeed : 1500,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="main-wrapper">
            <div className="main-first">
                <div className="main-first-content mobile">
                    <div className="main-logo">
                        <p>withTrip</p>
                    </div>

                    <div className="main-title">
                        <h1>함께하는 여행,</h1>
                        <h1>위드트립</h1>
                    </div>
                    
                    <div className="main-sub-title">
                        <p>설레는 장소에서 함께 할 여행 메이트를 찾아보세요!</p>
                    </div>                    

                    <img src={appMain} alt="위드트립 앱 메인화면" /><br/>
                    <button>앱 다운로드</button>
                </div>

                <div className="main-first-content pc">
                    <div className="main-logo">
                        <p>withTrip</p>
                    </div>

                    <div className="main-first-wrapper">
                        <img src={appMain} alt="위드트립 앱 메인화면" />
                        
                        <div className="main-first-right">
                            <div className="main-title">
                                <h1>함께하는 여행,</h1>
                                <h1>위드트립</h1>
                            </div>
                            
                            <div className="main-sub-title">
                                <p>설레는 장소에서 함께 할 여행 메이트를 찾아보세요!</p>
                            </div> 

                            <button>앱 다운로드</button>
                        </div>
                    </div>
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
                    
                    <div className="main-advantage-wrapper">
                        <Advantage img={travelMate} alt="여행 메이트 만들기" title="여행 메이트 만들기">
                            혼자하는 여행도 위드트립과 함께라면 언제든 여행 메이트를 만날 수 있어요
                        </Advantage>

                        <Advantage img={restaurant} alt="국내여행의 모든 것 확인하기" title={[<>장소, 활동, 음식 등 <br/>국내여행의 모든 것</>]}>
                            위치정보, 레저활동, 맛집 등 국내 여행의 모든 정보를 검색할 수 있어요
                        </Advantage>

                        <Advantage img={calendar} alt="일정 만들기" title="쉽고 빠르게 일정 만들기">
                            내가 원하는 여행 일정을 만들거나 흥미로운 일정에 참여하거나 손쉽게 여행 계획을 세울 수 있어요
                        </Advantage>
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
                    
                    <div className="main-image-wrapper">
                        <Slider {...settings}>
                            <div>
                                <img src={loginApp} alt="로그인 앱 화면" />
                            </div>
                            <div>
                                <img src={homeApp} alt="지도 앱 화면" />
                            </div>
                            <div>
                                <img src={writeApp} alt="내가 쓴 트립 앱 화면" />
                            </div>
                            <div>
                                <img src={attendApp} alt="참여 현황 앱 화면" />
                            </div>
                            <div>
                                <img src={detailApp} alt="게시물 확인 앱 화면" />
                            </div>
                        </Slider>
                    </div>
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