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
                    dark: '#4a0000',
                    red: '#8b0000',
                    gold: '#d4af37',
                    black: '#0a0a0a',
                    goldlight: '#f5e2a1',
                }
            },
            fontFamily: {
                bebas: ['"Bebas Neue"', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #d4af37, 0 0 10px #d4af37' },
                    '100%': { boxShadow: '0 0 20px #d4af37, 0 0 40px #d4af37' },
                }
            }
        },
    },
    plugins: [],
}
