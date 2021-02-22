import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchImage = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchImages = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your images</label>
          <input type="text" ref={searchValue} onChange={searchImages} />
        </div>
      </form>
    </section>
  );
};

export default SearchImage;
