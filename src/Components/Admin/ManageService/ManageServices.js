import React, { useEffect, useState } from 'react';
import SideBar from '../../DashBoard/SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ManageServices = () => {
    const [serviceList, setServiceList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/services')
            .then(res => res.json())
            .then(data => {
                setServiceList(data)
                console.log(data);
            })
    }, [])
    const handleClick = (id) => {
        console.log(id);
        fetch(`https://sheltered-citadel-15796.herokuapp.com/deleted/${id}` , {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data))
    
    }
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10 card">
                <table className="table table-borderless">
                    <thead className="bg-light">
                        <tr>
                            <th className="text-secondary text-left" scope="col">Sr No</th>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">$ price</th>
                            <th className="text-secondary" scope="col">Id</th>
                            <th className="text-secondary" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            serviceList.map((services, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{services.serviceName}</td>
                                    <td>${services.price}</td>
                                    <td>{services._id}</td>
                                    <td>
                                        <button onClick={(() => handleClick(services._id))} className="btn btn-brand">
                                            <FontAwesomeIcon icon={faTrash} />
                                                <span className="ms-2">delete</span>
                                        </button>
                                    </td>

                                </tr>
                            )
                        }

                    </tbody>


                </table>
                <hr />

            </div>
        </div>
    );
};

export default ManageServices;;