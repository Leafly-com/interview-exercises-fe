import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Dispensaries() {
  const { data, error } = useSwr("/api/dispensaries", fetcher);

  if (!data) return null;

  const { stores, currentPage, pageCount } = data;

  return (
    <>
      <div className="store-list">
        {stores.map((store) => (
          <div className="store">
            <h2 className="store__name">{store.name}</h2>
            <div className="store__pickup">Pickup Enabled</div>
            <div className="store__tagline">{store.tagline}</div>
          </div>
        ))}
      </div>

      <style jsx>
        {`
          .store-list {
            background-color: lightgray;
            padding: 20px;
          }

          .store {
            background-color: white;
            border-radius: 4px;
            font-size: 14px;
            line-height: 1.4;
            margin-bottom: 16px;
            padding: 16px;
            width: 400px;
          }

          .store__name {
            color: forestgreen;
            font-size: 20px;
            margin: 0;
          }

          .store__pickup {
            color: tomato;
          }

          .store__tagline {
            color: slategray;
            margin-top: 10px;
          }
        `}
      </style>
    </>
  );
}
