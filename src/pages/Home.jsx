import React from 'react'
import Button from '../components/Button'
import { MdCall, MdAlternateEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Title from '../components/Title';
import Map from '../components/Map';
import Footer from '../components/Footer';

const Home = (props) => {

    const days = [
        {id: 1, day: "MONDAY", time: "09:00 - 18:00"},
        {id: 2, day: "TUESDAY", time: "09:00 - 18:00"},
        {id: 3, day: "WEDNESDAY", time: "09:00 - 18:00"},
        {id: 4, day: "THURSDAY", time: "09:00 - 18:00"},
        {id: 5, day: "FRIDAY", time: "09:00 - 18:00"},
        {id: 6, day: "SATURDAY", time: "closed"},
        {id: 7, day: "SUNDAY", time: "closed"},
    ];

  return (
    <div className="landing-page">

        <div className="cover-img flex flex-col justify-center items-center">
            <h1 className="text-6xl mb-12 font-bold text-white">{props.title}</h1>
            <div className="landing-button flex flex-row gap-x-5">
                <Button buttonText={'Show on map'} variant="primary" />
                <Button buttonText={'Book Now'} variant="primary" />
            </div>
        </div>

        <div className="section-one w-[90%] mx-auto">

            <div className="section-title flex flex-row justify-between mt-10 mb-10">
                <p className="text-pink-500 border-b-4 border-pink-500 pb-4 text-sm lg:text-base font-semibold">About Us</p>
                <p className="text-sm lg:text-base font-semibold">Reviews</p>
                <p className="text-sm lg:text-base font-semibold">Map</p>
            </div>

            <div className="section-contents grid grid-cols-3 gap-16 mt-10">

                <div className="opening-hours">
                    <h1 className="text-2xl font-semibold">Opening Hours</h1>
                    {days.map((day) => (
                        <div key={day.id} className="hours-days flex justify-between mt-5">
                            <p>{day.day}</p>
                            <p>{day.time}</p>
                        </div>
                    ))}
                </div>

                <div className="opening-hours">
                    <h1 className="text-2xl font-semibold">Dangotey</h1>
                </div>

                <div className="opening-hours">
                    <h1 className="text-2xl font-semibold">Contact us</h1>
                    <div className="contact-details mt-5">
                        <div className="flex items-center mb-3 gap-5">
                            <p><MdCall /></p>
                            <p>+233548318880</p>
                        </div>
                        <div className="flex items-center mb-3 gap-5">
                            <p><MdAlternateEmail /></p>
                            <p>bobalaska70@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <p><CiLocationOn /></p>
                            <p>90 Zeil, Frankfurt, DE, 60313</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="reviews mt-10 flex flex-col">
                <Title lead={'Reviews'} />
                <p className="mb-10 p-4 rounded-md">There are no reviews yet. You are welcome to add your review</p>
                <div className="flex justify-center">
                    <Button buttonText={'All reviews'} variant="primary" />
                </div>
            </div>

            <div className="location mt-10 flex flex-col">
                <Title lead={'Our location'} />
                <Map />
            </div>

            <Footer footerOne={'Home'} footerTwo={'Reviews'} footerThree={'My Bookings'} />

        </div>

    </div>
  )
}

export default Home