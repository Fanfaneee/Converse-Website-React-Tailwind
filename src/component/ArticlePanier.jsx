// Fichier: ArticlePanier.jsx
import React from 'react';
import IncrementButton from './IncrementButton.jsx';
import DecrementButton from './DecrementButton.jsx';
// CustomButton est conservé ici pour les boutons "Add to Favorites" et "Remove"
import CustomButton from "./CustomButton.jsx";
import TitreProduit from './TitreProduit.jsx';

export default function ArticlePanier({ article }) {
    const dataTarget = `counter-input-${article.id}`;

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">

                {/* Image de l'article */}
                <a href="#" className="shrink-0 md:order-1">
                    <img className="h-30 w-30  rounded-xl" src={article.image} alt={`${article.name} image`} />
                </a>

                <label htmlFor={dataTarget} className="sr-only">Choose quantity:</label>

                {/* Contrôles de quantité et prix */}
                <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">

                        {/* Bouton de décrémentation */}
                        <DecrementButton dataTarget={dataTarget} />

                        {/* Champ de quantité */}
                        <input
                            type="text"
                            id={dataTarget}
                            data-input-counter
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                            placeholder=""
                            defaultValue={article.defaultQuantity}
                            required
                        />

                        {/* Bouton d'incrémentation */}
                        <IncrementButton dataTarget={dataTarget} />
                    </div>

                    <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900">{article.price}</p>
                    </div>
                </div>

                {/* Nom de l'article et boutons d'action */}
                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">

                    <TitreProduit>{article.name}</TitreProduit>
                    <div className="flex items-center gap-4">


                        {/* BOUTON REMOVE */}
                        <CustomButton type="button" variant="danger" size="sm" className="inline-flex items-center text-sm font-medium hover:underline border-none shadow-none">
                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                            Remove
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
}