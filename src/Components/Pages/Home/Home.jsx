import { useState } from "react";
import Employees from "../Employees";
import { useEffect } from "react";

const Home = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('employees.json')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])


    return (
        <div>
            <Employees employees={employees}></Employees>
        </div>
    );
};

export default Home;