import React from "react";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount }) => {
    return (
        <div className="app__exercises-pagination">
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Pagination;
