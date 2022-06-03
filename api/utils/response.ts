export function handleResponse(response: any) {
  return response?.data;
}

export function handleError(error: any) {
  return error?.data?.message;
}
