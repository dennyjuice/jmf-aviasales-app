export default function getSearchId(): Promise<string> {
  return fetch('https://front-test.beta.aviasales.ru/search')
    .then((response) => response.json())
    .then((json) => json.searchId);
}
