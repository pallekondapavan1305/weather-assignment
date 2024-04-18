import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_URL, options } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        options
      );
      const responseData = await response.json();
      console.log(responseData);
      return {
        options: responseData.data.map((city) => {
          return {
            value: `${city.longitude} ${city.latitude}`,
            label: `${city.name}`,
          };
        }),
      }; // Return an empty array of options in case of an error
    } catch (err) {
      console.error("Error loading options:", err);
      return { options: [] }; // Return an empty array of options in case of an error
    }
  };

  const handleOnchange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="seach for the city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnchange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
