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
  console.log(monthToFilter);
  keys.forEach(x=>{
    const oneUser=recordsDefault[x];
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
      /*records:
      keys.map(k=>
        (
          {
          username:k,avg_per_day:recordsDefault[k].length>0?((Object.keys(recordsDefault[k]).reduce(function (previous, key) {
        return previous + (Number(recordsDefault[k][key]["end"])-Number(recordsDefault[k][key]["start"]));
    }, 0))/recordsDefault[k].length).toString():'',
      sum_hours:(Object.keys(recordsDefault[k]).reduce(function (previous, key) {
        return previous + (Number(recordsDefault[k][key]["end"])-Number(recordsDefault[k][key]["start"]));
    }, 0)).toString(),sum_extra_hours:((Object.keys(recordsDefault[k]).reduce(function (previous, key) {
      return previous + (Number(recordsDefault[k][key]["end"])-Number(recordsDefault[k][key]["start"]));
  }, 0)>(8*recordsDefault[k].length)?(Object.keys(recordsDefault[k]).reduce(function (previous, key) {
    return previous + (Number(recordsDefault[k][key]["end"])-Number(recordsDefault[k][key]["start"]));
}, 0)-(8*recordsDefault[k].length)).toString():'')).toString()}))*/
    
    });
};
export const listenToRecords = () => (dispatch) => {
  const keys=Object.keys(recordsArr.recordsArr);
 // const sum=Object.keys(recordsDefault).reduce((recordsDefault.(Number(key.end)-Number(key.start)), b) => a + b, 0);
 // let recordsDefault=recordsArr.recordsArr;
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
      /*records:
      keys.map(k=>({username:k,avg_per_day:((Object.keys(recordsDefault[k]).reduce(function (previous, key) {
        return previous + (Number(recordsDefault[k][key]["end"])-Number(recordsDefault[k][key]["start"]));
    }, 0))/recordsDefault[k].length).toString(),
      sum_hours:(Object.keys(recordsDefault[k]).reduce(function (previous, key) {
        return previous + (Number(recordsDefault[k][key]["end"])-Number(recordsDefault[k][key]["start"]));
    }, 0)).toString(),sum_extra_hours:((Object.keys(recordsDefault[k]).reduce(function (previous, key) {
      return previous + (Number(recordsDefault[k][key]["end"])-Number(recordsDefault[k][key]["start"]));
  }, 0)>(8*recordsDefault[k].length)?(Object.keys(recordsDefault[k]).reduce(function (previous, key) {
    return previous + (Number(recordsDefault[k][key]["end"])-Number(recordsDefault[k][key]["start"]));
}, 0)-(8*recordsDefault[k].length)).toString():'')).toString()}))*/
    
    });
};
/*export const submitRecord = content => (dispatch, getState) => {
  const state = getState();
  const record = {
    content,
  };
  dispatch({ type: C.RECORDS_SUBMIT_DATA });
  localStorage.setItem((content.userName, content), (error)=>{
    dispatch({ type: C.RECORDS_SUBMIT_DATA });
    if (error) {
        dispatch({
          type: C_feedback.FEEDBACK_DISPLAY_ERROR,
          error: `Region submission failed! ${error}`,
        });
      } else {
        dispatch({
          type: C_feedback.FEEDBACK_DISPLAY_MESSAGE,
          message: 'Region successfully saved!',
        });
      }
  });
};*/

  /*keys.filter(f=>{
        let istrue=false;
        const oneRecord=recordsDefault[f];
        Object.keys(oneRecord).filter(f2=>{
        let dateStrToFilter=oneRecord[f2]["date"];
        console.log(dateStrToFilter);
        let dateToFilter = new Date(dateStrToFilter);
        console.log(dateToFilter);
        let monthToFilter= dateToFilter.getUTCMonth() + 1;
        console.log(monthToFilter);

        if(monthToFilter===monthToFilter1){
          return true;}
        return false;});
      })*//*.map(k=>({username:k,avg_per_day:((Object.keys(recordsDefault[k]).reduce(function (previous, key) {
        return previous + (Number(recordsDefault[k][key]["end"])-Number(recordsDefault[k][key]["start"]));
    }, 0))/recordsDefault[k].length).toString(),
      sum_hours:(Object.keys(recordsDefault[k]).reduce(function (previous, key) {
        return previous + (Number(recordsDefault[k][key]["end"])-Number(recordsDefault[k][key]["start"]));
    }, 0)).toString(),sum_extra_hours:((Object.keys(recordsDefault[k]).reduce(function (previous, key) {
      return previous + (Number(recordsDefault[k][key]["end"])-Number(recordsDefault[k][key]["start"]));
  }, 0)>(8*recordsDefault[k].length)?(Object.keys(recordsDefault[k]).reduce(function (previous, key) {
    return previous + (Number(recordsDefault[k][key]["end"])-Number(recordsDefault[k][key]["start"]));
}, 0)-(8*recordsDefault[k].length)).toString():'')).toString()}))*/
   /* records:recordsDefault.map(key=>({username:key.username,avg_per_day:key.start,sum_hours:Number(key.end)-Number(key.start).toString(),
      sum_extra_hours:(Number(key.end)-Number(key.start))>8?((Number(key.end)-Number(key.start))-8).toString():'0'})),
*/