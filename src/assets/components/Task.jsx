import '@material/web/dialog/dialog'
import '@material/web/button/text-button'
import '@material/web/textfield/outlined-text-field'
import '@material/web/select/outlined-select'
import '@material/web/select/select-option'

import '../css/Task.css'

const Task = props => {
    return (
        <div className="taskCard">
            <div className="headline">{props.task.title}</div>
            <div className="supporting-text">{props.task.description}</div>



            <md-dialog>
                <div slot="headline">
                    Task
                </div>
                <form slot="content" id="taskForm" method="dialog">
                    <div>
                        <md-outlined-text-field label="Task Title" value="" placeholder="Enter the task title">
                        </md-outlined-text-field>
                    </div>

                    <p>
                        <md-outlined-select required label="Status">

                            <md-select-option aria-label="Not started" value="Not started" selected>
                                <div slot='headline'>Not started</div>
                            </md-select-option>
                            <md-select-option aria-label="In progress" value="In progress">
                                <div slot="headline">In progress</div>
                            </md-select-option>
                            <md-select-option aria-label="Completed" value="Completed">
                                <div slot="headline">Completed</div>
                            </md-select-option>
                        </md-outlined-select>
                    </p>

                    <p>
                        <md-outlined-text-field
                            type="textarea"
                            label="Task Description"
                            value=""
                            placeholder="This is a sample description"
                        >
                        </md-outlined-text-field>
                    </p>
                </form>
                <div slot="actions">
                    <md-text-button form="taskForm">Delete</md-text-button>
                    <md-text-button form="taskForm">Ok</md-text-button>
                </div>
            </md-dialog>

        </div>
    )
}

export default Task;