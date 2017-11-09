export function getDisplayData (data, totalItemsInView, setStateDisplay){

    let toDisplayItems = [];

    for (let i = 0; i <= totalItemsInView - 1; i++) { toDisplayItems.push(data[i]); }

    setStateDisplay(toDisplayItems);

}