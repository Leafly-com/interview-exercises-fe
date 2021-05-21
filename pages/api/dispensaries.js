import dispensaries from "./stub/dispensaries.json";

export default async (req, res) => {
  console.log(dispensaries);

  res.json(dispensaries);
};
