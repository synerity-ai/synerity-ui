/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
             colors: {
               primary: {
                 50: '#faf5ff',
                 100: '#f3e8ff',
                 200: '#e9d5ff',
                 300: '#d8b4fe',
                 400: '#c084fc',
                 500: '#a855f7',
                 600: '#9333ea',
                 700: '#7c3aed',
                 800: '#6b21a8',
                 900: '#581c87',
                 950: '#3b0764'
               },
               secondary: {
                 50: '#eff6ff',
                 100: '#dbeafe',
                 200: '#bfdbfe',
                 300: '#93c5fd',
                 400: '#60a5fa',
                 500: '#3b82f6',
                 600: '#2563eb',
                 700: '#1d4ed8',
                 800: '#1e40af',
                 900: '#1e3a8a',
                 950: '#172554'
               },
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b'
        }
      },
      spacing: {
        '18': '4.5rem'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem'
      }
    }
  },
  plugins: []
}
