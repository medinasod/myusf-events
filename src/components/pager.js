import React, { Component } from 'react';

class Pager extends Component {

  render() {
    const eventsList = this.props.eventsList;
    const numberPerPage = 5;
    const numberedButtons = [];
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
    // Build numbered buttons.
    while (pages > 0) {
      pages--;
      ++pageNumber;
      numberedButtons.push(<td><button>{pageNumber}</button></td>);
    }


    return (
      <table>
        <tbody>
          <tr>
            {numberedButtons}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Pager;
