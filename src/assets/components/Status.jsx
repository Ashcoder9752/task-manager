import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

import '../css/Status.css'
import Task from './Task';

const Status = props => {
    const renderTasks = props.tasks.map(task => <Task key={task.title} task={task} />);

    return (
        <div className='card'>
            <div className='title'>
                <span>
                    {props.title}
                    <b id='count'>{props.length}</b>
                </span>
                <FontAwesomeIcon className='icon' icon={faEdit} />
            </div>

            <div className='tasks'>
                {renderTasks}
            </div>

            <div className='add-new'>
                <FontAwesomeIcon style={{ padding: "24px" }} icon={faAdd} />
                <span>New</span>
            </div>


        </div>
    );
};

export default Status;