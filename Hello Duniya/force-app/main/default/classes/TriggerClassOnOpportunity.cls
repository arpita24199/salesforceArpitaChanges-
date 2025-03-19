public class TriggerClassOnOpportunity {
    public static void trgHandler(List<Opportunity> newList,Map<Id,Opportunity> oldMap){
        Set<Id> setIds = new Set<Id>();
        List<Account> accountToBeUpdate = new List<Account>();
        if(!newList.isEmpty()){
         
            for(Opportunity opp:newList){
                if(oldMap!=null ){
                    setIds.add(opp.AccountId);
                    setIds.add(oldMap.get(opp.Id).AccountId);
                
                }else{
                    setIds.add(opp.AccountId);}
            }
         
          System.debug('setIds'+setIds);      
            
        } 
  Map<Id,Integer> mapList = new Map<Id,Integer>();
 List<Account> acc = [Select Id,ClosedWonOpportunities__c,(Select Id,Name from Opportunities) from Account where Id IN:setIds];
        System.debug('acc'+acc);
     for(AggregateResult agg :[Select COUNT(id)accnts, AccountId from Opportunity where StageName='Closed Lost' and AccountId IN: setIds group by AccountId ]){
         Id aggr = (Id)agg.get('AccountId');
         Integer count =(Integer) agg.get('accnts');
         mapList.put(aggr,count);
         System.debug('mapList'+mapList);
                          
     }
        
        for(Account accx : acc){
            if(accx.Opportunities.size()== mapList.get(accx.Id)){
                accx.ClosedWonOpportunities__c= true;
                System.debug(accx+'accx');
                accountToBeUpdate.add(accx);
                
            }
            else{
                 accx.ClosedWonOpportunities__c= false;
            }
        }
        
        if(!accountToBeUpdate.isEmpty()){
            update accountToBeUpdate;
        }

    }

}