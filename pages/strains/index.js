import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Strains() {
  const { data, error } = useSwr("/api/strains", fetcher);
  if (!data) return null;
  console.log(data);
  return (
    <div>
      {data.map((strain) => (
        <div>{strain.name}</div>
      ))}
    </div>
  );
}
