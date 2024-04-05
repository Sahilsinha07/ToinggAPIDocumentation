---
title: Toingg API Documentation
description: Detailed documentation for Toingg API
---

# {% $markdoc.frontmatter.title %}

{% #overview %}
The Toingg API provides a comprehensive set of endpoints designed for automating phone calls, sending SMS messages, and managing related functionalities. Built using FastAPI and following the OpenAPI 3.1 specification, this API offers seamless integration into your applications. Access the API [here](https://call.toingg.com/api/docs#/default).

{% callout type="check" %}
The base URL for all API endpoints is `/api`.
{% /callout %}

## Key Features

### 1. Effortless Communication Integration

Integrate SMS, calls, and batch processing functionalities effortlessly with intuitive endpoints such as `/make_toingg/`, `/send_sms/`, and `/make_batch_toingg/`. Simplify communication workflows and enhance user engagement seamlessly.

### 2. Streamlined Payment Processing

Enhance your application's versatility by integrating secure payment processing capabilities seamlessly using the `/create-checkout-session` endpoint. Empower users with seamless and reliable transaction experiences, elevating your application's value proposition.

### 3. Scalable and Reliable

With support for batch processing and validation error handling, the Toingg API ensures scalability and reliability. Efficiently handle large volumes of communication tasks while maintaining data integrity, empowering your application to deliver exceptional performance.

{% /overview %}

{% #Authorization %}

## Authentication

To authenticate with this Toingg FastAPI instance, you need to provide an `apiKey` as a query parameter in your request. The `apiKey` is a string value that identifies and authorizes your application to access the API.

## Example Request with Authentication

Here is a example request with authentication for end point. For more details please refer [READ MORE](/authentication/)

### Make Toingg

```bash
curl -X POST "http://localhost:8000/make_toingg/?apiKey=your_api_key_here" -H "accept: application/json" -H "Content-Type: application/json" -d '{ "campaign": "test_campaign", "name": "John Doe", "phoneNumber": "1234567890" }'
```

{% /Authorization %}

{% callout type="check" %}
Remember to replace `your_api_key_here` and `your_call_sid_here` with your actual API key and call SID values.
{% /callout %}

{% #EndPoints %}

## End Points

In the Toingg API, each endpoint serves a specific purpose, facilitating seamless integration of communication and payment functionalities into your applications. From making automated phone calls to sending SMS messages and managing batch processing tasks, each endpoint is designed to enhance user engagement and streamline communication workflows.

### Example of API End Point

Here is a example of one API End Point, which Toingg API has to offer. For more detailed explanation, use cases and examples of `EndPoints` follow this [LINK](/endpoints/)

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

{% /EndPoints %}

{% #Schemas %}

## Schemas

In this API, schemas are used to define the structure of data exchanged between the client and the server. Schemas provide a blueprint for the format and content of request bodies, response bodies, and error messages. They ensure consistency and clarity in communication between different components of the system. The defined schemas include elements such as API keys, validation errors, data for making calls, sending SMS messages, and handling webhook events. By adhering to these schemas, developers can easily understand the expected data format and build robust integrations with the API.

### Example of Schema

Here is a detailed example of the Schema for the Toingg API. For more details please refer to [READ MORE](/schema/)

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

{% /Schemas %}

{% #Conclusion %}

## Conclusion

This API documentation provides a comprehensive overview of the available endpoints, request parameters, request bodies, response codes, and schemas used in the FastAPI version 0.1.0. Developers can utilize this documentation to understand how to interact with the API and integrate its functionality into their applications.

The API offers various endpoints for making Toingg calls, sending SMS messages, handling webhooks, and creating checkout sessions. Each endpoint is accompanied by detailed descriptions of its purpose, required parameters, and expected request and response formats.

Additionally, the documentation outlines the schemas used for data validation and error handling, ensuring consistency and clarity in the communication between clients and the server.

Overall, this documentation serves as a valuable resource for developers looking to leverage the capabilities of the API in their projects.
{% /Conclusion %}
