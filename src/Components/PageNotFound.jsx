import { Link } from "react-router-dom"

export default function PageNotFound() {
    return (
        <section>
        <h2>404 Page Not Found</h2>
        <h3>Sorry, we couldn't find that page</h3>
        <p>Please check the page address and try again</p>
        <nav>
            <Link to="articles">Back to articles</Link>
        </nav>
        </section>
    )
}