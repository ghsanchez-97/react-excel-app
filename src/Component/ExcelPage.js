import React from 'react';
import { OutTable,ExcelRenderer } from 'react-excel-renderer';
import './styles/Excel.css';
import { DataGrid } from '@material-ui/data-grid'

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
            <div className="container App">
                <div className="row align-items-center">
                    <input className="form-control col" type="file" onChange={this.fileHandler}/>
                </div>

                 <div className="row">
                     <div className="col">
                         {this.state.rows && <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="table"            tableHeaderRowClass="heading" />} 
                     </div>                   
                 </div>
             </div>
        )
    }
}

export default ExcelPage;