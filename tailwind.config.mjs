/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}', './pages/**/*.{astro,html,js,jsx,ts,tsx}', './pages/index.astro'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#caf0f8',
                    100: '#ade8f4',
                    200: '#90e0ef',
                    300: '#48cae4',
                    400: '#00b4d8',
                    500: '#0096c7', // principal
                    600: '#0077b6',
                    700: '#023e8a',
                    800: '#03045e',
                    900: '#3a0ca3',
                },
                secondary: {
                    50: '#fdf2f8',
                    100: '#fce7f3',
                    200: '#fbcfe8',
                    300: '#f9a8d4',
                    400: '#f472b6',
                    500: '#ec4899',
                    600: '#db2777',
                    700: '#be185d',
                    800: '#9d174d',
                    900: '#831843',
                },
                dark: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
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
            },
        }
    },
    plugins: []
}