import { useEffect, useState } from "react";
import DonationStored from "../../Components/DonationStored/DonationStored";


const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [isViewAll, setIsViewAll] = useState(false);

    console.log(isViewAll)
    useEffect(() => {
        const donationParse = JSON.parse(localStorage.getItem('donationlist'));

        if(donationParse){
            setDonations(donationParse);
        }

       
    }, [])


    return (
        <div>
            
<div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 mt-10 ">
            {
                isViewAll ? donations.map( donation => <DonationStored key={donation.id} donation={donation}></DonationStored>)
                : donations.slice(0,4).map( donation => <DonationStored key={donation.id} donation={donation}></DonationStored>)
            }
            
        </div>
        
                {
                    donations.length > 4 && <div className="flex justify-center items-center mb-2">
                    <button className="py-2 px-2
                     rounded-md text-white text-sm mt-4
                      bg-green-700 " onClick={() => {setIsViewAll(!isViewAll)}}>{isViewAll ? "See Less" : "See More"}</button>
                    </div>
                }


        </div>
        
    );
};

export default Donation;