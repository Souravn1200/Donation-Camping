import React from 'react';

const Card = ({card}) => {



    const {id,picture,title,category,category_bg,card_bg,text_button_bg,description,price} = card


    return (
        <div>
            

            <div className="card bg-base-100 rounded-md" style={{ backgroundColor: `${card_bg}`}}>
  <img src={picture} alt="" />

  <div className="mt-3 ml-3" >
    <div style={{backgroundColor: `${category_bg}` }} className='w-auto text-center inline-block px-2 py-1 rounded-md text-xs'>

  <p className='' style={{ color : `${text_button_bg}` }}>{category}</p>

    </div>


    <h2 className="text-1xl font-bold pb-6 mt-2" style={{color : `${text_button_bg}` }} >{title}</h2>
   

  </div>
</div>
        </div>
    );
};

export default Card;