import React, { Component } from 'react'
import DanhSachKhoaHoc from '../../Components/CourseItems'
import Axios from 'axios';
import {connect} from 'react-redux';


class HomeScreen extends Component {
    render() {
        return (
            <div>
                <p className="display-4 text-center">Danh sách khóa học</p>
                <div className="container">
                    <div className="row">{
                        this.props.courseList.map((item,index)=>
                        <div className="col-3">
                            <DanhSachKhoaHoc item={item}/>
                        </div>)}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        Axios({
            method:'GET',
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc"
        }).then(res =>{
            this.props.dispatch({
                type: 'GET_COURSES',
                payload: res.data
            })
        }).catch(err=>{
            console.log(err);
        })
    }
}

const mapStateToProps = state => ({
    courseList: state.course.courses
});
export default connect(mapStateToProps)(HomeScreen)
