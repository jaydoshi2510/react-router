import { useParams } from "react-router-dom"

export function Book() {
    const { id } = useParams();
    return <h1>My Favourite Book {id}!</h1>
}