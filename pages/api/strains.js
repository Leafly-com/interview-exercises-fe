export default async (req, res) => {
  const query = `?take=50&page=${req.page || 1}`;
  await fetch(
    "https://consumer-api.leafly.com/api/strains/v1/?take=50&page=1"
  ).then((response) =>
    response.json().then((data) => {
      res.json(data.data);
    })
  );
};
