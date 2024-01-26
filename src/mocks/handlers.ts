import { HttpResponse, graphql, http } from "msw";

export const formData = [
  {
    fullname: "William Pereira Terra",
    email: "william.p.terra@gmail.com",
    country: "Barbados",
    city: "Pine Housing Estate",
    referralcode: "aaa-111",
    myowncar: true,
    cartype: "SUV /Van",
  },
];

const jsonPlaceHolder = graphql.link("https://jsonplaceholder.ir/graphql");


export const handlers = [
  http.get("http://localhost:3000/form/8549", () => {
    return HttpResponse.json(formData, { status: 200 });
  }),

  jsonPlaceHolder.query("posts", () => {
    return HttpResponse.json({
      data: { formData },
    });
  }),
];
