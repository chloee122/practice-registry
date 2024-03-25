import { useLoaderData } from "react-router-dom";
import PackageListItem from "../../components/PackageListItem";
import { searchLoaderResult } from "./searchLoader";

function SearchPage() {
  const { searchResults } = useLoaderData() as searchLoaderResult;
  console.log(searchResults);

  const renderedResults = searchResults.map((result) => {
    return <PackageListItem key={result.name} pack={result} />;
  });

  return (
    <div>
      <h2>Search Results</h2>
      {renderedResults}
    </div>
  );
}

export default SearchPage;
