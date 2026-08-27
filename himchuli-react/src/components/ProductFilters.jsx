export default function ProductFilters({
  categories,
  activeCategory,
  query,
  onCategoryChange,
  onQueryChange,
  resultCount,
}) {
  return (
    <div className="catalogue-tools">
      <label className="search-field">
        <span className="material-symbols-outlined" aria-hidden="true">
          search
        </span>
        <span className="sr-only">Search products</span>
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search equipment by name"
        />
      </label>

      <div className="filter-chips" aria-label="Filter by product category">
        <button
          type="button"
          className={activeCategory === 'all' ? 'is-active' : ''}
          onClick={() => onCategoryChange('all')}
        >
          All products
        </button>
        {categories.map((category) => (
          <button
            type="button"
            className={activeCategory === category.slug ? 'is-active' : ''}
            key={category.slug}
            onClick={() => onCategoryChange(category.slug)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <p className="catalogue-result-count" aria-live="polite">
        {resultCount} {resultCount === 1 ? 'product' : 'products'} found
      </p>
    </div>
  )
}
