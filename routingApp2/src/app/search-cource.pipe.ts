import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCource'
})
export class SearchCourcePipe implements PipeTransform {

  transform(courceList : any , query : String): any { 
      

    let result : any = [] ;
   //let  criteriaList : any  = ["tName"];
    let  criteriaList : any  = ["courceName","courceMode","courceLocation"];
    console.log(' query : '+ courceList);
    console.log(' query : '+ query);
 
        if( query == null || query == 'undefined' || query == "")
        {
           console.log("If..");
          result = courceList;
           
          
        }
        else{
           console.log("Else..");
        
         for(var i = 0; i < courceList.length; i++ )
         {
           console.log("Else.1.");
              for( var j = 0 ; j < criteriaList.length; j++)
              {
                  var tempObj = courceList[i];
                  console.log("Else.2.");
                  if(tempObj[criteriaList[j]].toString().toLocaleLowerCase().indexOf(query.toString().toLocaleLowerCase()) != -1) 
                  {
                    console.log("Else.2.Match");
                    result.push(courceList[i]);
                    break;
                  } 

              }

           
         }
         if( result.length == 0)
         {
           //result.push('No Matching Records..');
         }
        }
        return result;

  }


}
