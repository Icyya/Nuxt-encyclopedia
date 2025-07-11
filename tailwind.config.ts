import type {Config} from 'tailwindcss'

const MyTheme = {
    colors: {
        green: {
            DEFAULT: '#3BA676',
            '50': '#B4E4CF',
            '100': '#A5DFC5',
            '200': '#87D4B2',
            '300': '#69CA9E',
            '400': '#4BBF8B',
            '500': '#3BA676',
            '600': '#2C7D59',
            '700': '#1E533B',
            '800': '#0F2A1E',
            '900': '#000000',
        },
        blue: {
            DEFAULT: '#172B4D',
            '50': '#B8E2FF',
            '100': '#A3D9FF',
            '200': '#7AC8FF',
            '300': '#52B8FF',
            '400': '#29A7FF',
            '500': '#0096FF',
            '600': '#0075C7',
            '700': '#00548F',
            '800': '#003357',
            '900': '#00121F',
        },
        red: {
            DEFAULT: '#EC242C',
            '50': '#FFFFFF',
            '100': '#FFFFFF',
            '200': '#FFDEDE',
            '300': '#FFB6B6',
            '400': '#FF8D8D',
            '500': '#EC242C',
            '600': '#FF2C2C',
            '700': '#F30000',
            '800': '#BB0000',
            '900': '#830000',
        },
    },
}

export default <Partial<Config>>{
    content: [
        './admin.{js,ts,vue}',
        './Admin.{js,ts,vue}',
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                default: MyTheme.colors.blue,
                primary: MyTheme.colors.green,
                green: MyTheme.colors.green,
                blue: MyTheme.colors.blue,
                red: MyTheme.colors.red,
            },
            fontFamily: {
                suisse: ['Suisse']
            }
        }
    },
    plugins: [
        function ({addComponents}: { addComponents: any }) {
            addComponents({
                '.btn-primary': {
                    '@apply bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition': '',
                },
            })
        }
    ]
}
