import apiUrl from "../Config/apiUrl";

export default async (url, method, data, isFile = false) => {
  let response = await fetch(`${apiUrl}${url}`, {
    method,
    credentials: "include",
    headers: isFile
      ? undefined
      : {
          "Content-Type": "application/json",
        },

    body: isFile? data: data ? JSON.stringify(data) : undefined,
  });
  return response.json();
};
