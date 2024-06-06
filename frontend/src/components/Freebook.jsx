
// import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"
import Slider from "react-slick";
import Cards from "./Cards.jsx"
import { useEffect, useState } from "react";
function Banner() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4002/book");
                console.log(res.data)
                const data = res.data.filter((data) => data.category === "Free");
                console.log(data)
                setBook(data);
            } catch (error) {
                console.log("Error:", error);


            }
        }
        getBook();
    }, [])
    // const filterData = list.filter((data) => data.category === "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // console.log(filterData);
    return (

        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
            <div>
                <h1 className="font-semibold pb-4">
                    Free Courses Offered
                </h1>
                <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum</p>

            </div>
            <div>
                <Slider {...settings}>
                    {book.map((item) => {
                        return <Cards item={item} key={item.id} />
                    })}
                </Slider>
            </div>

        </div>

    )
}

export default Banner