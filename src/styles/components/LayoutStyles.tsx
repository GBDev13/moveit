import styled from 'styled-components';

interface LayoutProps {
  active:boolean;
}

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
  transition: transform .3s;
  position:absolute;
  z-index:111;

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
        transition:.5s;
      }
      & svg {
        &:hover path{
          stroke:${({ theme }) => theme.blueOne};
        }
      }
      &:last-child svg {
        width:32px;
        fill:${({ theme }) => theme.text};
        transition:.5s;
        opacity:.5;
        &:hover {
          fill:${({ theme }) => theme.blueOne};
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
        &:last-child svg {
          fill:${({ theme }) => theme.blueOne};
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
export const Container = styled.div<LayoutProps>`
  width:100vw;
  height:100vh;
  display:flex;
  overflow-y:scroll;

  & > main {
    margin:0 auto;
    padding-left:${(props) => props.active ? '7rem' : '0'};
    transition: .5s;

    @media(max-width: 850px){
      padding-left:0;
      width:100%;
    }
      
  }
`;

export const Button = styled.button<LayoutProps>`
  position:absolute;
  bottom: 30px;
  left: ${(props) => props.active ? '138px' : '30px'};
  transition:.3s;
  width:40px;
  height:40px;
  background:none;
  border:none;
  z-index:111;

  &:focus{
    outline:none;
  }

  & svg {
    width:40px;
    height:40px;
    & path {
      fill:${(props) => props.active ? props.theme.blueOne : props.theme.text};
      transition:.5s;
    }

    &:hover {
      & path {
        fill:${({ theme }) => theme.blueOne};
      }
    }
  }
`;

export const Overlay = styled.div`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:${({ theme }) => theme.modal};
  z-index:110;
`;