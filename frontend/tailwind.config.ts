export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        Overpass: ["Overpass", "sans-serif"],
      },
      animation: {
        'move-bg-clockwise': 'moveBgClockwise 10s linear infinite',
      },
      boxShadow: {
        'inset-sm': 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
        'inset': 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
        'inset-md': 'inset 0 4px 8px rgba(0, 0, 0, 0.1)',
        'inset-lg': 'inset 0 8px 16px rgba(0, 0, 0, 0.1)',
        'inset-xl': 'inset 0 12px 24px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'linear-blue-gradient': 'linear-gradient(90deg, rgba(2,0,36,1) 10%, rgba(9,9,121,1) 38%, rgba(0,212,255,1) 100%)',
        'linear-red-gradient': 'linear-gradient(90deg, rgba(131,58,180,1) 22%, rgba(253,29,29,1) 58%, rgba(252,176,69,1) 100%)',
      },
      colors: {
        'indigo': {
          '50': '#eef2ff',
          '100': '#e0e7ff',
          '200': '#c7d2fe',
          '300': '#a5b4fc',
          '400': '#818cf8',
          '500': '#6366f1',
          '600': '#4f46e5',
          '700': '#4338ca',
          '800': '#3730a3',
          '900': '#312e81',
          '950': '#1e1b4b',
        },
      },
    },
    keyframes: {
      moveBgClockwise: {
        '0%': { backgroundPosition: '0% 0%' },
        '25%': { backgroundPosition: '100% 0%' },
        '50%': { backgroundPosition: '100% 100%' },
        '75%': { backgroundPosition: '0% 100%' },
        '100%': { backgroundPosition: '0% 0%' },
      },
    },
    screens: {
      'xs': '360px',    // Extra Small Devices
      'sm': '640px',    // Small Devices (Phones)
      'md': '768px',    // Medium Devices (Tablets)
      'lg': '1024px',   // Large Devices (Laptops)
      'xl': '1280px',   // Extra Large (Desktops)
      '2xl': '1536px',  // Ultra-wide Screens
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.w-90per': {
          width: '90%',
        },
      }
  
      addUtilities(newUtilities, ['responsive'])
    }
  ]
}
