import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${({ theme }) => theme.title};
  transition: all 0.50s linear;

  & > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: ${({ theme }) => theme.card};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    @media(max-width:450px){
      font-size: 6.5rem;
    }
    @media(max-width:370px){
      font-size: 4.5rem;
    }
  }

  & > div span {
    flex: 1;
  }

  & > div span:first-child {
    border-right: 1px solid ${({ theme }) => theme.border};
  }

  & > div span:last-child {
    border-left: 1px solid ${({ theme }) => theme.border};
  }

  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
    @media(max-width:370px){
      font-size: 3rem;
    }
  }

`;