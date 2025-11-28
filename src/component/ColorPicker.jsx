import React from "react";

export default function ColorPicker({ colors, selectedColor, onColorChange }) {
    return (
        <div className="flex flex-row justify-center gap-2">
            {colors.map((color) => (
                <button
                    key={color.name}
                    type="button"
                    onClick={() => onColorChange(color.name)}
                    aria-label={`Choisir la couleur ${color.name}`}
                    className={`transition-all duration-300 ${selectedColor === color.name ? "scale-110" : "scale-100"
                        }`}
                >
                    <svg
                        className="w-15"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200"
                        width="60"
                        height="60"
                    >
                        <circle
                            cx="100"
                            cy="100"
                            r="60"
                            fill={color.fill}
                            stroke={selectedColor === color.name ? "#E5C1B1" : color.stroke}
                            strokeWidth={selectedColor === color.name ? "12" : "8"}
                        />
                    </svg>
                </button>
            ))}
        </div>
    );
}
