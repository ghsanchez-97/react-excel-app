import React from 'react';
import { OutTable,ExcelRenderer } from 'react-excel-renderer';

class ExcelPage extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {};
    // }

    state = {
        rows: "",
        cols: ""
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
                console.log(this.setState.rows,this.state.cols)
            }
        });
    }

    // findHandler = (e) => {

    // }

    render(){
        return (
            <div>
                <input type="file" onChange={this.fileHandler.bind(this)} />
                <div className="container">
                    {this.state.rows && <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2013" tableHeaderRowClass="heading" />}
                </div>
            </div>
        )
    }
}

export default ExcelPage;