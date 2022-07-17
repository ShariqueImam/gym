import Image from "next/image"
const cardStyle ={
    card:'rounded-lg px-8 py-2 my-3 mx-3 flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 cursor-pointer transition duration-[400ms] hover:border-orange-700 border-2 border-transparent ',
    smallHeading:'text-2xl md:text-2xl flex-1',
}

export const startCard =({cardText,imgUrl})=>{
    return (
        // make the container of the card to display 'flex or flex-wrap'
        <div className={cardStyle.card}>
          <h3 className={cardStyle.smallHeading}>{cardText}</h3>
          <Image src={imgUrl} width={120} height={160} />
        </div>
    )
}