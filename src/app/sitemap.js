const getAllProducts = async () => {
  const URL = `${process.env.NEXTAUTH_URL}/api/servicios`;

  try {
    const res = await fetch(URL, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': 'GET, POST, PUT',
      },
    });

    const datas = await res.json();
    return datas.products;
  } catch (error) {
    console.log(error);
  }
};

export default async function sitemap() {
  const baseUrl = 'https://www.drfranciscorodriguez.mx';
  // Get all products
  const products = await getAllProducts();
  const productUrls =
    products?.map((product) => {
      return {
        url: `${baseUrl}/servicio/${product?._id}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: 'https://www.drfranciscorodriguez.mx/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.drfranciscorodriguez.mx/acerca',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.drfranciscorodriguez.mx/contacto',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.drfranciscorodriguez.mx/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.drfranciscorodriguez.mx/testimonios',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...productUrls,
  ];
}
