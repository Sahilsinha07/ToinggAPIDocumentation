## End Points

In the Toingg API, each endpoint serves a specific purpose, facilitating seamless integration of communication and payment functionalities into your applications. From making automated phone calls to sending SMS messages and managing batch processing tasks, each endpoint is designed to enhance user engagement and streamline communication workflows.

### Example of API End Point

Here is the detailed explanation of every `EndPoint` offered by the Toingg API along with their response and possible error that could be encountered

## POST /make_toingg/

This endpoint is used to make a Toingg (automated phone call).

### Parameters

- `apiKey` (query, string, required): The API key for authentication.

### Request Body

The request body should be a JSON object with the following properties:

- #### campaign (string):
  The campaign for the Toingg.
- #### name (string):
  The name for the Toingg.
- #### phoneNumber (string):
  The phone number for the Toingg.

```json
{
  "campaign": "string",
  "name": "string",
  "phoneNumber": "string"
}
```

### Response

- #### 200 Sucessfull Response

Media type - application/json

Example Output

```json
"string"
```

- #### 422 Validation Error

Media type - application/json

Example Output

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

## POST /make_toingg_details/

This endpoint is used to make a detailed Toingg (automated phone call) with additional script information.

### Parameters

apiKey (query, string, required): The API key for authentication.

### Request Body

The request body should be a JSON object with the following properties:

- #### campaignName (string):

The name of the campaign for the Toingg.

- #### campaignScript (string):

The script content for the Toingg.

- #### name (string):

The name for the Toingg.
phoneNumber (string):
The phone number for the Toingg.

```json
{
  "campaignName": "string",
  "campaignScript": "string",
  "name": "string",
  "phoneNumber": "string"
}
```

### Response

- #### 200 Successful Response

Media type - application/json

Example Output

```json
"string"
```

- #### 422 Validation Error

Media type - application/json

Example Output

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

## POST /make_batch_toingg/

This endpoint is used to make multiple Toinggs (automated phone calls) in a batch.

### Parameters

apiKey (query, string, required): The API key for authentication.

### Request Body

The request body should be a JSON object with the following properties:

- #### campaign (string):

The campaign for the Toinggs.

- #### numberList (array):
  An array of objects containing client name and client number for each Toingg.

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

### Response

- #### 200 Successful Response

Media type - application/json

Example Output

```json
"string"
```

- #### 422 Validation Error

Media type - application/json

Example Output

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

## POST /send_sms/

This endpoint is used to send an SMS message.

### Parameters

apiKey (query, string, required): The API key for authentication.

### Request Body

The request body should be a JSON object with the following properties:

- #### name (string):

The name of the recipient.

- #### phoneNumber (string):

The phone number of the recipient.

- #### message (string):
  The message content.

```json
{
  "name": "string",
  "phoneNumber": "string",
  "message": "string"
}
```

### Response

- #### 200 Successful Response

Media type - application/json

Example Output

```json
"string"
```

- #### 422 Validation Error

Media type - application/json

Example Output

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

## POST /hang_up_call/

This endpoint is used to hang up a call.

### Parameters

callSid (query, string, required): The SID of the call.
apiKey (query, string, required): The API key for authentication.

### Response

- #### 200 Successful Response

Media type - application/json

Example Output

```json
"string"
```

- #### 422 Validation Error

Media type - application/json

Example Output

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

## POST /create-checkout-session

This endpoint is used to create a checkout session.

#### Request Body

The request body should be a JSON object with the following properties:

- #### apikey (string):

The API key for authentication.

```json
{
  "apikey": "string"
}
```

### Response

- #### 200 Successful Response

Media type - application/json

Example Output

```json
"string"
```

- #### 422 Validation Error

Media type - application/json

Example Output

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

## POST /webhook

This endpoint is used to receive Stripe webhooks.

### Response

- #### 200 Successful Response

Media type - application/json

Example Output

```json
"string"
```
