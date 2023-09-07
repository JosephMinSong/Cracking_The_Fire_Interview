import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            'orange': '#fb923c',
            'red': '#ef4444',
            'yellow': '#fef08a',
            'blue': '#3b82f6',
            'cyan': '#67e8f9',
            'green': '#34d399',
            'gray': '#9ca3af',
            'white': '#ffffff',
            'redBackground': '#fecaca',
            'greyBackground': '#d4d4d4'
        },
        fontFamily: {
            'roboto': ['Roboto', 'sans-serif'],
            'montserrat': ['Montserrat', 'sans-serif'],
            'open-sans': ['Open Sans', 'sans-serif'],
        }
    },
    plugins: [],
}
export default config
