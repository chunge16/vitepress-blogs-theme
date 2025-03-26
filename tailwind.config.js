const { addDynamicIconSelectors } = require('@iconify/tailwind');
export const tailwindContent = [
    './src/theme/**/*.{js,ts,vue}',
    './docs/**/*.md',
    './docs/.vitepress/**/*.{js,ts,vue}',
]

module.exports = {
    content: [...tailwindContent],
    darkMode: 'class',
    plugins: [addDynamicIconSelectors({ prefix: 'i' })],
}
