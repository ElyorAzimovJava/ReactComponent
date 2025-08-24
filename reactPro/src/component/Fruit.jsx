export default function Fruit({fruit}){
    return(
        <>

        {
            fruit.price > 200 ?
                <li>{fruit.name} {fruit.price} {fruit.emoji}</li>
                : ""
        }
        </>

    )
}