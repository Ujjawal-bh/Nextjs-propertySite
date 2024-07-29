import { useEffect, useState } from "react"
import { Input } from "../../Input"
import queryString from "query-string";
export const Filters = ({onSearch}) => {
    const [petFriendly,setPetFriendly] = useState(false);
    const [hasParking,setHasParking] = useState(false);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const handleSearch = () => {
        onSearch({
            petFriendly,
            hasParking,
            minPrice,
            maxPrice,
        });
    }
    useEffect(() => {
        const {
          petFriendly: petFriendlyInitial,
          hasParking: hasParkingInitial,
          minPrice: minPriceInitial,
          maxPrice: maxPriceInitial,
        } = queryString.parse(window.location.search);
    
        setPetFriendly(petFriendlyInitial === "true");
        setHasParking(hasParkingInitial === "true");
        setMinPrice(minPriceInitial || "");
        setMaxPrice(maxPriceInitial || "");
      }, []);
    return (
    <div className="max-w-5xl mx-auto my-5 flex gap-5 border-solid border-slate-400">
        <div className="flex-1">
        <div>
                <label className="cursur-pointer">hasParking
                <input type="checkbox" checked={hasParking} onChange={() =>setHasParking((value) => !value) } />
                </label>
            </div>
            <div>
            <label className="cursur-pointer">petFriendly
                <input type="checkbox"checked={petFriendly} onChange={() =>setPetFriendly((value) => !value) } />
                </label>
            </div>
            </div>
            <div className="flex-1">
                <span>Min Price</span>
                <Input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            </div>
            <div className="flex-1">
                <span>Max Price</span>
                <Input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            </div>
            <div>
                <div className="btn" onClick={handleSearch}>search</div>
            </div>
        </div>
        )
}