import Link from "next/link";

function Page() {
    return (
        <div>
            <h1> Dashboard Users </h1>
            <ul className="mt-10">
                <li>
                    <Link href="/dashboard/users/1">USer 1</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/2">USer 2</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/3">USer 3</Link>
                </li>
            </ul>
        </div>
    )
}
export default Page;