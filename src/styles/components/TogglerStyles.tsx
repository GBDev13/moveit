import styled from "styled-components"

const TogglerContainer = styled.label`
  &::before{
    background:${({ theme }) => theme.input};
    -webkit-box-shadow: 8px 9px 12px -5px rgba(0,0,0,0.2); 
    box-shadow: 8px 9px 12px -5px rgba(0,0,0,0.2); 
  }

  & input + div span{
    color:${({ theme }) => theme.text};
  }

  & {
  cursor: pointer;
  position: absolute;
  bottom:30px;
  right:30px;

  &:before {
      content: '';
      width: 60px;
      height: 32px;
      border-radius: 16px;
      position: absolute;
      left: 0;
      top: 0;
      box-shadow: 0 1px 3px #{rgba(#00093D, .08)};
  }
  input {
      display: none;
      & + div {
          position: relative;
          &:before,
          &:after {
              --s: 1;
              content: '';
              position: absolute;
              height: 4px;
              top: 14px;
              width: 24px;
              background: #f0f0f0;
              transform: scaleX(var(--s));
              transition: transform .3s ease;
          }
          &:before {
              --s: 0;
              left: 4px;
              transform-origin: 0 50%;
              border-radius: 2px 0 0 2px;
          }
          &:after {
              left: 32px;
              transform-origin: 100% 50%;
              border-radius: 0 2px 2px 0;
          }
          span {
              padding-left: 60px;
              line-height: 28px;
              &:before {
                  --x: 0;
                  --b: #ececec;
                  --s: 4px;
                  content: '';
                  position: absolute;
                  left: 4px;
                  top: 4px;
                  width: 24px;
                  height: 24px;
                  border-radius: 50%;
                  box-shadow: inset 0 0 0 var(--s) var(--b); 
                  transform: translateX(var(--x));
                  transition: box-shadow .3s ease, transform .3s ease;
              }
              &:not(:empty) {
                  padding-left: 68px;
              }
          }
      }
      &:checked {
          & + div {
              &:before {
                  --s: 1;
              }
              &:after {
                  --s: 0;
              }
              span {
                  &:before {
                      --x: 28px;
                      --s: 12px;
                      --b: ${({ theme }) => theme.blueOne};
                  }
              }
          }
      }
  }
}

`;

const Container = styled.div`
  display:flex;
  align-items:center;
  & > svg{
    margin: 0 10px;
  }
`;

export {TogglerContainer, Container};