import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";
//swiper styles
import "swiper/css";
import "swiper/css/navigation";

const BestSellersInCategory = ({ books }) => {
  const bigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={bigScreen ? 3 : 1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {books &&
          books.map((book) => {
            return (
              <SwiperSlide key={Date.now() * Math.random()}>
                <img
                  className="rounded-sm w-95vw xs:w-50vw sm:w-25vw md:w-20vw lg:w-300 my-20 mx-auto"
                  src={book.book_image}
                ></img>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default BestSellersInCategory;
