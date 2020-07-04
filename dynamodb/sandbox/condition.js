const AWS = require("aws-sdk");
AWS.config.update({region: 'ap-southeast-2'});
const docClient = new AWS.DynamoDB.DocumentClient();

docClient.put({
    TableName: "td_nodes_sdk",
    Item: {
        user_id: "ABCEF",
        timestamp: 1,
        user_name: "ABCEF",
        note: "my notes ABCEF"
    },
    ConditionExpression: '#t <> :t',
    ExpressionAttributeNames: {
        '#t': 'timestamp'
    },
    ExpressionAttributeValues: {
        ':t': 1
    }
}, (err, data) => {
    if( err ) {
        console.log(err);
    } else {
        console.log(data);
    }
});