## Schemas

In this API, schemas are used to define the structure of data exchanged between the client and the server. Schemas provide a blueprint for the format and content of request bodies, response bodies, and error messages. They ensure consistency and clarity in communication between different components of the system. The defined schemas include elements such as API keys, validation errors, data for making calls, sending SMS messages, and handling webhook events. By adhering to these schemas, developers can easily understand the expected data format and build robust integrations with the API.

### Example of Schema

Here is a detailed example of the Schema for the Toingg API. For more details please refer to [READ MORE](/schema/)

### APIKey

This schema represents the API key used for authentication.

```json
{
  "apikey": "string"
}
```

### HTTPValidationError

This schema represents validation errors returned by the API.

```json
{
  "detail": [
    {
      "loc": ["string", 0],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

### ValidationError

This schema represents validation errors returned by the API.

```json
{
  "loc": ["string", 0],
  "msg": "string",
  "type": "string"
}
```

### makeBatchCallData

This schema represents data for making batch calls.

```json
{
  "campaign": "string",
  "numberList": [
    {
      "clientName": "string",
      "clientNumber": "string"
    }
  ]
}
```

### makeCallData

This schema represents data for making a single call.

```json
{
  "campaign": "string",
  "name": "string",
  "phoneNumber": "string"
}
```

### makeCallDetailsData

This schema represents detailed data for making a call with additional script information.

```json
{
  "campaignName": "string",
  "campaignScript": "string",
  "name": "string",
  "phoneNumber": "string"
}
```

### numberData

This schema represents data for a single number.

```json
{
  "clientName": "string",
  "clientNumber": "string"
}
```

### smsData

This schema represents data for sending an SMS message.

```json
{
  "name": "string",
  "phoneNumber": "string",
  "message": "string"
}
```
