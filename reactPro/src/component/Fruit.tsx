export default function Fruit() {
   const fruits = ["Apple", "Pineapple","Grace","Banana"]

    return (
        <div>
     <ul>
         {fruits.map(fruit => (
             <li key={fruit}>{fruit}</li>
         ))}
     </ul>
        </div>
    )
}