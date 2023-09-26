import { useEffect, useState } from "react";
import DonationStored from "../../Components/DonationStored/DonationStored";

const Donation = () => {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const donationParse = JSON.parse(localStorage.getItem('donationlist'));

        if(donationParse){
            setDonations(donationParse);
        }

       
    }, [])


    return (
        <div> 
<div className="grid grid-cols-2 gap-10 mt-10">
            {donations.map( donation => <DonationStored key={donation.id} donation={donation}></DonationStored>)}
        </div>
        
<div className="flex justify-center items-center mb-2">
<button className="py-2 px-2 rounded-md text-white text-sm mt-4 bg-green-700 ">View All</button>
</div>
        </div>
        
    );
};

export default Donation;