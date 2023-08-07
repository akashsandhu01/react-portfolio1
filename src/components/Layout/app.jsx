
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/app"


export default function app() {
  return (
    <div>
        <Navbar />
        <div>
          <Outlet/>
        </div>
        
    </div>
  )
}
