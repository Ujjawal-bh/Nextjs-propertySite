import Link from "next/link";
import { FaHouseUser,FaHeart } from "react-icons/fa";
import { ButtonLink } from "components/ButtonLink/ButtonLink";
export const MainMenu = ({items, callToActionLabel, callToActionDestination}) => {
console.log("MainMenu",items);
    return(
        <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex">
                <div className="py-4 pl-5 flex text-pink-600">
                    <FaHouseUser size={30}/>
                    <FaHeart size={30} />
                </div>
        <div className="flex flex-1 justify-end">
            {(items || []).map((item) =>(
                <div key={item.id} className="hover:bg-slate-700 cursor-pointer relative group">
                    <div>
                      <Link href={item.destination} className="p-5 block">
                        {item.label}
                        </Link>  
                    </div>
                    {!!item.subMenuItems?.length && (<div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3"> 
                    {item.subMenuItems.map(sunMenuItem => (
                        <Link key={sunMenuItem.id} href={sunMenuItem.destination} className="block whitespace-nowrap p-5 bg-slate-700">{sunMenuItem.label}</Link>

                    ) )}
                    </div>
                    )}

                </div>
            ))}
            <div className="ml-3 my-auto"></div>
            <ButtonLink destination={callToActionDestination} label={callToActionLabel}/>
            
         </div>
          
    </div>
    );

};