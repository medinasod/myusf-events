import React, { Component } from 'react';

class Pager extends Component {

  render() {
    const eventsList = this.props.events;
    const numberPerPage = 5;
    const numberedButtons = [];
    // const pageList = [];
    // let currentPage = 1;
    // const numberOfPages = 1;   // calculates the total number of pages

    const getNumberOfPages = () => Math.ceil(eventsList.length / numberPerPage);
    // const nextPage = () => {
    //     currentPage += 1;
    // };
    // const previousPage = () => {
    //     currentPage -= 1;
    // };
    // const firstPage = () => {
    //     currentPage = 1;
    // };
    // const lastPage = () => {
    //   currentPage = numberOfPages;
    // };
    // const loadList = () => {
    //     let begin = ((currentPage - 1) * numberPerPage);
    //     let end = begin + numberPerPage;
    //     // check();
    // };

    let pages = getNumberOfPages();
    let pageNumber = 0;

    // this.changePage = this.changePage.bind(this);
    //
    // // Handle the pager clicks.
    // const changePage = (num) => {
    //   currentPage = num;
    //   let begin = ((currentPage - 1) * numberPerPage);
    //   let end = begin + numberPerPage;
    //
    // };

    // Build numbered buttons.
    while (pages > 0) {
      pages--;
      ++pageNumber;
      numberedButtons.push(
          <button className="flex-item" key={pageNumber}>
            {pageNumber}
          </button>);
    }


    return (
      <div className="flex-container">{numberedButtons}</div>
    );
  }
}

export default Pager;
