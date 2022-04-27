import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
//swiper styles
import "swiper/css";
import "swiper/css/navigation";

const BestSellersInCategory = ({ books }) => {
  console.log(books);
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div>
          {books &&
            books.map((book) => {
              return (
                <SwiperSlide key={book.primary_isbn10}>
                  <img
                    className="rounded-sm w-200 my-20"
                    src={book.book_image}
                  ></img>
                </SwiperSlide>
              );
            })}
        </div>
      </Swiper>
    </div>
  );
};

export default BestSellersInCategory;
