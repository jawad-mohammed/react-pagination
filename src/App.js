import React from 'react';
import './style.css';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import jsonData from './FakeData.json';
const App = () => {
  const [users, setUsers] = useState(jsonData.slice(0, 40));
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, id) => {
      return (
        <div key={id}>
          {user.id}
          {user.firstName}
          {user.lastName}
          {user.email}
          {user.password} <hr />
        </div>
      );
    });
  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      {displayUsers}
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBts'}
        previosLinkClassName={'previousBtn'}
        nextLinkClassName={'nextBtn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </>
  );
};

export default App;
