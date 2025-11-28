export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/**/*.css",
    ],
    theme: {
        extend: {
            colors: {

                // Couleurs "pages"

                secondary: 'var(--secondary)',
                primary: 'var(--primary)',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                background2: 'var(--background2)',
                pinker: 'var(--pinker)',

                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                // Bordures et anneau (ring)
                border: "hsl(var(--border))",
                ring: "hsl(var(--ring))",
                // Palette design system
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                // Sémantique (optionnel si tu veux les utilitaires `text-success`, etc.)
                success: "hsl(var(--color-success))",
                warning: "hsl(var(--color-warning))",
                danger: "hsl(var(--color-danger))",
            },
            // Rayons pour tes utilitaires .rounded-ds etc. (si tu veux les utiliser
            // directement en utilitaires Tailwind : rounded-ds, rounded-ds-lg)
            borderRadius: {
                ds: "var(--radius)",
                "ds-lg": "var(--radius-lg)",
            },
            // Ombres si tu veux des utilitaires `shadow-ds`
            boxShadow: {
                ds: "var(--shadow)",
                "ds-sm": "var(--shadow-sm)",
            },
            fontFamily: {
                sans: ["var(--font-sans)"],
                mono: ["var(--font-mono)"],
            },
        },
    },
    plugins: [],
};