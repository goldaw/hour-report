import ReactTable from 'react-table';
import 'react-table/react-table.css';
import React from 'react';
import { connect } from 'react-redux';

function Aggregationtable(props) {
    const columns = [{
      Header: 'username',
      accessor: 'username', 
    }, {
      Header: 'avg_per_day',
      accessor: 'avg_per_day',
    }, {
      Header: 'sum_hours',
      accessor: 'sum_hours',
    }, {
        Header: 'sum_extra_hours',
        accessor: 'sum_extra_hours',
      }];
    return (<ReactTable
      defaultPageSize={10}
      data={(props.records instanceof Array) ? props.records : []}
      columns={columns}
      filterable
      className="-striped -highlight"
      style={{ direction: 'ltr'}}
      defaultFilterMethod={(filter, row) =>
          String(row[filter.id]).indexOf(filter.value) !== -1}
    />);
  }


const mapStateToProps=state=>({
records:state.records.records
});
const mapDispatchToProps={

};
export default connect(mapStateToProps,mapDispatchToProps)(Aggregationtable);
