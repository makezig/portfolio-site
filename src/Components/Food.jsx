
function Food(){

const food1 = "pizza";
const food2 = "apple";

    return(
        <ul>
            <li>orange</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food