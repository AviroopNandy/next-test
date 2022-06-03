export function authHeaders(token: string) {
  try {
    const headers = {
      headers: {
        Authorization: token,
        "Content-Type": "Application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    return headers;
  } catch (error) {
    console.log(error);
  }
}
