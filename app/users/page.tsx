export default async function UsersPage() {
  let users: any = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());

  return (
    <>
      <h1>Users</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {users.map((user: any, key: number) => {
          return (
            <div style={{ display: "flex", flexDirection: "row" }} key={key}>
              {user.name} -{" "}
              <a href={`/users/${encodeURIComponent(user.id)}`}>Details</a>
            </div>
          );
        })}
      </div>
    </>
  );
}
