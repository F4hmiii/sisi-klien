import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "react-bootstrap";
import InfoCard from "../Components/InfoCard";
import { setCards } from "../features/infoCard/infoCardSlice";

function Home() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.infoCard.cards);
  
  // Example of using useState for local state management
  const [title, setTitle] = useState("Informasi Data Diri");

  useEffect(() => {
    // Dispatch an action to set initial cards data
    dispatch(setCards([
      {
        title: "Apa itu Biodata diri?",
        text: "",
        buttonLabel: "Baca Selengkapnya..",
        additionalText: "Biodata diri adalah kumpulan data yang mencakup informasi tentang identitas diri seseorang untuk memperkenalkan diri kepada orang lain."
      },
      {
        title: "Curriculum Vitae",
        text: "Apa itu curriculum Vitae?",
        buttonLabel: "Baca Lengkapnya..",
        additionalText: `Dalam dunia kerja, tentu membutuhkan sikap yang profesional. Namun, perlu Anda ketahui bahwa, sebelum terjun ke ruang lingkup kerja, Anda perlu menyiapkan sebuah CV. Apa itu CV? Singkatnya CV adalah Curriculum Vitae sebuah dokumen penting yang berisi tentang perjalanan karir seseorang, mulai dari  pendidikan hingga pengalaman.`
      }
    ]));
  }, [dispatch]);

  return (
    <div>
      <center><h1>{title}</h1></center>
      <div className="container-fluid mb-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-15"
              src={`${process.env.PUBLIC_URL}images/gambar 1.png`}
              alt="Slide satu"
            />
            <Carousel.Caption>
              <h2>All About Biodata</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-60"
              src={`${process.env.PUBLIC_URL}/images/hai.jpg`}
              alt="Slide dua"
            />
            <Carousel.Caption>
              <h2>Tentang Biodata Diri</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container">
        {cards.map((card, index) => (
          <InfoCard 
            key={index}
            title={card.title}
            text={card.text}
            buttonLabel={card.buttonLabel}
            additionalText={card.additionalText}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
