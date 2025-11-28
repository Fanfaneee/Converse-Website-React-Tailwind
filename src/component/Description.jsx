import TitreProduit from "./TitreProduit";

export default function Description() {
    return (
        <div className="col-span-2 flex text-left flex-col  md:pr-20">
            <TitreProduit>Chuck 70 Vintage Canvas</TitreProduit>
            <p className="mb-6 text-base">La Chuck 70 se pare d'une toile vierge pour raconter votre propre histoire avec  énergie et style. Ce modèle testé et approuvé rend hommage à l'époque où tout a commencé. Les nouveautés apportent une touche de modernité à votre look en offrant un maximum de confort.</p>
            <h3 className="text-lg font-bold mb-4"> Caractéristiques du produit</h3>
            <ul>
                <li className="mb-2 ">- Empeigne en toile résistante offrant le look et le confort caractéristiques de la Chuck 70</li>
                <li className="mb-2">- Amorti OrthoLite pour un confort optimal</li>
                <li className="mb-2">- Éléments d'inspiration vintage tels qu'une semelle intermédiaire écrue, des coutures décoratives et des côtés en caoutchouc plus hauts</li>
                <li className="mb-2">- Patch Chuck Taylor emblématique au niveau de la cheville et plaque All Star vintage</li>
                <li className="mb-2">- Semelle intérieure avec amorti OrthoLite</li>
            </ul>
        </div>

    );

}

