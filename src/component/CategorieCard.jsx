export default function CategorieCard({ tag, title, image }) {
    return (
        <>
            {/* Ajout des classes de transition et d'interactivité au conteneur principal */}
            <div className="bg-background2 block max-w-sm border border-default rounded-lg shadow-xs 
                            **transition duration-300 ease-in-out hover:shadow-lg hover:border-brand-default hover:scale-[1.02] cursor-pointer**">

                <div className="p-6 text-left ">
                    <span className="inline-flex items-center bg-pinker border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                        <svg className="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z" />
                        </svg>
                        {tag}
                    </span>
                    <a href="#">
                        <h5 className="mt-3 text-2xl font-semibold tracking-tight text-heading">{title}</h5>
                    </a>
                </div>
                <a href="#" className="block overflow-hidden ">
                    <img className="w-full h-48 object-cover object-bottom rounded-b-lg **transition duration-300 ease-in-out hover:scale-105**" src={image} alt={title} />
                </a>
            </div>
        </>
    );
}