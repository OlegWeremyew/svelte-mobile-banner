export const getLocationPathStatus = (path: string): boolean => {
  return location.pathname.includes(path);
}
