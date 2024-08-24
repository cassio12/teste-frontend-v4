import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./components/map/Map";

function App() {

  const { isLoaded } = useJsApiLoader({
    id: process.env.REACT_APP_GOOGLE_MAPS_ID,
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? ''
  })

// console.log(process.env.REACT_APP_GOOGLE_MAPS_ID)

  return (
    <div className="h-full">
      <header className="bg-stone-200 py-1 shadow-lg z-10 relative">
       <p className="text-5xl ">olololol?</p>
      </header>

      <main className="h-screen w-screen flex flex-row">
        <aside className="bg-stone-200 w-1/4 shadow-lg z-9 relative"></aside>
        <section className="w-auto">
          <Map isLoaded={isLoaded}/>
        </section>
      </main>
    </div>
  );
}

export default App;
