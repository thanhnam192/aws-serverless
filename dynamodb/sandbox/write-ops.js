const AWS = require("aws-sdk");
AWS.config.update({region: 'ap-southeast-2'});
const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.put({
//     TableName: "td_nodes_sdk",
//     Item: {
//         user_id: "bb",
//         timestamp: 1234512,
//         user_name: "namnguyen",
//         note: "my notes"
//     }
// }, (err, data) => {
//     if( err ) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// docClient.update({
//     TableName: "td_nodes_sdk",
//     Key:{
//         user_id: "bb",
//         timestamp: 1234512
//     },
//     UpdateExpression: 'set #t = :t',
//     ExpressionAttributeNames:{
//         '#t': 'user_name'
//     },
//     ExpressionAttributeValues:{
//         ':t': 'barackka'
//     }
// }, (err, data) => {
//     if( err ) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

docClient.delete({
    TableName: "td_nodes_sdk",
    Key:{
        user_id: "bb",
        timestamp: 1234512
    }
}, (err, data) => {
    if( err ) {
        console.log(err);
    } else {
        console.log(data);
    }
});