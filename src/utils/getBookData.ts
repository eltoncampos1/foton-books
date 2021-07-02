export function getBookData(data:any) {
  return data && data[0] ? data[0].volumeInfo : null;
}
export function getBookarrayData(data:any) {
  return data ? data : null;
}