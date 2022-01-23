// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import NewsItem from "@/components/News/NewsListItem";
const FilterParams = (params) => {
  return params;
};

const Slider = (props) => {
  const data = props.items.data;
  const params = FilterParams(props);

  return (
    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} {...params}>
      {data.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <NewsItem item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
