import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;

  @media(max-width:850px){
    max-width: 1200px;
    margin-top:1rem;
  }

  
  @media(max-width:370px){
    padding: 1rem;
  }

  & section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;

    @media(max-width:850px){
      grid-template-columns: 1fr;

      & > div:nth-of-type(2){
        margin-bottom:5rem;
      }
    }
  }

`;

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
  margin:17rem;

  @media(max-width:1300px){
    margin:12rem;
  }
  @media(max-width:1300px){
    margin:0;
    justify-content:center;
    & h3{
      text-align:center;
    }
  }

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

  
  @media(max-width:400px){
    & > div{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
    }
    & > div > img{
      width:16rem;
      margin:0 auto;
      margin-bottom:5rem
    }
    & p {
      max-width:260px;
    }
  }
`;

export { Container, HomeBackground, HomeContainer }