import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Review = () => {
    const [imageUrl, setImageUrl] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const {name,serviceName,description} = {...data}
        const eventData = {
            name: name,
            serviceName:serviceName,
            description: description,
            imageUrl: imageUrl
        }
        fetch('http://localhost:5050/reviews', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(success => console.log(success))

        console.log(eventData);
    };
    const handleImageUpload = (e) => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key' , 'f39a16a13cf484a539dfa24db215224b')
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
            console.log(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return (
        <div className="">
            <div className="card p-5 mt-5">
                <form className="ms-5 " onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control w-75" placeholder="name" defaultValue="test" {...register("name")} />
                        {errors.name && <span>This field is required</span>}

                    </div>
                    <div className="form-group mt-1">
                        <label>Service Name</label>
                        <input className="form-control w-75" placeholder="service /product name" {...register("serviceName", { required: true })} />
                        {errors.serviceName && <span>This field is required</span>}

                    </div>
                    <div className="form-group mt-1">
                        <label>upload an image</label>
                        <input className="form-control" type="file" onChange={handleImageUpload} />
                           
                       </div>
                    <div className="form-group mt-1">
                        <label>your opinion</label>
                           <textarea  n className="form-control" id="" cols="30" rows="10" placeholder="Description *" {...register("description", { required: true })}></textarea>
                       </div>



                    <input className="btn btn-brand mt-3" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Review;