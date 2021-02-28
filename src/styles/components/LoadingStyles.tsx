import styled from 'styled-components';

export const LoadingContainer = styled.div`
  background:${({ theme }) => theme.loading};
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:500;
  animation: loadingScreen .3s;
  
  & > div {
    margin: 100px auto;
    width: 40px;
    height: 40px;
    position: relative;

    & .cube1, & .cube2 {
      background-color:  ${({ theme }) => theme.text};
      width: 15px;
      height: 15px;
      position: absolute;
      top: 0;
      left: 0;
      
      -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
      animation: sk-cubemove 1.8s infinite ease-in-out;
    }

    & .cube2 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }
  }
`;