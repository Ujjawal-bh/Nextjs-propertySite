import { useEffect, useState } from "react"
import { Results } from "./Results"
import { Pagination } from "./Pagination"
import { useRouter } from "next/router";
import queryString from 'query-string';
import { Filters } from "./Filters";

export const PropertySearch = () => {
    const [properties, setProperties] = useState([]);
    const [totalResults, settotalResults] = useState([]);
    const pageSize = 3;
    const router = useRouter()
    const search = async () => {
        const { page, hasParking, petFriendly, minPrice, maxPrice } = queryString.parse(window.location.search);
        const filters = {};
        if(maxPrice){
            filters.maxPrice = parseInt(maxPrice);  
        }
        if(minPrice){
            filters.minPrice = parseInt(minPrice);  
        }
        if(hasParking === true){
            filters.hasParking = true;
        }
        if(petFriendly === true){
            filters.petFriendly = true;
        }
        console.log("inside");
        const response = await fetch(`/api/search`, {
            method: "POST",
            body: JSON.stringify({
                page: parseInt(page || "1"),
                ...filters
            }),
        });

        const data = await response.json();
        console.log("SEARCH DATA: ", data);
        setProperties(data.properties)
        settotalResults(data.total)
    }
    const handlePageClick = async (pageNumber) => {
        const {
            petFriendly,
            hasParking,
            minPrice,
            maxPrice,
          } = queryString.parse(window.location.search);
await router.push(`${router.query.slug.join("/")}?page=${pageNumber}&petFriendly=${petFriendly === "true"}&hasParking=${hasParking === "true"}&minPrice=${minPrice}&maxPrice=${maxPrice}`, null, {
    shallow:true,
});
search();
    }
    useEffect(() => {
    search();
    }, [])
    const handleSearch = async ({
        petFriendly,
        hasParking,
        minPrice,
        maxPrice,
      }) => {
        // update our browser url   
        // search
        await router.push(`${router.query.slug.join(
            "/"
        )}?page=1&petFriendly=${!!petFriendly}&hasParking=${!!hasParking}&minPrice=${minPrice}&maxPrice=${maxPrice}`, null, {
            shallow:true,
        });
        search();
        console.log("FILTERS: ",  petFriendly, hasParking, minPrice, maxPrice);
      }
     
    return (
        <div>
            <Filters  onSearch={handleSearch}/>
             <Results  properties={properties}/>
             <Pagination totalPages={Math.ceil(totalResults/pageSize)} onPageClick={handlePageClick}/>
        </div>
        
       
    )
}