import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";
import logoimg from "../img/blutes.png";
import img1 from "../img/company.jpg";
import img2 from "../img/company2.jpg";
import img3 from "../img/company3.jpg";

function App () {
    const [isToggled, setIsToggled] = useState(false);
    const [userToggled, setUserToggled] = useState(false);
  
    const Header = styled.div`
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: black;
      background-color: white;
      box-shadow: 1px 1px 2px gray;
  
      .logo-img {
        width: 60px;
        height: 60px;
      }
  
      .logo {
        display: flex;
        align-items: center;
        margin: 0 2rem;
        font-size: 2rem;
      }
  
      .header__menulist {
        list-style: none;
        display: flex;
      }
  
      .header__left {
        display: flex;
      }
  
      .header__right {
        list-style: none;
        display: flex;
      }
  
      .header__right div {
        margin: 0 1rem;
      }
  
      li {
        padding: 0 1rem;
        color: black;
      }
  
      .toggle {
        display: none;
        font-size: 1.5rem;
        padding: 1rem 1rem;
      }
  
      .user {
        display: none;
        font-size: 1.5rem;
        padding: 1rem 1rem;
      }
  
      @media screen and (max-width: 1290px) {
        flex-wrap: wrap;
  
        .header__right {
          display: ${(props) => (props.userToggled ? "flex" : "none")};
          flex-direction: column;
          width: 100%;
          background-color: white;
        }
  
        .header__menulist {
          display: ${(props) => (props.isToggled ? "flex" : "none")};
          flex-direction: column;
          width: 100%;
          background-color: white;
        }
  
        .header__menulist li,
        .header__right li {
          margin: 1rem 0;
          padding: 0;
        }
  
        .toggle {
          display: block;
        }
  
        .user {
          display: block;
        }
      }
  
      @media screen and (max-width: 768px) {
        flex-wrap: wrap;
  
        .header__right {
          display: ${(props) => (props.userToggled ? "flex" : "none")};
          flex-direction: column;
          width: 100%;
          background-color: white;
        }
  
        .header__menulist {
          display: ${(props) => (props.isToggled ? "flex" : "none")};
          flex-direction: column;
          width: 100%;
          background-color: white;
        }
  
        .header__menulist li,
        .header__right li {
          margin: 1rem 0;
          padding: 0;
        }
  
        .toggle {
          display: block;
        }
  
        .user {
          display: block;
        }
      }
    `;
  
    const Body = styled.div``;
  
    const SlideshowContainer = styled.div`
      position: relative;
      width: 100%;
      height: auto;
      padding-bottom: 46%; /* 16:9 비율을 유지하기 위한 값 */
      object-fit: cover;
      overflow: hidden;
    `;
  
    const SlideshowImage = styled.img`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    `;
  
    const Slideshow = () => {
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const images = [img1, img2, img3];
      const interval = 3000;
  
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, interval);
  
        return () => {
          clearInterval(intervalId);
        };
      }, [images.length]);
  
      return (
        <SlideshowContainer>
          <SlideshowImage src={images[currentImageIndex]} alt="Slideshow" />
        </SlideshowContainer>
      );
    };
  
    return (
      <Body>
        <Header isToggled={isToggled} userToggled={userToggled}>
          {/* 햄버거 버튼(bar) */}
          <div
            className="toggle"
            onClick={() => {
              setIsToggled(!isToggled);
            }}
          >
            <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
          </div>
  
          {/* Apple 로고 */}
          <div className="logo">
            <img className="logo-img" src={logoimg} alt="logo"></img>
          </div>
  
          {/* User 버튼 */}
          <div
            className="user"
            onClick={() => {
              setUserToggled(!userToggled);
            }}
          >
            <FontAwesomeIcon icon={!userToggled ? faUser : faTimes} />
          </div>
  
          {/* 메뉴 리스트 */}
          <ul className="header__menulist">
            <li>커뮤니티</li>
            <li>약어사전·퀴즈</li>
            <li>채용정보</li>
            <li>회사라이프</li>
            <li>면접질문</li>
          </ul>
  
          {/* User 메뉴 리스트 */}
          <ul className="header__right">
            <li>
              <button>로그인</button>
            </li>
          </ul>
        </Header>
        <Slideshow />
      </Body>
    );
  };
  
  export default App;