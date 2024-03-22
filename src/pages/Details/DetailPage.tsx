import { useLoaderData } from "react-router-dom";
import { detailPageLoaderResult } from "./detailPageLoader";

function DetailPage() {
  const { packageDetails } = useLoaderData() as detailPageLoaderResult;
  return (
    <div>
      <div>
        <h3>{packageDetails.name}</h3>
        <p>{packageDetails.description}</p>
      </div>

      <div>
        <h3>Maintainers</h3>
        {packageDetails.maintainers.map((maintainer) => (
          <p>
            {maintainer.name} - {maintainer.email}
          </p>
        ))}
      </div>

      <div>
        <h3>License</h3>
        <p>{packageDetails.license}</p>
      </div>

      <div>
        <h3>Homepage</h3>
        <p>{packageDetails.homepage}</p>
      </div>
    </div>
  );
}

export default DetailPage;
