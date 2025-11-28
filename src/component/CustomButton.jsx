import React from "react";

// Variantes sombres professionnelles
const VARIANTS = {
    primary: "ds-button-panier",
    secondary: "ds-button-panier-2",
    danger: "ds-button-panier-danger",
};

// Tailles des boutons
const SIZES = {
    xs: "text-xs px-3 py-1.5",
    sm: "text-sm px-3 py-2",
    md: "text-base px-4 py-2.5",
    lg: "text-base px-5 py-3",
    xl: "text-base px-6 py-3.5",
};

// Composant Button
// Ajout de la prop 'href' dans les arguments
export default function Button({ variant = "primary", size = "md", children, icon, className = "", href }) {

    // Classes de base communes aux deux éléments (button et a)
    const baseClasses = `inline-flex items-center justify-center box-border border border-transparent 
                         shadow-xs font-medium rounded-base focus:outline-none text-center 
                         ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

    if (href) {
        return (
            <a
                href={href}

                className={baseClasses}
            >
                {icon}
                {children}
            </a>
        );
    }

    return (
        <button
            type="button"
            className={baseClasses}
        >
            {icon}
            {children}
        </button>
    );
}