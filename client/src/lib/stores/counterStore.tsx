import { action, makeObservable, observable } from 'mobx';


export default class CounterStore {
title = 'Counter Store';

    count = 42;    

          constructor() {
        makeObservable(this,{
             title:observable,
             count:observable,
             increment:action,
            
           
        });
    }
increment=(amount =1)=>{     {
       this.count += amount;
    }

}
}