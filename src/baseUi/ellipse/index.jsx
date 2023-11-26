import FontAwesome from "react-fontawesome"



const Ellipsis = () => {
  return (
    <div className='w-full h-full bg-white/50 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-tmbdLightBlue'>
        <div className="flex  scale-[0.42] gap-[2px] text-[0.8rem] text-grey-700 pl-[1.8px]">
            <FontAwesome name="circle" />
            <FontAwesome name="circle"/>
            <FontAwesome name="circle"/>
        </div>
      
    </div>
  )
}

export default Ellipsis
