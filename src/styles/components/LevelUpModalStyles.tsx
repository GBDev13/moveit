import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  & .container > div{
    background: var(--white);
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    text-align: center;
    position: relative;

    & header {
      font-size: 8.75rem;
      font-weight: 600;
      color: var(--blue);
      background: url("/icons/levelup.svg") no-repeat center;
      background-size: contain;
      text-shadow: 0px 10px 16px rgba(89, 101, 224, 0.3);
    }

    & strong {
      font-size: 2.25rem;
      color: var(--title);
    }

    & p {
      font-size: 1.25rem;
      color: var(--text);
      margin-top: 0.25rem;
    }

    & > button {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      background: transparent;
      border: 0;
      font-size: 0px;
    }
  }

  & .container > footer button {
    width:100%;
    height:5rem;
    border:none;
    background:#F5FCFF;
    color:#2AA9E0;
    font-weight:500;
    font-size:1.1rem;
    border-radius: 0px 0px 5px 5px;
    border-top:2px solid #DCDDE0;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:.2s;
    & svg {
      margin-left:.8rem;
      transition:.2s;
    }

    &:hover{
      background:#2AA9E0;
      color:#fff;
    & svg path{
      fill:#fff;
    }
    }
  }
`;