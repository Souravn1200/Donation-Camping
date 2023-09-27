import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";


const Home = () => {

    const cards = useLoaderData()
  


    return (
        <div>
           <div className="text-center mt-10 relative group">

                    <img className="object-cover h-auto rounded-md" src="https://i.ibb.co/4JB888w/Untitled.png" alt="" />

                    <div className="absolute inset-0 bottom-0 bg-white bg-opacity-50 ">
<div className="lg:mt-52 md:mt-14 mt-10">
    
<h2 className="lg:text-4xl font-bold lg:mb-5">I Grow By Helping People In Need</h2>
                    <input type="text" className="input input-bordered h-8 lg:w-full max-w-xs rounded-none rounded-l-md mt-1" />
                    <button className="bg-[#FF444A] rounded-r-md pt-[5px] pb-[3px] pr-[6px] pl-[6px] text-white mt-8" >Search</button>
                
</div>
                    </div>

                    
           </div>

           
            <Cards cards = {cards}></Cards>
        </div>
    );
};

export default Home;