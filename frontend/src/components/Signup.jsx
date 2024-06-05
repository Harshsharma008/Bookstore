import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"


function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <div id="my_modal_3" className="">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        {/* Name */}
                        <div className="mt-4 space-y-2">
                            <span>Full Name</span>
                            <br />
                            <input type="text"
                                placeholder="Enter you Name"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("name", { required: true })} />
                            <br />
                            {errors.name && <span className="text-sm text-red-500">This field is required</span>}

                        </div>
                        {/* Email */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input type="Email"
                                placeholder="Enter you Email"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}

                        </div>
                        {/* password */}
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input type="Password"
                                placeholder="Enter you Password "
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("password", { required: true })} />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}

                        </div>
                        {/* Button */}
                        <div className="flex justify-around mt-4">
                            <button className="bg-pink-500 text-white hover:bg-pink-700 px-3 py-1 rounded-md" to='/'>Signup</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup