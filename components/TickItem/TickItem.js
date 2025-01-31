import { FaCircleNotch, FaFontAwesome } from "react-icons/fa"

export const TickItem = ({children}) => {
    return <div className="grid grid-cols-[50px_1fr] gap-3">
        <div className="text-3xl text-green-500 flex justify-center items-center">
        <FaFontAwesome icon={FaCircleNotch}/>
        </div>
        <div>
{children}
        </div>
        </div>
}