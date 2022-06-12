import { useState } from "react";

export const FilterProfiles = ({ profiles }) => {
  const [filter, setFilter] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
    setFilteredProfiles(
      profiles.filter((profile) =>
        // profile.name.toLowerCase().includes(e.target.value.toLowerCase())
        profile.gender.includes(e.target.value)
      )
    );
  };

  return (
    <div>
      <select onChange={handleFilter}>
        <option value="woman">Kobieta</option>
        <option value="man">Mężczyzna</option>
        <option value="all">Wszyscy</option>
      </select>
      {/* <input type="text" placeholder="Search" onChange={handleFilter} /> */}
      <ul>
        {filteredProfiles.map((profile) => (
          <li key={profile.id}>{profile.gender}</li>
        ))}
      </ul>
    </div>
  );
};
