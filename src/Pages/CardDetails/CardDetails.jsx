import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const [details, setDetails] = useState({})

    const {id} = useParams()
    const cards = useLoaderData()

    useEffect(() => {
        const findCard = cards?.find(card =>card.id == id)
        setDetails(findCard)
    },[id, cards])

const { picture, title, category, category_bg, card_bg, text_button_bg, description, price } = details


    return (
        <div>

         <div className="card relative group mt-10">
            <img src={picture} alt="" />
            <div className="absolute inset-x-0 bottom-0 h-16 flex justify-start items-center bg-black bg-opacity-50 ">
                <button className=" text-white py-2 px-4 rounded block ml-2 mt-2 mb-2" style={{ backgroundColor: `${text_button_bg}` }} >Donate {price}</button>
            </div>
         </div>
            <div >

  <div className="mt-10">
    <h2 className="text-3xl">{title}</h2>
    <p className="mt-10">{description}</p>
  </div>
</div>
        </div>
    );
};

export default CardDetails;

// opacity-0 transition-opacity group-hover:opacity-100