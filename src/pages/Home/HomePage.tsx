import { useLoaderData, Link } from "react-router-dom";
import { homeLoaderResults } from "./homeLoader";

function HomePage() {
  const { featuredPackages } = useLoaderData() as homeLoaderResults;

  const renderedPackages = featuredPackages.map((p) => (
    <div key={p.name}>
      <h3>{p.name}</h3>
      <p>{p.description}</p>
      <div>{p.maintainers.length} Maintainers</div>
      <Link to={`/product/${p.name}`}>View</Link>
    </div>
  ));
  return (
    <div>
      <div>
        <div>
          <h1>The NPM Registry</h1>
          <p>The package manager for Javascript. Search and view packages.</p>
        </div>
        <div>{renderedPackages}</div>
      </div>
    </div>
  );
}

export default HomePage;
