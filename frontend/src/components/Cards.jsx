

function Cards({ item }) {
    console.log(item);
    return (
        <div className="mt-5 mb-4">

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <div className="cursor-pointer px-1 py-1 rounded-full hover:bg-pink-400 hover:duration-100 hover:text-white hover:p-1">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards