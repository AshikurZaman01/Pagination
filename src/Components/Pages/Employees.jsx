import { useState } from "react";
import Employee from "./Employee";
import Pagination from "./Pagination/Pagination";

const Employees = ({ employees }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    const totalPages = Math.ceil(employees.length / itemsPerPage);


    const indexOfLastEmployee = currentPage * itemsPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

    return (
        <div>
            <div className="container mx-auto">
                <div className="w-2/4 mx-auto flex justify-center">
                    <table className="table-auto border border-collapse border-gray-400">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="border border-gray-400 px-4  py-2">Name</th>
                                <th className="border border-gray-400 px-4 py-2">Age</th>
                                <th className="border border-gray-400 px-4 py-2">Position</th>
                                <th className="border border-gray-400 px-4 py-2">Department</th>
                                <th className="border border-gray-400 px-4 py-2">Salary</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                currentEmployees.map((employee) => <Employee key={employee.id} employee={employee}></Employee>)
                            }

                        </tbody>
                    </table>

                </div>

                <div >
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    ></Pagination>
                </div>

            </div>


        </div>
    );
};

export default Employees;