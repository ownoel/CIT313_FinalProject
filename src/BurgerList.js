/** @format */
import BurgerCard from "./BurgerCard.js";
import burgers from "./burgerData.js";

const BurgerList = () => {
    return (
        <div className="menu_container">
            {burgers.map((burger, index) => (
                <BurgerCard key={index} burger = {burger} />
            ))}
        </div>
    );
};

export default BurgerList;