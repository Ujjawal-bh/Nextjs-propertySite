import Image from "next/image"
import Link from "next/link"
import numeral from "numeral"
import { FaBath, FaBed, FaCar, FaDog, FaFontAwesome,FontAwesomeIcon } from "react-icons/fa"

export const PropertyCard = ({
    title,
    destination,
    image,
    bedrooms,
    bathrooms,
    price,
    hasParking,
    petFriendly
}) =>{

return  <Link href={destination} className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200">
     <div className="flex w-full">
        <Image
          src={image}
          height="200"
          width="300"
          objectFit="cover"
          alt=""
        />
      </div>
      <div className="mt-3 text-lg font-bold">{title}</div>
      <div className="text-lg">£{numeral(price).format("0,0")}</div>
      <div className="flex justify-between text-sm mt-3">
        <div>
          <FaFontAwesome icon={FaBath} />
          <span className="pl-2">{bathrooms} bathrooms</span>
        </div>
        <div>
          <FaFontAwesome icon={FaBed} />
          <span className="pl-2">{bedrooms} bedrooms</span>
        </div>
      </div>
      {(!!hasParking || !!petFriendly) && (
        <div className="flex justify-between text-sm mt-3">
          <div>
            {!!hasParking && (
              <>
                <FaFontAwesome icon={FaCar} /> parking available
              </>
            )}
          </div>
          <div>
            {!!petFriendly && (
              <>
                <FaFontAwesome icon={FaDog} /> pet friendly
              </>
            )}
          </div>
        </div>
      )}
</Link>
}