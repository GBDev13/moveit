import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width:100%;
  max-width: 992px;
  min-width: 992px;
  margin: 0 auto;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;

  @media(max-width:1100px){
    max-width: 100%;
    min-width: 100%;
  }

  & header{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:3rem;

    & img{
      width:180px;
      height:180px;
      border-radius:50%;
      margin-bottom:1.5rem;
      border:3px solid ${({ theme }) => theme.title};
    }

    & h2 {
      color:${({ theme }) => theme.title};
      font-size:2.5rem;
      @media(max-width:880px){
      font-size:1.8rem;
      }
    }
  }

  & .infos{
    background:${({ theme }) => theme.card};
    padding:2rem;
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    -webkit-box-shadow: 8px 9px 12px -5px rgba(0,0,0,0.2); 
    box-shadow: 8px 9px 12px -5px rgba(0,0,0,0.2);
    margin-bottom:4rem; 

    & ul{
      display:grid;
      grid-template-columns:1fr 1fr 1fr;
      grid-gap:4rem;
      align-items:center;
      justify-items:center;

      @media(max-width:880px){
        grid-template-columns:1fr;
      }

      & li{
        display:flex;
        flex-direction:column;
        align-items:center;
        font-size:1.3rem;

        & b {
          font-size:2rem;
          color:${({ theme }) => theme.title};
          margin-top:.5rem;
        }
      }
    }
  }

  & .grid{
    & h3{
      font-size:1.5rem;
      color:${({ theme }) => theme.title};
      & span{
        font-weight:300;
        font-size:1.2rem;
      }
    }

    ul{
      margin-top:2rem;
      margin-bottom:5rem;
      display:grid;
      grid-template-columns:repeat(5, 1fr);
      background:${({ theme }) => theme.card};
      -webkit-box-shadow: 8px 9px 12px -5px rgba(0,0,0,0.2); 
      box-shadow: 8px 9px 12px -5px rgba(0,0,0,0.2);
      padding:2rem;
      border-radius:5px;
      grid-gap:1rem;

      @media(max-width:880px){
       grid-template-columns:repeat(3, 1fr);
      }
      @media(max-width:520px){
       grid-template-columns:1fr 1fr;
      }
      @media(max-width:360px){
       grid-template-columns:1fr;
      }

      & li{
        display:flex;
        flex:1;
        align-items:center;
        justify-content:center;
        background:${({ theme }) => theme.cardInside};
        padding:1.5rem;
        border-radius:1.2rem;

        & img, & span {
          width:65px;
          height:65px;
          transition: .5s;  
        }

        & span{
          display:flex;
          align-items:center;
          justify-content:center;

          & p {
            color:${({ theme }) => theme.text};
            font-weight:500;
            font-size:2rem;
          }
        }
      }

      & li.active {
        background: ${({ theme }) => theme.cardActive};
        cursor: pointer;
        

        &:hover{
          & img {
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }

  & .alert {
    width:100%;
    padding: 1rem .5rem;
    background:${({ theme }) => theme.blueOne};
    color:#fff;
    border-radius:10px;
    text-align:center;
    margin:2rem 0;
  }

`;