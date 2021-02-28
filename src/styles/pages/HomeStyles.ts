import styled from 'styled-components';

const HomeBackground = styled.main`
  display:flex;
  flex:1;
  height:100vh;
  width:100%;
  background:#5965E0 url('/assets/background.svg') no-repeat center left;
  background-size:770px;
`;

const HomeContainer = styled.div`
  display:flex;
  flex:1;
  align-items:center;
  justify-content:flex-end;
  margin:25rem;

  & > div > img{
    margin-bottom:7rem
  }

  & h3 {
    color:#fff;
    font-size:2rem;
  }

  & p {
    display:flex;
    color:#B2B9FF;
    font-size:1.2rem;
    max-width:350px;
    margin: 2.3rem 0;

    & img {
      margin-right:2rem;
    }
  }

  & button {
    height:5rem;
    width:100%;
    border:none;
    background: linear-gradient(90deg, #4953B8 0%, rgba(73, 83, 184, 0.2) 100%);
    border-radius:5px;
    color:#B2B9FF;
    transition:.2s;

    &:hover {
      color:#fff;
    }
  }
`;

export { HomeBackground, HomeContainer }