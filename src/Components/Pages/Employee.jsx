
const Employee = ({ employee }) => {


    return (
        <tr>
            <td className="border border-gray-400 px-4 py-2">{employee.name}</td>
            <td className="border border-gray-400 px-4 py-2">{employee.age}</td>
            <td className="border border-gray-400 px-4 py-2">{employee.position}</td>
            <td className="border border-gray-400 px-4 py-2">{employee.department}</td>
            <td className="border border-gray-400 px-4 py-2">{employee.salary}</td>
        </tr>
    );
};

export default Employee;