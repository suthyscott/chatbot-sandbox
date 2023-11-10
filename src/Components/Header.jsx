import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className='bg-gray-200 h-[10vh] w-full flex justify-between items-center p-10'>
      <h1>Website</h1>
      <nav className="flex w-1/2 justify-evenly">
        <NavLink to='/' className='text-orange-600'>Home</NavLink>
        <NavLink to='/about' className='text-orange-600'>About Us</NavLink>
        <NavLink to='/products' className='text-orange-600'>Products</NavLink>
      </nav>
    </div>
  )
}

export default Header