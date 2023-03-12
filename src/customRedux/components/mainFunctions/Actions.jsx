const incrementCount =({count,sum})=>{
    return {
        type: 'INCERMENT',
        payload: count+sum
    };
}

export {incrementCount}