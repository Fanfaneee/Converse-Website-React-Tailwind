// ParentComponent.jsx (ou App.jsx)
import { useState } from 'react';
import Photos from './photos';
import Prix_Couleurs from './prix_couleurs';
import Ariane from './Ariane';
import Description from './Description';

export default function ProductPage() {
    const [selectedColor, setSelectedColor] = useState('bordeaux');


    return (
        <div className="max-w-7xl mx-auto py-8 px-4 pt-24">
            <Ariane />
            <Photos color={selectedColor} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mx-auto">
                {/* Prix/Couleurs sur mobile entre Photos et Description */}
                <div className="order-2 md:order-3 text-center md:text-left">
                    <Prix_Couleurs
                        selectedColor={selectedColor}
                        onColorChange={setSelectedColor}
                    />
                </div>

                {/* Description */}
                <div className="order-3 md:order-2 text-left md:col-span-2 md:pr-20">
                    <Description />
                </div>
            </div>
        </div>
    );
}