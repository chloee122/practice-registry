import { useLoaderData, Link } from "react-router-dom";
import type { homeLoaderResults } from "./homeLoader";

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
    <div className="container py-12 space-y-8">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold">The NPM Registry</h1>
        <p className="mx-auto max-w-[600px]">
          The package manager for Javascript. Search and view packages.
        </p>
      </div>
      <div className="grid">{renderedPackages}</div>
    </div>
  );
}

export default HomePage;
