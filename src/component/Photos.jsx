export default function Photos({ color }) {

    const imagesByColor = {
        bordeaux: {
            verti1: "/img/converse-bordeaux-verti1.webp",
            hori1: "/img/converse-bordeaux-hori1.jpg",
            verti2: "/img/converse-bordeaux-verti2.jpg",
            hori2: "/img/converse-bordeaux-hori2.jpg"
        },
        black: {
            verti1: "/img/converse-black-verti1.jpg",
            hori1: "/img/converse-black-hori1.jpg",
            verti2: "/img/converse-black-verti2.jpg",
            hori2: "/img/converse-black-hori2.jpg"
        },
        orange: {
            verti1: "/img/converse-orange-verti1.webp",
            hori1: "/img/converse-orange-hori1.jpg",
            verti2: "/img/converse-orange-verti2.webp",
            hori2: "/img/converse-orange-hori2.jpg"
        }
    };

    const images = imagesByColor[color] || imagesByColor.bordeaux;


    return (
        <>
            <div className="w-full ">
                <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:mt-8">
                    <div className="relative lg:row-span-2 h-64 sm:h-80 lg:h-[600px]">
                        <img className="w-full h-full object-cover rounded-lg" src={images.verti1} alt="Produit - vertical 1" />
                    </div>

                    <div className="relative h-48 sm:h-56 lg:h-[290px]">
                        <img className="w-full h-full object-cover rounded-lg" src={images.hori1} alt="Produit - horizontal 1" />
                    </div>

                    <div className="relative lg:row-span-2 sm:row-start-1 sm:col-start-2 lg:col-start-3 lg:row-start-1 h-64 sm:h-80 lg:h-[600px]">
                        <img className="w-full h-full object-cover rounded-lg" src={images.verti2} alt="Produit - vertical 2" />
                    </div>


                    <div className="relative lg:col-start-2 lg:row-start-2 h-48 sm:h-56 lg:h-[290px]">
                        <img className="w-full h-full object-cover rounded-lg" src={images.hori2} alt="Produit - horizontal 2" />
                    </div>
                </div>
            </div>
        </>

    );

}

