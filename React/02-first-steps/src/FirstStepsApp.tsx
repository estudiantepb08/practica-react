import { MyAwesomeApp } from "./MyAwesomeApp";
import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCar {
  productName: string;
  quantity: number;
}

const itemInCar: ItemInCar[] = [
  { productName: 'Nintendo Switch 2', quantity: 1 },
  { productName: 'Pro Controller', quantity: 2 },
  { productName: 'Super Smash', quantity: 3 },
]

export function FirstStepsApp() {
  return (
    <>
      <h2>Hello World!</h2>
      <p>My first React app.</p>
      <button>Click me</button>
      <div>
        <h2>Hola dentro de un div </h2>
      </div>
      <hr />
      <h1>Carrito de Compras</h1>
      {
        itemInCar.map(({ productName, quantity }) => (
          <ItemCounter key={productName} name={productName} quantity={quantity} />
        ))
      }
      <hr />
      <MyAwesomeApp />
    </>
  )
}