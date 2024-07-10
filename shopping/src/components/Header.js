import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/Bharath's Logo.jpg"

export const Header = () => {
  return (
          <header >
            <div className="logo">
              <img src={ Logo } alt="" />
              <p>Shopping</p>
            </div>
          </header>
      )
}
