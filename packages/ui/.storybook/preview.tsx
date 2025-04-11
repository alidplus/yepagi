import React from 'react'
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-styling' 
import "../src/global.css";
import "./styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

const globalDecorator = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme
  console.log(theme)
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        padding: '12px',
        overflow: 'auto',
        backgroundColor:
          theme == null || theme.length === 0 || theme === 'light' ? '#ffffff' : '#222233',
      }}
    >
      <StoryFn />
    </div>
  )
}

export const decorators = [
  globalDecorator,
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
]
