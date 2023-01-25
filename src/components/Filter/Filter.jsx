import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return <input type="tel" name="filter" onChange={handleFilterChange}></input>;
};
export default Filter;
