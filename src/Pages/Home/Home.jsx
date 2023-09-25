import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";

const Home = () => {

    const cards = useLoaderData()

    return (
        <div>
           <div className="text-center mt-10">
                    <h2 className="text-4xl font-bold">I Grow By Helping People In Need</h2>
           </div>

           
            <Cards cards = {cards}></Cards>
        </div>
    );
};

export default Home;