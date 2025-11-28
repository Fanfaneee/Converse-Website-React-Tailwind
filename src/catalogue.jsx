
import './App.css'
import Navbar from './component/Navbar.jsx'
import TextAcceuil from './component/TextAcceuil.jsx'
import TextCategorie from './component/textCategorie.jsx'
import Newsletter from './component/Newsletter.jsx'
import CategorieCard from './component/CategorieCard.jsx'
import ProductCard from './component/ProductCard.jsx'
import TitreProduit from './component/TitreProduit.jsx'



function Catalogue() {


    return (
        <>

            <div className="pt-24   max-w-7xl mx-auto py-8 px-4 text-left">

                <TitreProduit> Catalogue produits</TitreProduit>
                <div className="flex items-center justify-between mb-6">
                    <h3>Explore la collection </h3>
                    <p>4 produits affichés</p>
                </div>

                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                    <ProductCard image="/img/image2.jpg" prix="95€" title="Converse Bordeaux" lien="/product" tagLabel="Nouveau" > </ProductCard>
                    <ProductCard image="/img/image3.jpg" prix="95€" title="Converse Noir" lien="/product" tagLabel="BestSeller"></ProductCard>
                    <ProductCard image="/img/image4.jpg" prix="95€" title="Converse Orange" lien="/product" tagLabel="Limited"></ProductCard>
                    <ProductCard image="/img/image5.jpg" prix="95€" title="Converse Marron" lien="/product" tagLabel="Eco"></ProductCard>
                </div>



            </div>
        </>
    )
}

export default Catalogue
