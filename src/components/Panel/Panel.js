//Sort and filter panel
import "./Panel.css";
const Panel = (props) => {
  const filterCheaperThan50 = (e) => {
    if (e.target.checked) props.filterCheaperThan(50);
    else props.removeFilter();
  };

  return (
    <div className="sort_panel">
      <div>
        <input type="checkbox" onClick={filterCheaperThan50}></input>
        <span className="bold_text">Cheaper than 50kr</span>
      </div>

      <div>
        Sortera pa:{" "}
        <select
          className="bold_text"
          onChange={(e) => props.sortProducts(e.target.value)}
        >
          <option value="most_relevant" className="bold_text">
            Most relevanta
          </option>
          <option value="most_expensive" className="bold_text">
            Most expensive
          </option>
          <option value="least_expensive" className="bold_text">
            Least expensive
          </option>
          <option value="highest_rated" className="bold_text">
            Highest rated
          </option>
          <option value="lowest_rated" className="bold_text">
            Lowest rated
          </option>
        </select>
      </div>
    </div>
  );
};

export default Panel;
