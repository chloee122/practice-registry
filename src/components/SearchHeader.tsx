import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchHeader() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?text=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>NPM registry</h2>
      <input value={searchTerm} onChange={handleChange} />
    </form>
  );
}

export default SearchHeader;
