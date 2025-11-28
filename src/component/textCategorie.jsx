export default function TextCategorie({ title, second_title }) {
    return (
        <>
            <div className=" text-left mt-8 ">
                <h2 className="mb-4 !font-bold text-xl ">{title}</h2>
                <h3 className="mb-8  text-gray-600">{second_title}</h3>
            </div>
        </>



    );

}
