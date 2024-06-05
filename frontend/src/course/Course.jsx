// import React from 'react'
import list from "../../public/list.json"
import Card from "../components/Cards"
import { Link } from "react-router-dom"
function Course() {
    // console.log(list);
    return (

        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className=" mt-28 item-center  justify-center text-center">
                <h1 className="text-2xl md:text-4xl"> we are delighted to have you <span className="text-pink-500">Here:)</span>
                </h1>
                <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Doloremque quos voluptates fuga quis delectus impedit.
                    Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing
                    Lorem ipsum dolor sit amet consectetur adipisicing</p>
                <Link to='/'>
                    <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 ">Back</button>
                </Link>

            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3  ">
                {
                    list.map((item) => (<Card item={item} key={item.id} />)
                    )
                }
            </div>

        </div>
    )
}

export default Course