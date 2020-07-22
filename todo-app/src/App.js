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
            taskEditing: null,
            filter : {
                name: '',
                status: -1
            },
            keyword: '',
            sort: {
                by: 'name',
                value: 1
            }

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
            })
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
            },
            {
                id: this.generateID(),
                name: "Học Reactjs",
                status: true
            },
            {
                id: this.generateID(),
                name: "Học React-Redux",
                status: false
            }
        ];
        this.setState({
            tasks: tasks
        })

        localStorage.setItem('tasks',JSON.stringify(tasks))
    }

 

    onToggleForm = () =>{
        if(this.state.isDisplayForm && this.state.taskEditing){
            this.setState({
                isDisplayForm : true,
                taskEditing: null
            })
        }
        else{
            this.setState({
                isDisplayForm : !this.state.isDisplayForm,
                taskEditing: null
            });
        }
        
    }
    
    onCloseForm = () =>{
        this.setState({
            isDisplayForm: false,

        })
    }

    onShowForm = () =>{
        this.setState({
            isDisplayForm: true
        })
    }
    onSubmit = (data) =>{
        var {tasks} = this.state;
        if(data.id === ''){
            var task = {
                id: this.generateID(),
                name: data.name,
                status: JSON.parse(data.status)
            }
            
            tasks.push(task);
            this.setState({
                tasks
            });
        }
        else{
            tasks.map((task)=>{
                if(task.id === data.id){
                    task.name = data.name;
                    task.status = data.status;
                    console.log(task)
                }
    
                return "DONE"
            });
            this.setState({
                tasks: tasks,
                taskEditing: null
            });
        }
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
       
    }

    onUpdateStatus = (id) =>{
        var {tasks} = this.state;
        tasks.forEach((task)=>{
            
            if(task.id === id){
                console.log(task)
                task.status = !task.status
            }
        });
        //Update State
        this.setState({
            tasks
        })
        //Set LocalStorage
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    onDelete = (id) =>{
        var {tasks} = this.state;
        var newTasks = tasks.filter((task)=>{
            return task.id !== id;
        });
        //Update State
        this.setState({
            tasks : newTasks
        })
        //Set LocalStorage
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }

    onUpdate = (id) =>{
        var {tasks} = this.state;
        var taskEdit = tasks.filter((task)=>{
            return task.id === id
        })
        //Update State
        this.setState({
            taskEditing: taskEdit
        })
        //Show form
        this.onShowForm()
    }

    onFilter = (filterName, filterStatus) =>{
        console.log(filterName, "-", filterStatus);
        filterStatus = JSON.parse(filterStatus);
        this.setState({
            filter:{
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        })
    }

    onSearch = (keyword) =>{
        this.setState({
            keyword: keyword.toLowerCase()
        });
    }

    onSort = (sort) =>{
        console.log(sort);
        this.setState({
            sort:{
                by: sort.by,
                value: sort.value
            }
        })
    }
    

     render() {
        var {tasks, isDisplayForm, taskEditing, filter, keyword, sort} = this.state;
        if(filter){
            if(filter.name){
                tasks = tasks.filter((task)=>{
                    return task.name.toLowerCase().indexOf(filter.name) !== -1;
                });
            }
            if(filter.status !== -1){
                tasks = tasks.filter((task)=>{
                    if(filter.status === 1){
                        return JSON.parse(task.status) === true;
                    }
                    else{
                        return JSON.parse(task.status)  === false;
                    }
                })
                console.log(tasks)
            }
        }

        if(keyword){
            tasks = tasks.filter((task)=>{
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            })
        }
        
        if(sort.by === 'name'){
            tasks.sort((a,b) =>{
                if(a.name > b.name){
                    return sort.value;
                }
                else if(a.name < b.name){
                    return -sort.value;
                }
                else{
                    return 0;
                }
            })
        }
        else{
            tasks.sort((a,b)=>{
                if(a.status > b.status){
                    return -sort.value;
                }
                else if(a.status < b.status){
                    return sort.value;
                }
                else{
                    return 0;
                }
            })

        }
        var elementTaskForm = isDisplayForm === true?  
                <TaskForm 
                        onCloseForm={this.onCloseForm}
                        onSubmit={this.onSubmit}
                        task={taskEditing}/> : 
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
                            Generate Data
                        </button>
                        {/* Control */}
                        <Control 
                            onSearch={this.onSearch}
                            onSort={this.onSort}/>

                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {/* TaskList */}
                                <TaskList 
                                    tasks={tasks}
                                    onUpdateStatus={this.onUpdateStatus}
                                    onDelete={this.onDelete}
                                    onUpdate={this.onUpdate}
                                    onFilter={this.onFilter}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
