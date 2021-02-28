import styled from 'styled-components';

export const Button = styled.button`

  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background:  ${({ theme }) => theme.blueOne};
  color: #fff;

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background: var(--blue-dark);
  }

  &.countdownActive{
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
    position:relative;
    border-bottom:5px solid #DCDDE0;

    
    & svg {
      & path{
        fill:${({ theme }) => theme.text};
      }
    }

    &:not(:disabled):hover {
      background: var(--red);
      color: var(--white);
      border-color:var(--red);
      &:before{
        background:var(--red);
      }
    }

    &:before{
      content:'';
      width:100%;
      transform: scaleX(0);
      display:block;
      margin:0;
      position:absolute;
      height:5px;
      background:var(--green);
      bottom:-5px;
      left:0;
      border-radius:0 0 5px 5px;
      animation: roundtime calc(6 * 1s) linear forwards;
      transform-origin: left center;
    }
  }
  
  &:disabled {
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
    cursor: not-allowed;
    border-bottom:5px solid var(--green);
    display:flex;
    align-items:center;
    & img{
      margin-left:.5rem;
    }
  }
  
  & svg {
    margin-left:.8rem;
  }

`;
 