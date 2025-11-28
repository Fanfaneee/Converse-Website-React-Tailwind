// components/SizePicker.jsx
import React from "react";

export default function SizePicker({ sizes = ["37", "38", "39", "40", "41", "42"], selectedSize, onSizeChange }) {
    return (
        <div className="flex justify-center gap-3 flex-wrap">
            {sizes.map((size) => (
                <button
                    key={size}
                    type="button"
                    onClick={() => onSizeChange(size)}
                    className={`px-4 py-2 border rounded-md transition-all font-medium ${selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 bg-white text-gray-900 hover:bg-gray-100"
                        }`}
                >
                    {size}
                </button>
            ))}
        </div>
    );
}
