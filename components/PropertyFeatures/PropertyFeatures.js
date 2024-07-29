import { FaBath, FaBed, FaCar, FaDog, FaFontAwesome } from "react-icons/fa";
import numeral from "numeral";

export  const PropertyFeatures = ({
    price,
    bedrooms,
    bathrooms,
    hasParking,
    petFriendly
}) => {
    return <div className="max-w-lg mx-auto my-10 bg-white text-slate-900 p-5 text-center">
        <div className="grid grid-cols-2 mb-4 gap-y-5">
            <div>
                <FaFontAwesome icon={FaBed}/> {bedrooms} bedrooms
            </div>
            <div>
                <FaFontAwesome icon={FaBath}/> {bathrooms} bathrooms
            </div>
            <div>
        {!!petFriendly && 
            <>
            <FaFontAwesome icon={FaDog} /> petFriendly
            </>}
            </div>
            <div>
        {!!hasParking && 
            <>
            <FaFontAwesome icon={FaCar} /> hasParking
            </>}
            </div>
        </div>
        <h3 className="text-5xl font-bold" >
        £{numeral(price).format("0,0")}
        </h3>
     
        </div>
}