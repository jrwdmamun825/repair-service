import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SideBar from '../SideBar/SideBar';

const AddService = () => {
    const [imgUrl, setImgUrl] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const {serviceName,price,description} = {...data}
        const serviceData = {
            serviceName: serviceName,
            price: Number(price),
            serviceDetails: description,
            imageUrl: imgUrl
        }
        fetch('https://sheltered-citadel-15796.herokuapp.com/addService', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(serviceData)
        })
        .then(res => res.json())
        .then(success => console.log(success))
        console.log(data)
    };
    const handleImageUploads = (e) => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key' , 'f39a16a13cf484a539dfa24db215224b')
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (response) {
            setImgUrl(response.data.data.display_url);
            console.log(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
       


    }
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-8 card mt-5">
                <form className="ms-5 mt-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Service Name</label>
                        <input className="form-control w-75" placeholder="service name" defaultValue="service name" {...register("serviceName")} />
                        {errors.name && <span>This field is required</span>}

                    </div>
                    <div className="form-group mt-1">
                        <label>Service price</label>
                        <input className="form-control w-75" placeholder="service /product price" {...register("price", { required: true })} />
                        {errors.price && <span>This field is required</span>}

                    </div>
                    <div className="form-group mt-1">
                        <label>upload an image </label>
                        <input className="form-control" type="file" onChange={handleImageUploads} />

                    </div>
                    <div className="form-group mt-1 w-75">
                        <label>your opinion</label>
                        <textarea n className="form-control" id="" cols="30" rows="10" placeholder="Description *" {...register("description", { required: true })}></textarea>
                    </div>



                    <input className="btn btn-brand mt-3" type="submit" value="add services" />
                </form>
            </div>

        </div>
    );
};

export default AddService;