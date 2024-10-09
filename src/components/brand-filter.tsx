const BrandFilter = () => {
  return (
    <div className="flex gap-3 items-center">
      <label htmlFor="brandFilter">Brand:</label>

      <select className="block" name="brandFilter" id="brandFilter">
        <option value="All">All</option>
      </select>
    </div>
  );
};
export default BrandFilter;
