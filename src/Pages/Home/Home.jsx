import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";

const Home = () => {

    const cards = useLoaderData()

    return (
        <div>
           <div className="text-center mt-10 ">
                    <h2 className="text-4xl font-bold">I Grow By Helping People In Need</h2>

                    
                    <input type="text" className="input input-bordered h-8 w-full max-w-xs rounded-none rounded-l-md mt-1" />
                    <button className="bg-[#FF444A] rounded-r-lg pt-[5px] pb-[3px] pr-[6px] pl-[6px] text-white mt-8">Search</button>
                
                    
           </div>

           
            <Cards cards = {cards}></Cards>
        </div>
    );
};

export default Home;