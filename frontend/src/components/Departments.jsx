import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Departments = () => {
    const departmentsArray = [
        {
            name: "Pediatrics",
            imageUrl: "/departments/pedia.jpg",
        },
        {
            name: "Orthopedics",
            imageUrl: "/departments/ortho.jpg",
        },
        {
            name: "Cardiology",
            imageUrl: "/departments/cardio.jpg",
        },
        {
            name: "Neurology",
            imageUrl: "/departments/neuro.jpg",
        },
        {
            name: "Oncology",
            imageUrl: "/departments/onco.jpg",
        },
        {
            name: "Radiology",
            imageUrl: "/departments/radio.jpg",
        },
        {
            name: "Physical Therapy",
            imageUrl: "/departments/therapy.jpg",
        },
        {
            name: "Dermatology",
            imageUrl: "/departments/derma.jpg",
        },
        {
            name: "ENT",
            imageUrl: "/departments/ent.jpg",
        },
        {
            name: "Gastroenterology",
            imageUrl: "/departments/gastro.png",
        },
        {
            name: "Pulmonology",
            imageUrl: "/departments/pulmon.jpg",
        },
        {
            name: "Endocrinology",
            imageUrl: "/departments/Endo.jpg",
        },
        {
            name: "Psychiatry",
            imageUrl: "/departments/Psych.jpg",
        },
        {
            name: "Urology",
            imageUrl: "/departments/Urol.jpg",
        },
        {
            name: "Obstetrics & Gynecology",
            imageUrl: "/departments/Obst.jpg",
        },
        {
            name: "Anesthesiology",
            imageUrl: "/departments/Anes.jpg",
        },
        {
            name: "Ophthalmology",
            imageUrl: "/departments/Opht.jpg",
        },
    ];
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
            slidestoslide: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidestoslide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidestoslide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidestoslide: 1
        }
    };
    return (
        <div className='container departments'>
            <h2>Departments</h2>
            <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
                {
                    departmentsArray.map((depart, index) => {
                        return (
                            <div className='card' key={index}>
                                <div className="depart-name">{depart.name}</div>
                                <img src={depart.imageUrl} alt={depart.name} />
                            </div>
                        );
                    })
                }
            </Carousel>
        </div>
    )
}

export default Departments
