import { useState } from "react";

const AddHotelForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        location: "",
        rating: "",
        website: "",
        phoneNumber: "",
        checkInTime: "",
        checkOutTime: "",
        amenities: "",
        priceRange: "",
        reservationsNeeded: "",
        isParkingAvailable: "",
        isWifiAvailable: "",
        isPoolAvailable: "",
        isSpaAvailable: "",
        isRestaurantAvailable: "",
        photos: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevState) => ({...prevState, [name]: name === "rating" ? parseInt(value) : value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await fetch('http://localhost:3000/hotels',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                }
            );
            if(!response.ok){
                throw 'Failed to add Hotel.'
            }
            const data = await response.json();
            console.log("Added Hotel", data)
        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>    
                <br />
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <br /><br />
                <label>Category:</label>
                <br />
                <input type="text" name="category" value={formData.category} onChange={handleChange} />
                <br /><br />
                <label>Location:</label>
                <br />
                <input type="text" name="location" value={formData.location} onChange={handleChange} />
                <br /><br />
                <label>Rating:</label>
                <br />
                <input type="number" name="rating" value={formData.rating} onChange={handleChange} />
                <br /><br />
                <label>Website:</label>
                <br />
                <input type="text" name="website" value={formData.website} onChange={handleChange} />
                <br /><br />
                <label>Phone Number:</label>
                <br />
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                <br /><br />
                <label>CheckIn Time:</label>
                <br />
                <input type="text" name="checkInTime" value={formData.checkInTime} onChange={handleChange} />
                <br /><br />
                <label>CheckOut Time:</label>
                <br />
                <input type="text" name="checkOutTime" value={formData.checkOutTime} onChange={handleChange} />
                <br /><br />
                <label>Amenities:</label>
                <br /><br />
                <input type="text" name="amenities" value={formData.amenities} onChange={handleChange} />
                <br /><br />
                <label>Price Range:</label>
                <br />
                <input type="text" name="priceRange" value={formData.priceRange} onChange={handleChange} />
                <br /><br />
                <label>Reservations Needed:</label>
                <input type="checkbox" name="reservationsNeeded" value={formData.reservationsNeeded} onChange={handleChange} />
                <br /><br />
                <label>Is Parking Available:</label>
                <input type="checkbox" name="isParkingAvailable" value={formData.isParkingAvailable} onChange={handleChange} />
                <br /><br />
                <label>Is WiFi Available:</label>
                <input type="checkbox" name="isWifiAvailable" value={formData.isWifiAvailable} onChange={handleChange} />
                <br /><br />
                <label>Is Pool Available:</label>
                <input type="checkbox" name="isPoolAvailable" value={formData.isPoolAvailable} onChange={handleChange} />
                <br /><br />
                <label>Is Spa Available:</label>
                <input type="checkbox" name="isSpaAvailable" value={formData.isSpaAvailable} onChange={handleChange} />
                <br /><br />
                <label>Is Restaurant Available:</label>
                <input type="checkbox" name="isRestaurantAvailable" value={formData.isRestaurantAvailable} onChange={handleChange} />
                <br /><br />
                <label>Photos:</label>
                <br />
                <input type="text" name="photos" value={formData.photos} onChange={handleChange} />
                <br /><br />
                <button type="submit">Submit</button>
            </form>        
        </>
    )

}

export default AddHotelForm;