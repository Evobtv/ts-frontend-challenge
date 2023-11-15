const theme = {
  colors: {
    error: '#F56565',
    gray: {
      100: '#F7FAFC',
      500: '#A0AEC0',
      700: '#4A5568',
      800: '#2D3748'
    }
  },
  fonts: {
    body: 'Lato',
    heading: 'Lato'
  }
} as const;

export type Theme = typeof theme;
export default theme;
