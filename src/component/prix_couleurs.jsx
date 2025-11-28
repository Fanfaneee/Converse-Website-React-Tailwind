import { useState } from "react";
import Button from "./CustomButton";
import SizePicker from "./SizePicker";
import ColorPicker from "./ColorPicker";

import { ShoppingCartIcon } from '@heroicons/react/24/solid';

export default function Prix_Couleurs({ selectedColor, onColorChange }) {
    const [selectedSize, setSelectedSize] = useState(39);

    const colors = [
        { name: "bordeaux", fill: "#5A0C35", stroke: "gray" },
        { name: "black", fill: "black", stroke: "gray" },
        { name: "orange", fill: "#C37D5B", stroke: "gray" },
    ];

    return (
        <div className="bg-2 outline outline-gray-200 rounded-xl h-fit p-6">
            <h2 className="font-bold text-center text-lg pb-10">95€</h2>

            {/* Reviews */}
            <div className="flex pb-9 justify-center">
                <div className="flex items-center">
                    {[...Array(4)].map((_, i) => (
                        <svg
                            key={i}
                            className="w-4 h-4 text-yellow-300 ms-1"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                    <svg
                        className="w-4 h-4 ms-1 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                </div>
                <p className="text-xs ml-2">115 reviews</p>
            </div>

            {/* Sélection des couleurs */}
            <div className="pb-10">
                <p className="mb-3 text-center">Couleurs</p>
                <ColorPicker
                    colors={colors}
                    selectedColor={selectedColor}
                    onColorChange={onColorChange}
                />

                {/* Sélection des tailles */}
                <div className="mt-6">
                    <p className="mb-2 text-center">Taille</p>
                    <SizePicker
                        sizes={[39, 40, 41, 42, 43, 44]}
                        selectedSize={selectedSize}
                        onSizeChange={setSelectedSize}
                    />
                </div>

                {/* Bouton ajouter au panier */}
                <div className="mt-10 w-[90%] mx-auto">


                    <Button className="w-full" variant="primary" icon={<ShoppingCartIcon className="size-6 mr-2" />}>Ajouter au panier</Button>
                </div>
            </div>
        </div>
    );
}
