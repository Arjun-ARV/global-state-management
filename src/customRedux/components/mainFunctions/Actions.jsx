const incrementCount =(value)=>{
    console.log('incrementCount')
    return value.sum+value.count;
}

const decrementCount=(value)=>{
    return value?.sum-value?.count;
}

const resetCount=(value)=>{
    return value;
}

export {incrementCount,decrementCount,resetCount}