import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width:100%;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;

  & h2 {
    color:#2E384D;
    font-size:3rem;
    margin-bottom:3rem;
  }

  & .titulos{
    width:100%;
    display:grid;
    grid-template-columns: .8fr 5fr 2fr 2fr;
    align-items:center;
    gap:20px;
    margin-bottom:1.5rem;
    color:#666666;
    text-transform:uppercase;
    font-weight:bold;
    font-size:.9rem;
    opacity:.5;

    & span:nth-of-type(2){
      padding-left:2rem;
    }
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

      & > div {
        background:#fff;
        padding:1rem;
        padding-left:2rem;
        width:100%;
        margin-left:.5rem;
      }

      & > .info {
        background:#fff;
        padding:1rem 0;
        display:flex;
        align-items:center;
        width:100%;
        height:100%;
        & p {
          font-weight: 500;
          font-size:1rem;
          color:#666666;
          & b {
            color:#5965E0;
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
        }

        & strong {
          color:#2E384D;
          font-size: 1.2rem;
          font-weight: 600;
        }

        & p {
          display:flex;
          align-items:center;
          font-size: .9rem;
          margin-top: 0.5rem;
          & img {
            margin-right: 0.5rem;
          }
        }
      }

      & > span{
        background:#fff;
        border-radius:5px;
        color:#666666;
        font-weight:500;
        font-size:1.5rem;
        padding:1rem;
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
      }
    }
  }
`;

