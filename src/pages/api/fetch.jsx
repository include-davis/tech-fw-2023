export default async function handler(req, res) {
  const { pokemon } = req.query;

  try {
    // get data from pokeapi & convert to json
    const api = pokemon
      ? `https://pokeapi.co/api/v2/pokemon?${pokemon}`
      : `https://pokeapi.co/api/v2/pokemon`;

    const data = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // console.log(data);

    const responseData = await data.json();

    // console.log(responseData);

    res.status(200).json({
      ok: true,
      data: responseData,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      errorText: res.statusText,
    });
  }
}
