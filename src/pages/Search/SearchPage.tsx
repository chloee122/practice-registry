import { useLoaderData, useNavigate } from "react-router-dom";
import { PackageType } from "../../api/types/PackageType";

function SearchPage() {
  const packages = useLoaderData() as PackageType[];
  const navigate = useNavigate();

  const handleClick = (name: string) => {
    navigate(`/product/${name}`);
  };

  const renderedPackages = packages.map((pk, index) => {
    return (
      <div key={index}>
        <div>
          <h3>{pk.package.name}</h3>
          <p>{pk.package.description}</p>
        </div>
        <div>
          {pk.package.keywords?.map((keyword, index) => {
            return <p key={index}>{keyword}</p>;
          })}
        </div>
        <button onClick={() => handleClick(pk.package.name)}>View</button>
      </div>
    );
  });

  return (
    <div>
      <h2>Search Results</h2>
      {renderedPackages}
    </div>
  );
}

export default SearchPage;
