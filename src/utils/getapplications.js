const getapplications = async () => {
  const url = process.env.URL;
  const res = await fetch(`${url}/api/appliedjobs`);
  const data = await res.json();
  return data;
};

export default getapplications;
