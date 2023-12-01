import logoImg from "../assets/logo-1446293_640.png";

export default function Header() {
    return (
        <header>
            <img id="logo" src={logoImg} alt="logo" />
            <h2 id="title">Contacts</h2>
        </header>
    )
}