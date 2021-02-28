import styled from 'styled-components';

export const ContainerAside = styled.aside`
  width:100%;
  max-width:7rem;
  background:${({ theme }) => theme.card};
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:column;
  height:100vh;
  padding:1.5rem;
  width:100%;
  max-width:7rem;
  transition: all 0.50s linear;

  & > svg path{
    fill:${({ theme }) => theme.blueOne};
  }

  & nav ul{
    display:flex;
    flex-direction:column;
    & li {
      margin: 1.3rem 0;
      position:relative;
      display:flex;
      align-items:center;
      & svg path{
        stroke:${({ theme }) => theme.text};
        transition:1s;
      }
      & svg {
        &:hover path{
          stroke:${({ theme }) => theme.blueOne};
        }
      }
      

      &.active {
        &:before{
          position:absolute;
          width:30px;
          border-radius:10px;
          height:calc(100% + 1.5rem);
          content:'';
          display:inline-block;
          background:${({ theme }) => theme.blueOne};
          left:-64px;
        }
        & svg path{
          stroke:${({ theme }) => theme.blueOne};
        }
        & svg g {
          opacity:1;
        }
      }
    }
  }

  & button{
    width:100%;
    padding:.5em;
    border:0;
    color:#fff;
    border-radius:5px;
    background:${({ theme }) => theme.blueOne};

  }

`;
export const Container = styled.main`
  width:100vw;
  height:100vh;
  display:flex;
`;