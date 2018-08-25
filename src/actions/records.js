import C from '../constants/records';
import recordsArr from '../RecordsItems' ;
  export const submitRecord = content => (dispatch) =>{
    let recordsDefault=content.recordsArray;
    recordsArr.recordsArr=content.recordsArray;
    const keys=Object.keys(recordsDefault);
    dispatch({
        type:C.RECORDS_SUBMIT_DATA,
        records:(keys.map(r=>{
            let sumHours=recordsDefault[r].length>0?((Object.keys(recordsDefault[r]).reduce(function (previous, key) {
            return previous + (Number(recordsDefault[r][key]["end"])-Number(recordsDefault[r][key]["start"]));
        }, 0))).toString():'';
return({
        username:r,
          avg_per_day:recordsDefault[r].length>0?(sumHours/recordsDefault[r].length).toString():'',
          sum_hours:sumHours.toString(),
          sum_extra_hours:sumHours>(8*recordsDefault[r].length)?sumHours-(8*recordsDefault[r].length).toString():''
        })
        }))
       });
};
export const submitMonth= (content) => (dispatch) => {
  const keys=Object.keys(recordsArr.recordsArr);
  let recordsDefault=JSON.parse(JSON.stringify(recordsArr.recordsArr ));
  const monthToFilter= Number(content.monthSelected);
  keys.forEach(x=>{
    const oneUser=recordsDefault[x];
    if(monthToFilter!==0)
    recordsDefault[x]=recordsDefault[x].filter(ele=>
      (new Date(ele["date"]).getUTCMonth() + 1)===monthToFilter
    );
  });
  dispatch({
    type:C.RECORDS_RECIEVE_DATA,
    records:(keys.map(r=>{
      let sumHours=recordsDefault[r].length>0?((Object.keys(recordsDefault[r]).reduce(function (previous, key) {
      return previous + (Number(recordsDefault[r][key]["end"])-Number(recordsDefault[r][key]["start"]));
  }, 0))).toString():'';
return({
  username:r,
    avg_per_day:recordsDefault[r].length>0?(sumHours/recordsDefault[r].length).toString():'',
    sum_hours:sumHours.toString(),
    sum_extra_hours:sumHours>(8*recordsDefault[r].length)?sumHours-(8*recordsDefault[r].length).toString():''
  })
  }))
    
    });
};
export const listenToRecords = () => (dispatch) => {
  const keys=Object.keys(recordsArr.recordsArr);
 let recordsDefault=JSON.parse(JSON.stringify(recordsArr.recordsArr ));
  const monthToFilter1= 7;
   dispatch({
    type:C.RECORDS_RECIEVE_DATA,
    records:(keys.map(r=>{
      let sumHours=recordsDefault[r].length>0?((Object.keys(recordsDefault[r]).reduce(function (previous, key) {
      return previous + (Number(recordsDefault[r][key]["end"])-Number(recordsDefault[r][key]["start"]));
  }, 0))).toString():'';
return({
  username:r,
    avg_per_day:recordsDefault[r].length>0?(sumHours/recordsDefault[r].length).toString():'',
    sum_hours:sumHours.toString(),
    sum_extra_hours:sumHours>(8*recordsDefault[r].length)?sumHours-(8*recordsDefault[r].length).toString():''
  })
  }))
    
    });
};

