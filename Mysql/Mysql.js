import { MysqlServerQuery, MysqlServerSP } from './MysqlServer.js';
// import { gfg_getModyfiedRow, gfg_getRow } from '../../Method/Grid';
// import * as method from '../Method/Method';

export const getDynamicSql_Mysql = (file, fn, param) => {
  return MysqlServerQuery(file, fn, param);
};

export const getCallSP_Mysql = (param, gridInfo, mustValue, del) => {

  if(gridInfo === undefined){
    return MysqlServerSP(param, undefined, mustValue);
  }
  
  // else{
  //   const modGrid = [];

  //   if(del){
  //     const selectRow = gfg_getRow(gridInfo[0].grid)
  //     if(selectRow === null){
  //       return new Promise((resolve, reject) => {
  //         resolve({
  //           data: ({
  //             result  : false,
  //             COL_NAM : '',
  //             MSG_CODE: 'SELECT',
  //             MSG_TEXT: '선택된건이 없습니다.'
  //           })
  //         });
  //       })
  //     }
  
  //     if(selectRow['phantom']){
  //       gridInfo[0].grid.removeRow(selectRow['rowKey'])
        
  //       return new Promise((resolve, reject) => {
  //         resolve({
  //           data: ({
  //             result  : false,
  //             COL_NAM : '',
  //             MSG_CODE: 'PHANTOM',
  //             MSG_TEXT: ''
  //           })
  //         });
  //       })
  //     }
  
  //     if(window.confirm(gfc_getAtt('선택된행을 삭제 하시겠습니까?')) === true){

  //       const obj = {
  //         SP: gridInfo[0].SP
  //       }

  //       const Keys = Object.keys(gridInfo[0]);
  //       obj['rowStatus'] = mustValue[0]['ROWSTATUS'] === undefined ? 'D' : mustValue[0]['ROWSTATUS'];
  //       obj['rowKey']  = selectRow.rowKey;
        
  //       for(let k = 0; k < Keys.length; k++){
  //         if(Keys[k] !== 'grid' && Keys[k] !== 'SP'){
  //           const key = Keys[k];
  //           const type = gridInfo[0][Keys[k]];
            
  //           let value = selectRow[Keys[k]];
  //           const must = mustValue[0][key];
  //           if(must !== undefined) value = must;
            
  //           if(value !== undefined && value !== null){
  //             if(type === 'VARCHAR'){
  //               value = `'${value}'`;
  //             }else if(type === 'DATE'){
  //               value = `'${value}'`;
  //             }else{
  //               value = `${value}`;
  //             }
  //           }else{
  //             value = null;
  //           }

  //           obj[key] = value;
  //         }
  //       }
  //       modGrid[modGrid.length] = obj;
  //     }
  //   }else{
  //     for(let i = 0; i < gridInfo.length; i++){
        
  //       const modEachGrid = gfg_getModyfiedRow(gridInfo[i].grid);
  
  //       for(let j = 0; j < modEachGrid.length; j++){
  //         const obj = {
  //           SP: gridInfo[i].SP
  //         }
  
  //         const Keys = Object.keys(gridInfo[i]);
  //         obj['rowStatus'] = mustValue[0]['ROWSTATUS'] === undefined ? modEachGrid[j].rowStatus : mustValue[0]['ROWSTATUS'];
  //         obj['rowKey']  = modEachGrid[j].rowKey;
          
  //         for(let k = 0; k < Keys.length; k++){
  //           if(Keys[k] !== 'grid' && Keys[k] !== 'SP'){
  //             const key = Keys[k];
  //             const type = gridInfo[i][Keys[k]];
              
  //             let value = modEachGrid[j][Keys[k]];
  //             const must = mustValue[0][key];
  //             if(must !== undefined) value = must;
              
  //             if(value !== undefined && value !== null){
  //               if(type === 'VARCHAR'){
  //                 value = `'${value}'`;
  //               }else if(type === 'DATE'){
  //                 value = `'${value}'`;
  //               }else{
  //                 value = `${value}`;
  //               }
  //             }else{
  //               value = null;
  //             }
  
  //             obj[key] = value;
  //           }
  //         }
  //         modGrid[modGrid.length] = obj;
  //       }
  //     }
  //   }
    
  //   return MysqlServerSP(param, modGrid);
  // }
}