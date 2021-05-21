import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Dispensaries() {
  const { data, error } = useSwr("/api/dispensaries", fetcher);
  if (!data) return null;
  const { stores, currentPage, pageCount } = data;
  console.log(data);
  return (
    <div>
      {stores.map((store) => (
        <div>{store.name}</div>
      ))}
    </div>
  );
}
