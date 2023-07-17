import React, { useContext } from "react";
import { roomList } from "@/utils/reservations";
import { GeneralContext } from ".";

const Locations = () => {
  const context = useContext(GeneralContext);
  console.log(context);

  const idGen = Math.floor(Math.random() * 100);

  return (
    <div className="wrapper">
      <h1> Locations </h1>

      {roomList.map((room) => (
        <div className="roomElement">
          <h3>{room.name}</h3>
          <img key={idGen} src={room.imageLocation} alt="Hotel" />
          <p>Availability: {room.availability ? "✅" : "❌"}</p>
        </div>
      ))}
    </div>
  );
};

export default Locations;
