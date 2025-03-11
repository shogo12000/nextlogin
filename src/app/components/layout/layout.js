import Nav from "../nav/nav";


export default function LayoutComponent({ children }) {
    return (
        <main>
            <Nav />
            {children}
        </main>
    )
}