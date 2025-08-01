import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/PrivateRoom.css";
import AOS from "aos";
import "aos/dist/aos.css";

import roomImage1 from "../assets/room1.webp";
import roomImage2 from "../assets/room2.webp";
import roomImage3 from "../assets/room3.webp";

const PrivateRoom = () => {
  const [privateRooms, setPrivateRooms] = useState(() => {
    const savedRooms = sessionStorage.getItem("privateRooms");
    return savedRooms ? JSON.parse(savedRooms) : [];
  });

  useEffect(() => {
    const fetchPrivateRooms = async () => {
      const roomsData = [
        {
          id: 1,
          name: "Private Room 1",
          description: "Enjoy a cozy meal with your loved ones. Seats up to 8.",
          image: roomImage1,
        },
        {
          id: 2,
          name: "Private Room 2",
          description:
            "Have a completely secluded private dining space - Seats up to 24 people.",
          image: roomImage2,
        },
        {
          id: 3,
          name: "Banquet",
          description:
            "Our largest room for grand events. Seats up to 50 people.",
          image: roomImage3,
        },
      ];
      setPrivateRooms(roomsData);
      sessionStorage.setItem("privateRooms", JSON.stringify(roomsData));
    };
    fetchPrivateRooms();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="private-room" id="private-room">
      <div className="hero" data-aos="fade-up">
        <h1>Private Dining Rooms</h1>
        <p>
          Experience the luxury of our exclusive private dining rooms. Perfect
          for your next event or celebration.
        </p>
      </div>

      <div className="rooms">
        {privateRooms.map((room) => (
          <div
            className="room-item"
            key={room.id}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={room.image} alt={room.name} />
            <div className="room-info">
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <Link to="/contact" className="book-button">
                Contact Us to Book
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivateRoom;
