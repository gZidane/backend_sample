import AWS from 'aws-sdk'
import { DYNAMO_REGION, DYNAMO_ACTIVITIES_TABLE, ENDPOINT_DYNAMO } from '../../constants'

const documentClient = new AWS.DynamoDB.DocumentClient(
{
  region: DYNAMO_REGION,
  endpoint: ENDPOINT_DYNAMO,
})

const getActivities = async () =>
{
  const params =
  {
    TableName: DYNAMO_ACTIVITIES_TABLE,
  }

  let response = {}

  return await documentClient.scan(params).promise()
  .then((data) =>
  {
      if (data != undefined)
      {
          if (data.Items != undefined && data.Items.length > 0)
          {
              response =
              {
                  status: 200,
                  message: 'successful query',
                  data: data.Items,
              }
          }
          else
          {
              response =
              {
                  status: 404,
                  message: 'successful query but no Items found',
                  data: [],
              }
          }
      }

      return response
    })
    .catch((err) =>
    {
        let response =
        {
            status: err.statusCode,
            message: err.message,
            data: [],
        }

        return response
    })
}

module.exports.executeWorker = getActivities
export default getActivities
