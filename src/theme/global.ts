import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './theme';

type GlobalThemeProps = {
  theme: ThemeProps;
};

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root: {
    font-size: 14px;

    --dark-background: #1A1B27;
    --dark-text: #F5F5F7;

    --light-background: #f2f2f2;
    --light-text: #2E0509;

    @media (max-width: 768px) {
        font-size: 12px;
    }
}

body {
    background: ${({ theme }: GlobalThemeProps) => theme.background};
    color: ${({ theme }: GlobalThemeProps) => theme.text}};
    font-family: 'Roboto', sans-serif;
  }
  
  h1,h2,h3,h4,h5 {
    font-weight: 500;
    font-family: 'Roboto Mono', monospace;
  }
`;
