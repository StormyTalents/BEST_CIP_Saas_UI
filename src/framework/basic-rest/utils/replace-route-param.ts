export const replaceRouteParam = (
  route: string,
  paramMap: Record<string, string | number>
) => {
  const fetchUrl = Object.entries(paramMap).reduce((str, [name, value]) => {
    return str.replace(`[${name}]`, `${value}`);
  }, route);
  return fetchUrl;
};
