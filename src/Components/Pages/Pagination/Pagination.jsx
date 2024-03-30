const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="mt-4">
            <ul className="flex justify-center">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={`mx-1 px-3 py-3 bg-cover border border-gray-300 rounded-full 
              ${currentPage === number ? 'bg-blue-500 text-white' : 'text-blue-500'} 
              transition ease-in-out duration-300`}
                    >
                        <button
                            onClick={() => onPageChange(number)}
                            className="focus:outline-none"
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
