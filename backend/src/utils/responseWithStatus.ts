export const responseWithStatus = (message: any, status: number) => {
  return { "message": message, "status": status }
}