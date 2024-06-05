import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"



function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        <h3 className="font-bold text-lg">Login</h3>
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
                            <button className="bg-pink-500 text-white hover:bg-pink-700 px-3 py-1 rounded-md">Login</button>
                            <p>Not Registerd <Link to='/signup' className="underline text-blue-500 hover: text-blue-900">Signup!</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login