import axios from "axios";

export async function updateForm(data) {
  const formData = await axios.post("http://localhost:3000/form", data);
  return formData.data;
}

export async function fetchForm() {
  const url = await axios.get("http://localhost:3000/form/1");

  return url.data;
}
