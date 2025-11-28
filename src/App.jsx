import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Test.jsx'
import Photos from './component/photos.jsx'
import Ariane from './component/Ariane.jsx'
import Description from './component/Description.jsx'
import Prix_Couleurs from './component/prix_couleurs.jsx'
import ProductPage from './component/PartageEtatCouleur.jsx'
import Navbar from './component/Navbar.jsx'
import TextAcceuil from './component/TextAcceuil.jsx'
import TextCategorie from './component/textCategorie.jsx'
import Newsletter from './component/Newsletter.jsx'
import CategorieCard from './component/CategorieCard.jsx'
import ProductCard from './component/ProductCard.jsx'



function App() {


  return (
    <>

      <div className="pt-24   max-w-7xl mx-auto py-8 px-4 text-center">
        <TextAcceuil></TextAcceuil>
        <TextCategorie title="Catégorie populaire" second_title="Navigue par type de produit pour trouver ta prochainre converse"></TextCategorie>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          <CategorieCard tag="Essentiels" title="Femme" image="/img/image.jpg"></CategorieCard>
          <CategorieCard tag="Essentiels" title="Homme" image="/img/image6.jpg"></CategorieCard>
          <CategorieCard tag="Essentiels" title="Enfant" image="/img/image3.jpg"></CategorieCard>
          <CategorieCard tag="Essentiels" title="Accessoires" image="/img/image4.jpg"></CategorieCard>


        </div>
        <TextCategorie id="bestsellers" title="Bestsellers" second_title="Les modèles les plus vendus cette saison"></TextCategorie>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          <ProductCard image="/img/image2.jpg" prix="95€" title="Converse Bordeaux" lien="/product"></ProductCard>
          <ProductCard image="/img/image3.jpg" prix="95€" title="Converse Noir" lien="/product"></ProductCard>
          <ProductCard image="/img/image4.jpg" prix="95€" title="Converse Orange" lien="/product"></ProductCard>
          <ProductCard image="/img/image5.jpg" prix="95€" title="Converse Marron" lien="/product"></ProductCard>
        </div>
        <TextCategorie title="Nouveautés" second_title="Découvre les dernières arrivées de Converse"></TextCategorie>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          <ProductCard image="/img/image4.jpg" prix="95€" title="Converse Orange" lien="/product" tagLabel="New"></ProductCard>
          <ProductCard image="/img/image5.jpg" prix="95€" title="Converse Marron" lien="/product" tagLabel="New"></ProductCard>
          <ProductCard image="/img/image2.jpg" prix="95€" title="Converse Bordeaux" lien="/product" tagLabel="New"></ProductCard>
          <ProductCard image="/img/image3.jpg" prix="95€" title="Converse Noir" lien="/product" tagLabel="New"></ProductCard>
        </div>


        <Newsletter></Newsletter>

      </div>
    </>
  )
}

export default App
