import Card from "../Card/Card";

const Cards = ({cards}) => {

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-10 mb-7 mx-16 lg:mx-0">
            {
               
                    cards?.map( card => <Card key={card.id} card={card}></Card>)
                
            }
        </div>
    );
};

export default Cards;