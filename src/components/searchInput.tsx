import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [term, setTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?text=${term}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={term} onChange={handleChange} />
    </form>
  );
}

export default SearchInput;
