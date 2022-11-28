import Link from "next/link";

export default async function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Some content</p>
      <Link href={"/users"}>Users</Link>
    </div>
  );
}
