import React from 'react';
import smartPhone from '../../../icons/smartphone.png';
import camera from '../../../icons/camera.png';
import computer from '../../../icons/computer.png';
import controller from '../../../icons/console.png';
import tablet from '../../../icons/tablet.png';
import videoCamera from '../../../icons/video-camera .png';
import RepairDetails from '../RepairDetails/RepairDetails';

const repairData = [
    {   id: 1,
        title: 'MOBILE PHONES',
        description: 'Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.',
        icon: smartPhone
    },
    {   id: 2,
        title: 'PHOTO CAMERAS',
        description: 'Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.',
        icon: camera
    },
    {
        id: 3,
        title: 'COMPUTERS',
        description: 'Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.',
        icon: computer
    },

    {
        id: 4,
        title: 'TABLETS',
        description: 'Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.',
        icon: tablet
    },
    {
        id: 5,
        title: 'VIDEO CAMERAS',
        description: 'Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.',
        icon: videoCamera
    },
    {
        id: 6,
        title: 'GAME CONSOLES',
        description: 'Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.',
        icon: controller
    },
]

const Repair = () => {


    return (
        <section style={{background: "#FFFFFF"}} className="mt-3">
            <h1 m-5 className="text-center">WE REPAIR</h1>
            <div className="row mt-5">
                {
                    repairData.map(data => <RepairDetails data={data}></RepairDetails> )
                }
            </div>
            <hr/>
          
        </section>
    );
};

export default Repair;