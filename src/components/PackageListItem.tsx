import { Link } from "react-router-dom";
import { PackageSummary } from "../api/types/PackageSummary";

interface PackageListItemProps {
  pack: PackageSummary;
}

function PackageListItem({ pack }: PackageListItemProps) {
  const renderedKeywords = (pack.keywords || []).map((keyword, index) => {
    return <p key={index}>{keyword}</p>;
  });

  return (
    <div>
      <div>
        <Link to={`/product/${pack.name}`}>{pack.name}</Link>
        <p>{pack.description}</p>
        <div>{renderedKeywords}</div>
      </div>
      <div>
        <Link to={`/product/${pack.name}`}>View</Link>
      </div>
    </div>
  );
}

export default PackageListItem;
