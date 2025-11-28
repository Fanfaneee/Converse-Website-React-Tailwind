import CustomButton from "./CustomButton.jsx";
import TagAccueil from "./TagAccueil.jsx";
export default function TextAcceuil() {
    return (
        <>
            <div className="flex justify-between">
                <div className="text-left pr-10 space-y-6">
                    <p className="text-3xl font-bold" >Votre style, vos règles, vos Converse. <br></br>Créez votre look unique <span className="text-secondary">dès maintenant.</span></p>
                    <p>Des classiques intemporels aux plateformes audacieuses, la Converse s'adapte à chaque personnalité et à chaque style de vie. Plus qu'une basket, c'est une toile vierge prête à accueillir votre histoire. Trouvez la vôtre aujourd'hui.</p>
                    <div className="flex space-x-2">
                        <CustomButton href="/catalogue" variant="primary" size="lg" className=" mt-6">
                            Explorer la collection
                        </CustomButton>
                        <CustomButton href="/catalogue" variant="secondary" size="lg" className=" mt-6">
                            Voir tous les produits
                        </CustomButton>
                    </div>
                    <div className="flex space-x-6 mt-6">
                        <TagAccueil > Livraison offerte dès 80€ </TagAccueil>
                        <TagAccueil dotColorClass="bg-blue-200">Retours sous 30 jours </TagAccueil>
                        <TagAccueil dotColorClass="bg-pink-200">Qualité Controlée </TagAccueil>
                    </div>
                </div>

                <img className="w-130 h-full object-cover rounded-lg" src="/img/home-image.jpg" alt="Image Converse" />
            </div >

        </>


    );

}