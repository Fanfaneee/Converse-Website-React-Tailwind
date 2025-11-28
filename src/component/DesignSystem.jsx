// pages/DesignSystem.jsx
import React, { useState } from "react";

import SizePicker from "../component/SizePicker"; // composant de sélection de taille
import Button from "./CustomButton";
import ColorPicker from "../component/ColorPicker"; // composant de sélection de couleur
import ProductCard from "./ProductCard.jsx";
import CategorieCard from "./CategorieCard.jsx";


import { ShoppingCartIcon } from '@heroicons/react/24/solid';

export default function DesignSystem() {
    const [selectedColor, setSelectedColor] = useState("Bordeaux");
    const [selectedSize, setSelectedSize] = useState("M");


    const colors = [
        { name: "Primary", var: "var(--color-primary)" },
        { name: "Secondary", var: "var(--color-secondary)" },
        { name: "Background", var: "var(--color-bg)" },
        { name: "Background 2", var: "var(--color-bg-2)" },

    ];
    const Colorcolors = [
        { name: "Bordeaux", fill: "#5A0C35", stroke: "gray" },
        { name: "Black", fill: "black", stroke: "gray" },
        { name: "Orange", fill: "#C37D5B", stroke: "gray" },
    ];


    const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

    return (
        <div className="max-w-7xl mt-8 mx-auto py-16 px-6 space-y-16">
            {/* ===== TOKENS ===== */}
            <section>
                <h2 className="text-2xl font-bold mb-6">Design Tokens</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {colors.map((color) => (
                        <div key={color.name} className="flex flex-col items-center">
                            <div
                                className="w-24 h-24 rounded-md shadow-md mb-2 border border-gray-200"
                                style={{ backgroundColor: color.var }}
                            />
                            <span className="text-sm font-medium">{color.name}</span>
                            <span className="text-xs text-gray-500">{color.var}</span>
                        </div>
                    ))}
                </div>

                {/* Typographie */}
                <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-4">Typographie</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="text-xl font-bold">H1 - Font: var(--font-sans)</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">H2 - Font: var(--font-sans)</p>
                        </div>
                        <div>
                            <p className="text-base">Paragraph - Font: var(--font-sans)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BUTTONS ===== */}
            <section>
                <h2 className="text-2xl font-bold mb-6">Buttons</h2>
                <div className="flex flex-wrap gap-6">
                    <Button variant="primary" icon={<ShoppingCartIcon className="size-6 mr-2" />}>Primary</Button>
                    <Button variant="secondary">Secondary</Button>


                    <Button variant="danger">Danger</Button>
                </div>
            </section>

            {/* ===== PICKERS ===== */}
            <section>
                <h2 className="text-2xl font-bold mb-6">Pickers</h2>

                {/* Color Picker */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Colors</h3>
                    <ColorPicker
                        colors={Colorcolors}
                        selectedColor={selectedColor}
                        onColorChange={setSelectedColor}
                    />

                </div>

                {/* Size Picker */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Sizes</h3>
                    <SizePicker
                        sizes={sizes}
                        selectedSize={selectedSize}
                        onSizeChange={setSelectedSize}
                    />

                </div>
            </section>
            <section>
                <h3 className="text-xl font-semibold mb-4">Product Cards</h3>
                <div className="flex justify-center gap-6 flex-wrap">




                    <ProductCard image="/img/image2.jpg" prix="95€" title="Converse Bordeaux" lien="/product"></ProductCard>
                    <ProductCard image="/img/image4.jpg" prix="95€" title="Converse Orange" lien="/product"></ProductCard>
                    <ProductCard image="/img/image5.jpg" prix="95€" title="Converse Marron" lien="/product"></ProductCard>
                </div>
            </section>
        </div>
    );
}
