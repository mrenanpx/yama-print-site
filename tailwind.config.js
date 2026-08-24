/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yama-blue-dark': '#00377B', // Azul escuro do título
        'yama-red': '#E60000',      // Vermelho dos botões
        'yama-yellow': '#FFD700',   // Amarelo dos selos
        'yama-green-wa': '#25D366',
        'yama-pink': '#ff00f2', // Verde do WhatsApp
      },
    },
  },
  plugins: [],
}