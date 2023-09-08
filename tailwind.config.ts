import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
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
            'greyBackground': '#d4d4d4',
            'strongOrangeBackground': '#fed7aa'
        },
        fontFamily: {
            'roboto': ['Roboto', 'sans-serif'],
            'montserrat': ['Montserrat', 'sans-serif'],
            'open-sans': ['Open Sans', 'sans-serif'],
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: '0' },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: '0' },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require( "tailwindcss-animate" )],
}
export default config
