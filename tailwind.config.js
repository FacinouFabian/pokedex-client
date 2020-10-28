
const plugin = require('tailwindcss/plugin')

module.exports = {
    purge: [],
    theme: {
        extend: {
            zIndex: {
                '100': 100
            },
            gridTemplateRows: {
                '8': 'repeat(8, minmax(0, 1fr))',
            }
        },
    },
    variants: {
        backgroundOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
    plugins: [
        require('@tailwindcss/ui'),
        plugin(function ({ addUtilities, variants }) {
            const newUtilities = {
            }

            addUtilities(newUtilities, variants('customPlugin'))
        }),
    ],
}