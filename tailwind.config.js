/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                granada: {
                    dark: '#111111',
                    red: '#d41111',
                    silver: '#e5e7eb',
                    black: '#000000',
                    white: '#ffffff',
                    gold: '#D4AF37',
                }
            },
            fontFamily: {
                bebas: ['"Bebas Neue"', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #d41111, 0 0 10px #d41111' },
                    '100%': { boxShadow: '0 0 20px #d41111, 0 0 40px #d41111' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.2), #111111)',
            }
        },
    },
    plugins: [],
}
