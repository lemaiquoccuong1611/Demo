import React, { Component } from 'react'

class DanhSachKhoaHoc extends Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.item.HinhAnh} style={{width:"100%",height: "200"}}/>
                <p className="lead font-weight-bold">{this.props.item.TenKhoaHoc}</p>
                <p className="lead">{this.props.item.NguoiTao}</p>
                <p className="lead">Rating: 10.00</p>
                <button className="btn btn-success">Apply</button>
            </div>
        )
    }
}
export default DanhSachKhoaHoc
