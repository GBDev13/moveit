import styled from 'styled-components';

export const ChallengeBoxContainer = styled.div`
  height: 100%;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;



  & .challengeNotActive {
    display: flex;
    flex-direction: column;
    align-items: center;

    & strong {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.4;
    }

    & p {
      display: flex;
      align-items: center;
      line-height: 1.4;
      max-width: 70%;
      text-align:left;
      margin-top: 3rem;
      font-size:1rem;

      & img {
        margin-right: 1rem;
        width:35px;
      }
    }
  }

& .challengeActive{
  height: 100%;
  display: flex;
  flex-direction: column;

  & > div {
    height: 100%;
    display: flex;
    padding: 1.5rem 2rem;
    flex-direction: column;
  }

  & header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
  }

  & main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & strong {
      font-weight: 600;
      font-size: 2rem;
      color: var(--title);
      margin: 1.5rem 0 1rem;
    }

    & main p {
      line-height: 1.5;
    }
  }

  & footer {
    display: grid;
    grid-template-columns: 1fr 1fr;

    & button:nth-of-type(1){
      border-radius: 0px 0px 0px 5px;
    }
    & button:nth-of-type(2){
    border-radius: 0px 0px 5px 0px;
    }
    & button {
      height: 4rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
      border-radius: 5px;

      color: var(--white);

      font-size: 1.2rem;
      font-weight: 500;

      transition: filter 0.2s;
      transition: background-color 0.2s;
      border-right:1px solid #DCDDE0;
      border-top:1px solid #DCDDE0;

      &.challengeFailedButton {
        background: #FFF5F5;
        color:var(--red);
        &:hover{
          background:var(--red);
          color:#fff;
        }
      }

      &.challengeSucceededButton {
        background: #F7FFF5;
        color:var(--green);
        &:hover{
          background:var(--green);
          color:#fff;
        }
      }

      &:hover {
        background:#4953B8;
      }


    }
  }
}
`;