import passInIcon from "../assets/pass-in-icon.svg"
import { NavLink } from "./nav-link"


export function Header() {
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={passInIcon} />

            <nav className="flex items-center gap-5">
                <NavLink href="/eventos"> Eventos </NavLink>
                <NavLink href="/participantes"> Participante </NavLink>
            </nav>
        </div>
    )
}