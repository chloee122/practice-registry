import { useLoaderData, Link } from "react-router-dom";
import { homePageLoaderResults } from "./homePageLoader";

function HomePage() {
  const { fixedPackagesDetails } = useLoaderData() as homePageLoaderResults;

  const renderedPackages = fixedPackagesDetails.map((pk) => (
    <div>
      <h3>{pk.name}</h3>
      <p>{pk.description}</p>
      <Link to={`/product/${pk.name}`}>
        <button>View</button>
      </Link>
    </div>
  ));
  return <div>{renderedPackages}</div>;
}

export default HomePage;
