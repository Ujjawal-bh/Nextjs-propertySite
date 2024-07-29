export const Pagination = ({totalPages, onPageClick}) => {
    return (<div className="max-w-5xl mx-auto justify-center mb-10 flex gap-2">
        {Array.from({length: totalPages}).map((_, i)=>(
           <div key={i} className="btn" onClick={()=>{
            onPageClick(i+1);
           }}>
           {i + 1}
           </div>
        ))}
        </div>
    )
}