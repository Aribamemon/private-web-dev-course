import { RouterProvider } from "react-router-dom"
import appRouter from "./routes"

function App() {
  
  return (
    <>

    <div>

      <RouterProvider router={appRouter} />
    </div>
   {/* <div>
    <h1 className="bg-primary text-white font-interbold" >Hello anum</h1>
    <p className="font-intersemibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur iure veritatis repellat omnis sapiente quod? Cumque voluptates iste pariatur nostrum commodi, consequatur officia, nam earum aut dolorem magnam delectus tenetur!</p>
   </div> */}
    </>
  )
}

export default App
