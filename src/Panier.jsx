// Fichier: Panier.jsx
import TitreProduit from "./component/TitreProduit";
// Importation du nouveau composant d'article
import ArticlePanier from "./component/ArticlePanier.jsx";

import CustomButton from "./component/CustomButton.jsx"


function Panier() {

    // Définitions statiques des articles (ces données peuvent venir d'une API/store)
    const articles = [
        { name: "Converse Bordeaux", image: "/img/image2.jpg", price: "95€", id: 1, defaultQuantity: 2 },
        { name: "Converse Noir", image: "/img/image3.jpg", price: "95€", id: 2, defaultQuantity: 1 },
        { name: "Converse Orange", image: "/img/image4.jpg", price: "95€", id: 3, defaultQuantity: 1 },
        { name: "Converse Marron", image: "/img/image5.jpg", price: "95€", id: 4, defaultQuantity: 1 },
        { name: "Converse Blanc", image: "/img/image6.jpg", price: "95€", id: 5, defaultQuantity: 3 },
    ];
    return (
        <>
            <div className=" max-w-7xl mx-auto py-8 px-4 text-left">


                <section className="py-8 antialiased md:py-16">
                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>

                        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">

                            {/* Colonne du Panier (Articles) */}
                            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                <div className="space-y-6">

                                    {/* Utilisation du nouveau composant ArticlePanier */}
                                    {articles.map((article) => (
                                        <ArticlePanier key={article.id} article={article} />
                                    ))}

                                </div>
                            </div>

                            {/* Colonne du Sommaire de Commande (non modifiée) */}
                            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">

                                {/* Sommaire */}
                                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                                    <p className="text-xl font-semibold text-gray-900">Résumé de la commande</p>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500">Prix</dt>
                                                <dd className="text-base font-medium text-gray-900">760€</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500">Réductions</dt>
                                                <dd className="text-base font-medium text-green-600">-20,00€</dd>
                                            </dl>



                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500">Taxe</dt>
                                                <dd className="text-base font-medium text-gray-900">20</dd>
                                            </dl>
                                        </div>

                                        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                                            <dt className="text-base font-bold text-gray-900">Total</dt>
                                            <dd className="text-base font-bold text-gray-900">760€</dd>
                                        </dl>
                                    </div>

                                    {/* BOUTON PROCEED TO CHECKOUT */}
                                    <CustomButton href="#" variant="primary" size="lg" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                                        Procéder au paiement
                                    </CustomButton>

                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-sm font-normal text-gray-500"> ou </span>
                                        <a href="/catalogue" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline">
                                            Continuer le shopping
                                            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                {/* Code Promo */}
                                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900"> Un code promo? </label>
                                            <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="" required />
                                        </div>
                                        {/* BOUTON APPLY CODE */}
                                        <CustomButton type="submit" variant="primary" size="lg" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                                            Appliquer le code
                                        </CustomButton>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div >
                </section >
            </div >
        </>
    );
}

export default Panier;