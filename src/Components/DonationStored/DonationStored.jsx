
const DonationStored = ({donation}) => {
    const {picture, title, category, category_bg, card_bg, text_button_bg, description, price } =  donation

    return (
        <div>
            <div className="card card-side rounded-md mx-4 lg:mx-0 pb-5 lg:pb-0" style={{ backgroundColor: `${card_bg}` }}>
  <figure><img src={picture} className="ml-8 lg:ml-0" alt="Movie"/></figure>
  <div className="ml-6 mt-6">
  <div style={{ backgroundColor: `${category_bg}` }} className='w-auto text-center inline-block px-2 py-1 rounded-md text-xs mt-2'>
            <p className='' style={{ color: `${text_button_bg}` }}>{category}</p>
          </div>
    <h2 className="card-title mt-2">{title}</h2>
    <p style={{ color: `${text_button_bg}` }}>${price}</p>
    
      <button className="py-2 px-2 rounded-md text-white text-sm mt-4" style={{ backgroundColor: `${text_button_bg}` }}>View Details</button>

  </div>
</div>   



        </div>
    );
};

export default DonationStored;