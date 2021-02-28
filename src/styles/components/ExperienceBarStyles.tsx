import styled from 'styled-components';

export const Container = styled.header`

  display: flex;
  align-items: center;

  @media(max-width:850px){
    margin-bottom:7rem;
  }

  & span {
    font-size: 1rem;
    display:flex;
    flex-direction:column;
    align-items:center;

    & b {
      color:${({ theme }) => theme.blueOne};
    }
  }

  & > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
  }

  & > div > div {
    height: 4px;
    border-radius: 4px;
    background: var(--green);
  }

  & span.currentExperience {
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
    width:150px;
  }

`;