import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false,
        }
    }
    

    componentWillMount = () =>{
        console.log("RECEIVING PROPS");
        if(this.props.task){
            var task = this.props.task[0];
            console.log(task)
            this.setState({
                id: task.id,
                name: task.name,
                status: task.status
            })
        }
        console.log("UPDATING")
        console.log(this.state)
    }

    componentWillReceiveProps = (nextProps) =>{
        console.log(nextProps.task)
        if(nextProps && nextProps.task){
            this.setState({
                id: nextProps.task[0].id,
                name: nextProps.task[0].name,
                status: JSON.parse(nextProps.task[0].status)
            });
        }
        else{
            if(nextProps && !nextProps.task){
                this.setState({
                    id: '',
                    name: '',
                    status: false
                })
            }
        }
    }

    onCloseForm = () =>{
        this.props.onCloseForm()
    }

    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }

    onClear = () =>{
        this.setState({
            name : '',
            status: false
        })
    }

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onAddTask(this.state)
        this.onClear()
        this.onCloseForm();
    }
    render(){
        var {id} = this.state
        return(
            <div>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            {id === ''? "Thêm Công Việc": "Cập nhật công việc"}
                        <span   className="fa fa-times-circle text-right"
                            onClick={this.onCloseForm}>
                        </span>
                        </h3>
                        
                    </div>
                    
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input 
                                        type="text" 
                                        className="form-control"
                                        value ={this.state.name} 
                                        name="name"
                                        onChange={this.onChange}/>
                            </div>
                            <label>Trạng Thái :</label>
                            <select 
                                className="form-control" 
                                required="required"
                                name="status"
                                value={this.state.status}
                                onChange={this.onChange}>
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">{id === '' ? "Thêm" : "Lưu Lại"}</button>&nbsp;
                                <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    onClick={this.onClear}>Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {

    }
}

const mapDispatchToProps = (dispath, props) =>{
    return{
        onAddTask : (task) =>{
            dispath(actions.addTask(task));
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(TaskForm);