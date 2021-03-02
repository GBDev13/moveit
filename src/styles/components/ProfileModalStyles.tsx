import styled from 'styled-components';

export const Overlay = styled.div`
  background: ${({ theme }) => theme.modal};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index:200;
  animation:fade-in .5s;

  & .container > div{
    background: ${({ theme }) => theme.card};
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    text-align: center;
    position: relative;

    &:hover{
      & header img {
        transform:scale(1.2);
      }
    }

    & header {
      font-size: 8.75rem;
      font-weight: 600;
      color: ${({ theme }) => theme.blueOne};
      background: url("/icons/levelup.svg") no-repeat center;
      background-size: contain;
      text-shadow: 0px 10px 16px rgba(89, 101, 224, 0.3);

      & img{
        width:130px;
        height:130px;
        transition:.5s;
      }
    }

    & p {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.text};
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
    background:${({ theme }) => theme.twitter};
    color:${({ theme }) => theme.twitterColor};
    font-weight:500;
    font-size:1.1rem;
    border-radius: 0px 0px 5px 5px;
    border-top:2px solid ${({ theme }) => theme.lineBorder};
    display:flex;
    align-items:center;
    justify-content:center;
    transition:.2s;
    & svg {
      margin-left:.8rem;
      transition:.2s;
      & path {
        fill:${({ theme }) => theme.twitterColor};
      }
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