import Fruit from "./Fruit"
export default function Fruits() {
  // const fruits = ["Apple", "Pineapple","Grace","Banana"]
    const fruits = [
        {name : "Apple", price : 200 , emoji : "🍎"},
        {name : "Pineapple", price : 210 , emoji : "🍍"},
        {name : "Grace", price : 240 , emoji : "🍇"},
        {name : "Banana", price : 190 , emoji : "🍌"},
        {name : "Mango", price : 235 , emoji : "🥭"},

    ]


    return (
        <div>
     <ul>
         {fruits.map(fruit => (
             fruit.price > 200 ? <Fruit  key = {fruit.name} fruit={fruit} />:""
         ))}
     </ul>
        </div>
    )
}