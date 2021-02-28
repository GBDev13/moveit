import React from 'react'
import { func, string } from 'prop-types';
import {TogglerContainer, Container} from '../styles/components/TogglerStyles';

interface ToggleProps {
  theme: string | boolean | (() => void);
  toggleTheme: string | boolean | (() => void);
}

const Toggle = ({theme, toggleTheme }:ToggleProps) => {
    return (
      <Container>
      <div>
        <TogglerContainer>
          <input type="checkbox" onClick={toggleTheme} checked={theme === 'dark' ? true : false} />
          <div>
            <span></span>
          </div>
        </TogglerContainer>
      </div>
      </Container>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
