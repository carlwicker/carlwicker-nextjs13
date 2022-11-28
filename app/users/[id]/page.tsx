export default async function UserDetailsPage({ params }: any) {
  let user: any = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  ).then((response) => response.json());

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>
        [{user.id}] {user.name} ({user.username})
      </h1>

      <a href={`mailto:${user.email}`}>{user.email}</a>

      <div>{user.address.street}</div>
      <div>{user.address.suite}</div>
      <div>{user.address.city}</div>
      <div>{user.address.zipcode}</div>

      <div>
        {user.address.geo.lat}, {user.address.geo.lng}
      </div>

      <div>{user.phone}</div>
      <a href={`http://${user.website}`} target="_blank">
        {user.website}
      </a>
      <div></div>
      <h2>{user.company.name}</h2>
      <div>{user.company.catchPhrase}</div>
      <div>{user.company.bs}</div>
    </div>
  );
}
