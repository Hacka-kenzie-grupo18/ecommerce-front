// import yoda from "../../assets/homeImages/Yoda.jpg";
// import darth from "../../assets/homeImages/Darth-vader.jpg";
// import dumbledore from "../../assets/homeImages/Dumbledore.jpg";
// import emmet from "../../assets/homeImages/Emmet brown.jpg";
// import ancia from "../../assets/homeImages/Ancia Marvel.jpg";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const SwiperHome = () => {
  const [slidePerview, setSlidePerView] = useState(2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1000) {
        setSlidePerView(1);
      } else {
        setSlidePerView(2);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slides = [
    {
      id: 1,
      text: "Palavras são, na minha humilde opinião, nossa fonte inesgotável de magia",
      image: "https://images8.alphacoders.com/105/1050832.jpg",
      author: "Dumbledore, Harry Potter",
    },
    {
      id: 2,
      text: "Nunca nos livramos de nossos demônios. Apenas aprendemos a viver acima deles",
      image:
        "https://sm.ign.com/ign_br/news/q/quero-um-f/quero-um-filme-derivado-com-ancia-declarou-tilda-swinton_6sfz.jpg",
      author: "Anciã Marvel",
    },
    {
      id: 3,
      text: "Seu futuro não está escrito, o de ninguém está. Você pode fazer o que quiser fazer",
      image:
        "https://www.lagzero.net/wp-content/uploads/2014/04/docbrownchile.jpg",
      author: "Emmet Scott, De volta para o futuro",
    },
    {
      id: 4,
      text: "Sua falta de fé é perturbadora",
      image:
        "https://w0.peakpx.com/wallpaper/254/614/HD-wallpaper-star-wars-darth-vader.jpg",
      author: "Darth Vader, Star Wars",
    },
    {
      id: 5,
      text: "Faça ou não faça. Tentativa não há.",
      image: "https://wallpapercave.com/wp/wp6850338.jpg",
      author: "Mestre Yoda, Star Wars",
    },
  ];

  return (
    <div className="h-96 w-full bg-white flex justify-center items-center">
      <Swiper
        slidesPerView={slidePerview}
        pagination={{ clickable: true }}
        navigation
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="h-full w-full  flex justify-center bg-black">
              <img src={slide.image} alt="" className="slide-allign" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black text-white">
                <p className="text-lg">{slide.text}</p>
                <p className="text-sm">{slide.author}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperHome;
