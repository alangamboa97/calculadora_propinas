import { MenuItem } from "./components/MenuItem";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
function App() {
  const { addItem } = useOrder();
  return (
    <>
      <header className="bg-blue-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Consumos y Propinas
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y4">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className=" border border-dashed border-gray-300 p-5 rounded-lg">
          <h2 className="">Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
