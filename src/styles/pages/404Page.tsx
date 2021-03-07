import styled from 'styled-components';

export const Container = styled.section`
  display:flex;
  flex:1;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  padding:5rem;
  width:100%;
  height:100vh;

  & img{
    max-width:70rem;
  }

  & p{
    color:${({ theme }) => theme.title};
    font-size:1.5rem;
    margin:2rem 0;
    font-weight:600;
    text-align:center;
  }

  & button{
    border:0;
    background:${({ theme }) => theme.blueOne};
    color:#fff;
    padding:1rem;
    border-radius:10px;
  }

  @media(max-width:600px) {
    padding:2rem;

    & img{
      max-width:100%;
    }

    & p{
      font-size:1rem;
    }

  }
`;