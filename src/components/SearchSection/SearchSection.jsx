/* eslint-disable react/prop-types */
import search from '../../assets/search.svg';
import './SearchSection.css'

const SearchSection = ({ pesquisa, setPesquisa }) => {
  return (
    <section className="searchSession">
      <div className="searchContainer">
        <h1>Funcionários</h1>
        <input
          className="searchEmployee"
          type="text"
          name="searchEmployee"
          id="searchInput"
          placeholder="Pesquisar"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
        <img className="imgSearch" src={search} alt="search" />
      </div>
    </section>
  );
};

export default SearchSection;
