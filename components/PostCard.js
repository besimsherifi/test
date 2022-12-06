import Link from "next/link"

export default function PostCard ({ post }){
    return (
        <p className={"card"}>
            <a className="card">
                <h3>{post.title} &rarr;</h3>
            </a>
        </p>
    )
}