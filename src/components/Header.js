import React from "react";

const Header = ({content})=>{
  return (
    <header className="App-header text-center py-8 bg-cover bg-center text-white">
      <p className="text-4xl font-bolder">
        {content}
      </p>
    </header>
    )
};

export default Header;