import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// fetch
const fetchFn = fetch("https://swapi.dev/api/people/");
test("fetches people data", async () => {
  const response = await fetchFn;
  expect(response.ok).toBe(true);
  const data = await response.json();
  expect(data.results).toBeDefined();
  expect(data.results.length).toBeGreaterThan(0);
});
test("renders people list", async () => {
  render(<App />);
  const peopleList = await screen.findByRole("list");
  expect(peopleList).toBeInTheDocument();
  const items = screen.getAllByRole("listitem");
  expect(items.length).toBeGreaterThan(0);
});
