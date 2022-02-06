import styled from "styled-components";

export const IntroStyle = styled.div`
  background-color: white;
  
  .header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2.5rem;
    background-color: #060606;
    color: white;
    font-weight: bold;
    z-index: 1;
    
    &.active {
      background-color: transparent;
      color: rgb(46, 64, 83, 0.90);
      font-weight: bold;
      
      .header-menu {
        border: 1px solid rgb(150, 150, 150, 0.30);
      }
    }
  }
  
  .header-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border: 1px solid white;
  }

  .product-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 99.9vh;
    padding: 2.5rem;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  .detail-info {
    display: flex;
    flex-direction: column;
    align-self: flex-center;
  }

  .detail-author {
    font-size: 12px;
    color: rgb(46, 64, 83, 0.85);
    padding-bottom: 1rem;
  }

  .detail-title {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 17px;
    padding-bottom: 2rem;
  }

  .detail-description {
    font-size: 12px;
    color: rgb(46, 64, 83, 0.85);
    width: 300px;
    padding-bottom: 1.5rem;
  }

  .detail-button--send {
    border: none;
    padding: 10px;
    background-color: rgb(28, 40, 51 , 0.90);
    color: white;
    font-size: 12px;
    cursor: pointer;
  }

  .detail-img {
    width: 260px;
  }

  .navigation {
    display: flex;
    position: fixed;
    bottom: 0px;
    padding-left: 1rem;
    background-color: #F7F7F7;
    width: 100%;
  }
  
  .navigation-ref {
    display: flex;
    flex-direction: column;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    margin-right: 4rem;
    margin-left: 1rem;
    position: relative;
    
  }

  nav .active::before {
    content: '';
    background-color: #333;
    width: 100%;
    height: 3px;
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transition: transform 1000ms;
    transform-origin: left;
  }
    
  nav .active::before {
    transform: scale(1);
  }


  @media (max-width: 650px) {
    .detail-description {
      width: 200px
    }

    .product-detail {
      flex-direction: column;
    }

    .nav active:last-child {
      display: none
    }
  }
 
`;
