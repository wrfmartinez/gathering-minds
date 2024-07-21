import { Link } from "react-router-dom";
import gmLogo from "../assets/gatheringminds.svg";

const Nav = () => {
  return (
    <nav className="nav flex justify-between items-center p-3 pl-4 border-b-[1px]">
      <div className="nav-brand">
        <Link className="flex gap-0.2 items-center" to="/">
          <img className="w-[38px]" src={gmLogo} alt="gathering minds logo" />
          <h2 className="nav-brand-name hidden md:block text-[#ff5131] text-2xl font-semibold">athering Minds</h2>
        </Link>
      </div>
      <ul className="nav-links flex gap-5 text-sm md:text-base">
        {/* !! all links direct to homepage. change links to appropriate page once implemented !! */}
        <li className="nav-link-item">
          <Link className="nav-link hover:opacity-60 duration-100" to="/">Who We Are</Link>
        </li>
        <li className="nav-link-item">
          <Link className="nav-link hover:opacity-60 duration-100" to="/">Features</Link>
        </li>
        <li className="nav-link-item">
          <Link className="nav-link text-white bg-slate-500 hover:bg-slate-400 duration-200 rounded-full p-2.5" to="/">You're Invited</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;