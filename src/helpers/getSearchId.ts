export default function getSearchId(): Promise<string> {
  return fetch('https://aviasales-test-api.java-mentor.com/search')
    .then((response) => response.json())
    .then((json) => json.searchId);
}
