const AWS = require("aws-sdk");
AWS.config.update({region: 'ap-southeast-2'});
const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.get({
//     TableName: "td_nodes",
//     Key: {
//         user_id: "123a",
//         timestamp: 1593847470
//     }
// }, (err, data) => {
//     if( err ) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

docClient.query({
    TableName: "td_nodes",
    IndexName: "user_id-cat-index",
    KeyConditionExpression: " user_id = :user_id and cat = :cat",
    // FilterExpression: "user_name = :user_name",

    ExpressionAttributeValues: {
        ":user_id" : "123a",
        ":cat": "general"
        // ":user_name": "namnguyen"
    }
}, (err, data) => {
    if( err ) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// docClient.scan({
//     TableName: "td_nodes_sdk",
//     FilterExpression: "user_name = :user_name",
//     ExpressionAttributeValues: {
//         ":user_name" : "ABC"
//     }
// }, (err, data) => {
//     if( err ) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
