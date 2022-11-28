import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <nav>
          <Link href="/">Home</Link> | <Link href={"/users"}>Users</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
