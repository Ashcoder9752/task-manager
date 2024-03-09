import { useState } from 'react';
import './App.css';
import Status from './assets/components/Status';

function App() {
    const [statusList, setStatusList] = useState([
        "Not started",
        "In progress",
        "Completed",
    ])

    const [taskList, setTask] = useState([
        {
            title: "Card 1",
            status: "Not started",
            description: "This is a sample decription",
        },
        {
            title: "Card 2",
            status: "In progress",
            description: "This is a sample decription",
        },
        {
            title: "Card 3",
            status: "Completed",
            description: "This is a sample decription",
        },
        {
            title: "Card 4",
            status: "Not started",
            description: "This is a sample decription",
        },
        {
            title: "Card 5",
            status: "Not started",
            description: "This is a sample decription",
        },
    ])

    const renderStatus = statusList.map(statusTitle => {
        const filteredTaskList = taskList.filter(task => task.status === statusTitle)

        return <Status
            key={statusTitle}
            title={statusTitle}
            length={filteredTaskList.length}
            tasks={filteredTaskList}
        />
    })

    return (
        <div className='container'>
            {renderStatus}
        </div>
    );
}

export default App;
