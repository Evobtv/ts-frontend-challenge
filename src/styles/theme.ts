const theme = {
  colors: {
    error: {
      300: '#ef9a9a',
      500: '#F56565'
    },
    gray: {
      100: '#F7FAFC',
      500: '#A0AEC0',
      700: '#4A5568',
      800: '#2D3748',
      opacity: '#1a202ce6'
    }
  },
  fonts: {
    body: 'Lato',
    heading: 'Lato'
  }
} as const;

export type Theme = typeof theme;
export default theme;
