import qs from "qs";
const FREE_TRIAL_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwJBcYrtIoU5oEThnYgxO7cDb2vX3xukk4VDJtmB_lO2_hf416M/exec";

const postFormToSheet = ({ endpoint, data }) =>
  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: qs.stringify(data),
  });

export const postFreeTrial = (data) =>
  postFormToSheet({ endpoint: FREE_TRIAL_ENDPOINT, data });
