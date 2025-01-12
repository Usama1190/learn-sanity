import { client } from "@/sanity/lib/client";

async function getSanityData() {
  const fetchData = await client.fetch(`*[_type == "student_name"]{name,age}`);

  return fetchData;
}

export default async function Home() {
  const data = await getSanityData();
  console.log(data);

  return (
    <>
      <h1>Sanity</h1>
      { data.map((item: any, index: any) => {
        return (
          <div key={index}>
            <h2>{item.name}</h2>
            <h3>{item.age}</h3>
          </div>
        )
      })}
    </>
  );
}
