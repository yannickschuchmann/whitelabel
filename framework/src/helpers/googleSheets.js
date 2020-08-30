import qs from "qs";

export const postFormToSheet = ({ endpoint, data }) =>
  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: qs.stringify(data),
  });
