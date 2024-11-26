/** @format */
import { useState } from "react";

const BurgerCard = ({burger}) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className = "burger-card">
            <img 
                src = {burger.image}
                alt = {burger.name}
                style = {{
                    textAlign: "center",
                    padding: "2px",
                    color: "white",
                    width: "400px",
                    height: "350px"
                }}
            />
            <h3>{burger.name}</h3>
            
            <button onClick={handleOpenModal}>Calorie Information</button>
            {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Calories</h3>
            <p>{burger.calories}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
        )}
    </div>
    );
};

export default BurgerCard;