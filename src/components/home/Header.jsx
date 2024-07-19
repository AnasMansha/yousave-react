import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    if (searchQuery.trim()) {
      // Navigate to the search results page with the query parameter
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  return (
    <>
      <section className="h-80vh bg-cover bg-center bg-home-slider">
       
      </section>
    </>
  );
};

export default HomeHeader;
