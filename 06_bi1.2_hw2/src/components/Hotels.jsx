import useFetch from "../useFetch";

const Hotels = () => {
    const { data, loading, error } = useFetch("http://localhost:3000/hotels")

    return (
        <div>
            <h1>All Hotels</h1>
            <ul>
                {data?.map((hotel) => (
                    <li key={hotel._id}>{hotel.name}</li>
                ))}
            </ul>
        </div>
    )
};

export default Hotels;