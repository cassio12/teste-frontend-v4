import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./components/map/Map";
import {  useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";

function App() {
  const [equipments, setEquipiments] = useState(useSelector((state: RootState)=> state.equipments.equipimentsList))

  const { isLoaded } = useJsApiLoader({
    id: process.env.REACT_APP_GOOGLE_MAPS_ID,
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? ''
  })


  return (
    <div className="h-full">
      <header className="bg-stone-200 py-1 shadow-lg z-10 relative h-16">
      </header>

    <main className="h-screen w-screen flex flex-row ">
        <aside className="bg-stone-200 w-1/4 shadow-lg z-9 relative">
          <h1 className="text-5xl">Maquinas</h1>
          <ul>
            {equipments.map((item) => {
              return (<li className="p-2">{item.name}</li>)
            })}
          </ul>
        </aside>
        <section >
          <Map isLoaded={isLoaded}/>
        </section>
      </main>
    </div>
  );
}

export default App;
