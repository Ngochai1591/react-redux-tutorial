import React, { Component } from "react";
import "./App.css";
import TaskForm from './components/TaskForm/TaskForm';
import Control from './components/Control/Control';
import TaskList from './components/TaskList/TaskList';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,

        }
    }


    s4 = () =>{
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    };

    componentWillMount = () => {
        console.log("MOUNTING");
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'))
            console.log(tasks)
            this.setState({
                tasks : tasks
            }, ()=>[
                console.log(this.state)
            ])
        }
     
    };

    generateID = () =>{
        return  this.s4() + '-' +  
                this.s4() + '-' +  
                this.s4() + '-' +  
                this.s4() + '-' +  
                this.s4() + '-' +  
                this.s4() + '-' +  
                this.s4() + '-' +
                this.s4() + '-' + 
                this.s4() + '-' + 
                this.s4();
    }

    onGenerateData = () =>{
        var tasks = [
            {
                id: this.generateID(),
                name: "Học lập trình",
                status: true
            },
            {
                id: this.generateID(),
                name: "Đi bơi",
                status: false
            },
            {
                id: this.generateID(),
                name: "Ngủ",
                status: true
            }
        ];
        this.setState({
            tasks: tasks
        })

        localStorage.setItem('tasks',JSON.stringify(tasks))
    }

    onToggleForm = () =>{
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })
    }
    
    onCloseForm = () =>{
        this.setState({
            isDisplayForm: false
        })
    }

    onSubmit = (data) =>{

        var task = {
            id: this.generateID(),
            name: data.name,
            status: data.status === "true" ? true : false
        }

        var {tasks} = this.state;
        tasks.push(task)
        this.setState({
            tasks
        })
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }

    onUpdateStatus = (id) =>{
        var {tasks} = this.state;
        tasks.forEach((task)=>{
            
            if(task.id === id){
                console.log(task)
                task.status = !task.status
            }
        });

        this.setState({
            tasks
        })

        localStorage.setItem('tasks', JSON.stringify(tasks))

    }
    

     render() {
        var {tasks, isDisplayForm} = this.state;
        var elementTaskForm = isDisplayForm === true?  
                <TaskForm 
                        onCloseForm={this.onCloseForm}
                        onSubmit={this.onSubmit}/> : 
                ''; 
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4": ""}>
                        {/* Task Form   */}
                        {
                            elementTaskForm
                        }
                    </div>
                  
                    <div className={isDisplayForm === true ? 
                        "col-xs-8 col-sm-8 col-md-8 col-lg-8": 
                        "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button 
                                type="button" 
                                className="btn btn-primary"
                                onClick={this.onToggleForm}>
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>  
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={this.onGenerateData}>
                            Hello world
                        </button>
                        {/* Control */}
                        <Control />

                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {/* TaskList */}
                                <TaskList 
                                    tasks={tasks}
                                    onUpdateStatus={this.onUpdateStatus}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
