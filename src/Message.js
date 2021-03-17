const SMS = {
    First: "первое",
    Last: "последнее"
};

function Message() {
    return( 
    <div>
    <div>
    {SMS.First}
    </div>
    <div>
    {SMS.Last}
    </div>
    </div>
    )
}

export default Message;