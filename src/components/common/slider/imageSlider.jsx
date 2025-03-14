import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./imageSlider.css";

const images = [
  {
    imageUrl:
      "https://res.cloudinary.com/dzrqxndnp/image/upload/v1741975530/house-plants-in-a-metallic-basket_lskyjg.jpg",
    title: "La mejor selección de plantas",
    description: "Amplia variedad y accesorios",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dzrqxndnp/image/upload/v1741975433/house-plant-enjoys-natural-light_yyvfn0.jpg",
    title: "Tus plantas a la puerta de tu casa",
    description: "Envios gratis",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dzrqxndnp/image/upload/v1741975400/condominium-interior-livingroom_o8iltj.jpg",
    title: "Decora tu hogar con elementos naturales",
    description: "Tenemos de todos los tamaños",
  },
];

export default function ImageSlider() {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        borderRadius: 2,
      }}
    >
      <Swiper
        className="swipper-container"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop={true}
        style={{}}
        speed={2000}
      >
        {images.map((Slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={Slide.imageUrl}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "600px" }}
            />
            <div className="slide-text">
              <h2>{Slide.title}</h2>
              <p>{Slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
