import './scss/Header.scss'

const Header = () => {
    return (
        <div>
            <h2>Header Testing..</h2>
            <p>Base URL: <code><a href={ import.meta.env.VITE_API_URL } target="_blank">{ import.meta.env.VITE_API_URL }</a></code></p>
        </div>
    )
}

export default Header;
