import { useLoaderData } from "react-router-dom";
import { detailLoaderResult } from "./detailLoader";

function DetailPage() {
  const { details } = useLoaderData() as detailLoaderResult;
  return (
    <div>
      <h3>{details.name}</h3>
      <div>
        <h3>Description</h3>
        <p>{details.description}</p>
      </div>

      <div>
        <h3>Maintainers</h3>
        {details.maintainers.map((maintainer) => (
          <p>
            {maintainer.name} - {maintainer.email}
          </p>
        ))}
      </div>

      <div>
        <h3>License</h3>
        <p>{details.license}</p>
      </div>

      <div>
        <h3>Homepage</h3>
        <p>{details.homepage}</p>
      </div>
    </div>
  );
}

export default DetailPage;
