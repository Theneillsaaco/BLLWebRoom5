/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}', './pages/**/*.{astro,html,js,jsx,ts,tsx}', './pages/index.astro'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#FFF8E1',
                    100: '#FFECB3',
                    200: '#FFE082',
                    300: '#FFD54F',
                    400: '#FFCA28',
                    500: '#F4B400', // Amarillo cálido
                    600: '#E0A000',
                    700: '#CC8C00',
                    800: '#B87900',
                    900: '#A46500',
                },
                secondary: {
                    50: '#E0F2F1',
                    100: '#B2DFDB',
                    200: '#80CBC4',
                    300: '#4DB6AC',
                    400: '#26A69A',
                    500: '#00695C', // Verde azulado
                    600: '#00594F',
                    700: '#004940',
                    800: '#003A32',
                    900: '#002A24',
                },
                neutral: {
                    50: '#FAFAFA',
                    100: '#F5F5F5',
                    200: '#EEEEEE',
                    300: '#E0E0E0',
                    400: '#BDBDBD',
                    500: '#9E9E9E',
                    600: '#757575',
                    700: '#616161',
                    800: '#424242',
                    900: '#1B1B1B', // Fondo oscuro
                }
            }
        }
    },
    plugins: []
}