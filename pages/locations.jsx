import React from "react";
import { roomList } from "@/utils/reservations";

const Locations = () => {
  return (
    <div className="wrapper">
      <h1> Locations </h1>

      {roomList.map((room) => (
        <div className="roomElement">
          <h3>{room.name}</h3>
          <img src={room.imageLocation} alt="Hotel" />
          <p>Availability: {room.availability ? "✅" : "❌"}</p>
        </div>
      ))}
    </div>
  );
};

export default Locations;
