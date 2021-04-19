import React, { useContext } from 'react';
import SideBar from '../../DashBoard/SideBar/SideBar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const AddAdmin = () => {
    const [loggedInuser, setLoggedInuser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
        fetch('http://localhost:5050/makeAdmin' , {
            method: 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            console.log(success);
        })
    };
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-8 card mt-1 bg-light">
            <h4>Make an Admin</h4>
                
                <form className="mt-5 d-flex" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">

                        <input className="form-control w-100" placeholder="admin email" {...register("email", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span>This field is required</span>}
                    </div>

                    <input className="btn btn-brand ms-1" type="submit" />
                </form>



            </div>

        </div>
    );
};

export default AddAdmin;