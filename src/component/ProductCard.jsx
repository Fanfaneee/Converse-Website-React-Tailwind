import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Button from "./CustomButton";

// Ajout de tagLabel dans les props
export default function ProductCard({ image, prix, title, lien, tagLabel }) {

    // Rendu conditionnel du Tag
    const showTag = tagLabel && tagLabel.trim().length > 0;

    return (
        <>
            <div className="w-full max-w-sm bg-background2 border border-default rounded-lg shadow-xs 
                            transition duration-300 ease-in-out hover:shadow-lg hover:border-brand-default hover:scale-[1.02] cursor-pointer">

                <a href={lien}>

                    <div className="w-full h-56 overflow-hidden rounded-t-lg relative">


                        <img
                            className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105"
                            src={image}
                            alt="product image"
                        />


                        {showTag && (
                            <span className="absolute top-3 right-3 inline-flex items-center bg-pinker border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm z-10">


                                {tagLabel}
                            </span>
                        )}
                    </div>
                </a>

                <div className="px-6 pt-2 pb-6">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            {/* Étoiles SVG... (omis pour la concision) */}
                            <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" /></svg>
                            <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" /></svg>
                            <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" /></svg>
                            <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" /></svg>
                            <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" /></svg>
                        </div>
                        <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">4.8 out of 5</span>
                    </div>
                    <a href={lien}>
                        <h5 className="text-xl text-heading text-left font-semibold tracking-tight">{title}</h5>
                    </a>
                    <div className="flex items-center justify-between mt-6">
                        <span className="text-2xl font-extrabold text-heading">{prix}</span>
                        <Button href={lien} className=" " variant="primary" >Voir</Button>
                    </div>
                </div>
            </div>
        </>
    );
}