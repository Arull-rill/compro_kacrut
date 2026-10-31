/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        coal: '#121212',
        panel: '#171717',
        line: '#2B2B2B',
        ivory: '#F4F1E8',
        mute: '#9A9A94',
        gold: { DEFAULT: '#C8A24A', light: '#E6CB84', dark: '#8E6F2B' },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        marqueeReverse: { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0)' } },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(6px, -5px)' },
        },
        pulseDot: {
          '0%': { boxShadow: '0 0 0 0 rgba(200,162,74,.6)' },
          '70%': { boxShadow: '0 0 0 10px rgba(200,162,74,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(200,162,74,0)' },
        },
        scrollLine: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-reverse': 'marqueeReverse 46s linear infinite',
        'spin-slow': 'spinSlow 26s linear infinite',
        drift: 'drift 7s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-out infinite',
        'scroll-line': 'scrollLine 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
