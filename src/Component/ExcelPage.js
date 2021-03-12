import { Table } from 'antd';
import React from 'react';
import { OutTable,ExcelRenderer } from 'react-excel-renderer';

class ExcelPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            file: {},
            cols: [],
            rows: []
        };
        this.fileHandler = this.fileHandler.bind(this);
    }

    fileHandler = (event) => {
        let fileObj = event.target.files[0];

        ExcelRenderer(fileObj, (err, resp) =>{
            if (err){
                console.log(err);
            }else{
                this.setState({
                    cols: resp.cols,
                    rows: resp.rows
                });
                console.log(this.state.rows,this.state.cols)
            }
        });
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <input className="form-control col-md-4" type="file" onChange={this.fileHandler}/>
                </div>

                <div className="row">
                    <div className="col">
                        {/* {this.state.rows && <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2013" tableHeaderRowClass="heading" />}  */}

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">{this.state.rows[0]}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">{this.state.rows[1]}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>                   
                </div>
            </div>
        )
    }
}

export default ExcelPage;