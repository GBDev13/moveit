import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width:100%;
  min-width: 75vw;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;

  @media(max-width:850px) {
    min-width: 100%;
    padding: 1rem;
  }

  & h2 {
    color:${({ theme }) => theme.title};
    font-size:3rem;
    margin-bottom:3rem;
  }

  & .titulos{
    width:100%;
    display:grid;
    grid-template-columns: .8fr 5fr 2fr 2fr;
    align-items:center;
    gap:10px;
    margin-bottom:1.5rem;
    color:${({ theme }) => theme.text};
    text-transform:uppercase;
    font-weight:bold;
    font-size:.9rem;
    opacity:.5;

    @media(max-width:640px) {
      grid-template-columns: .8fr 5fr 2fr 2fr;
    }

    & span:nth-of-type(2){
      padding-left:2rem;
    }
  }

  & .titulos.mobile{
      grid-template-columns: .8fr 3fr 2fr;
  }

  & .grid ul{
    width:100%;
    display:flex;
    flex-direction:column;

    & li{
      display:grid;
      grid-template-columns: .8fr 5fr 2fr 2fr;
      justify-content:space-between;
      align-items:center;
      width:100%;
      margin-bottom: .5rem;
      padding-left:10px;

      
      @media(max-width:640px) {
        grid-template-columns: .8fr 4fr 2fr 2fr;
      }

      & > div:nth-of-type(1) {
        background:${({ theme }) => theme.card};
        padding:1rem;
        padding-left:2rem;
        width:100%;
        @media(max-width:640px){
          padding:.4rem;
        }
      }

      & > .info {
        background:${({ theme }) => theme.card};
        padding:1rem 0;
        display:flex;
        align-items:center;
        width:100%;
        height:100%;
        & p {
          font-weight: 500;
          font-size:1rem;
          color:${({ theme }) => theme.text};
          & b {
            color:${({ theme }) => theme.blueOne};
          }
        }
      }

      & .info.double{
        flex-direction:column;
        grid-column:3/6;
        justify-content:center;
      }

      @media(max-width:640px) {
          & > .info {
            padding:.4rem 0;
            & p {
              font-size:.8rem;
            }
        }
      }

      & > .info:last-of-type{
        border-radius:0px 5px 5px 0;
      }

      & .profile {
        display:flex;
        align-items:center;

        & > img {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          margin-right: 1rem;
          @media(max-width:640px) {
            width:2rem;
            height:2rem;
            margin-right: .5rem;
          }
        }

        & strong {
          color:${({ theme }) => theme.title};
          font-size: 1.2rem;
          font-weight: 600;
          @media(max-width:640px) {
            font-size:.9rem;
          }
        }

        & p {
          display:flex;
          align-items:center;
          font-size: .9rem;
          margin-top: 0.5rem;
          & img {
            margin-right: 0.5rem;
          }
          @media(max-width:640px) {
            font-size:.7rem;
            & img {
              width:.5rem;
            }
          }
        }
      }

      & > span{
        background:${({ theme }) => theme.card};
        border-radius:5px;
        color:${({ theme }) => theme.text};
        font-weight:500;
        font-size:1.5rem;
        padding:1rem;
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-left: -10px;
        @media(max-width:640px) {
          font-size:1rem;
          padding:.4rem;
        }
      }
    }
  }
`;

