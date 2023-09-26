import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Chart } from "react-google-charts";


const Statistics = () => {
  const totalDonation = useLoaderData();
  console.log(totalDonation);
  let arrForNewValue = [];
  totalDonation.map((eachdonation) => {
    const newValueFound = parseInt(eachdonation.price);
    arrForNewValue = [...arrForNewValue, newValueFound];
  });
  const totalPrice = arrForNewValue.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(totalPrice);

  // Getting stored donations
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    const donationParse = JSON.parse(localStorage.getItem("donationlist"));
    if (donationParse) {
      setDonations(donationParse);
    }
  }, []);

  let newDonationArr = [];
  donations.map((storedDonation) => {
    const newStoredValue = parseInt(storedDonation.price);
    newDonationArr = [...newDonationArr, newStoredValue];
  });
  const totalStoredPrice = newDonationArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(totalStoredPrice);

   const data = [
    ["Task", "Hours per Day"],
    ["Total Donation", totalPrice],
    ["Your Donation", totalStoredPrice],
    
  ];
  
 const options = {
    title: "",
    pieHole: 0.4,
    is3D: false,
  };
  return (
    <div>
    <h2 className="text-center mt-4 text-3xl font-semibold italic">The Total Donation Statictis</h2>
 <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  
    </div>
  );
};

export default Statistics;

