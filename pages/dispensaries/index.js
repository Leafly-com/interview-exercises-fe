import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Dispensaries() {
  const { data, error } = useSwr("/api/dispensaries", fetcher);

  if (!data) return null;

  const { stores, currentPage, pageCount } = data;

  return (
    <div>
      {stores.map((store) => (
        <div>
          {/*
            {store.coverImage}
            {store.name}
            {store.hasPickupEnabled}
            {store.distanceToUser}
            {store.tagline}
          */}
        </div>
      ))}
    </div>
  );
}
