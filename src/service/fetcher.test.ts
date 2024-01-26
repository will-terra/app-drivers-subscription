import * as fetchService from "./fetcher";

const formData = {
  id: "8549",
  fullname: "William Pereira Terra",
  email: "william.p.terra@gmail.com",
  country: "Barbados",
  city: "Pine Housing Estate",
  referralcode: "aaa-111",
  myowncar: true,
  cartype: "SUV /Van",
};

describe("get and post", () => {
  it("is posting", async () => {
    const data = await fetchService.updateForm(formData);
    expect(data.id).toBe("8549");
  });

  it("is getting", async () => {
    const axiosSpy = jest.spyOn(fetchService, "fetchForm");
    const data = await fetchService.fetchForm();
    expect(data.id).toBe("1");
  });

  it("to throw an error on post", async () => {
    const postError = await fetchService.updateForm([1, 2, 3]);

    expect(postError.status).not.toBe("200");
  });
});
