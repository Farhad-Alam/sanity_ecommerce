export default {
  name: "product",
  titlle: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      titlle: "Image",
      type: "array",
      of: [{ type: "image" }],
      hotspot: true,
    },
    {
      name: "price",
      titlle: "Price",
      type: "number",
    },
    {
      name: "slug",
      titlle: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "name",
      titlle: "Name",
      type: "string",
    },
    {
      name: "details",
      titlle: "Details",
      type: "string",
    },
  ],
};
