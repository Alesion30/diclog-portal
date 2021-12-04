import { muiTheme } from 'storybook-addon-material-ui5'
import '../src/styles/global.css'

export const decorators = [muiTheme()]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
