## Authentication

To authenticate with this Toingg FastAPI instance, you need to provide an `apiKey` as a query parameter in your request. The `apiKey` is a string value that identifies and authorizes your application to access the API.

## Example Requests with Authentication

Here is the detailed list of examples with authorization request to the API. Follow this out carefully.

### Make Toingg

```bash
curl -X POST "http://localhost:8000/make_toingg/?apiKey=your_api_key_here" -H "accept: application/json" -H "Content-Type: application/json" -d '{ "campaign": "test_campaign", "name": "John Doe", "phoneNumber": "1234567890" }'
```

### Make Toingg Details

```bash
curl -X POST "http://localhost:8000/make_toingg_details/?apiKey=your_api_key_here" -H "accept: application/json" -H "Content-Type: application/json" -d '{ "campaignName": "test_campaign", "campaignScript": "test_script", "name": "John Doe", "phoneNumber": "1234567890" }'
```

### Make Batch Toingg

```bash
curl -X POST "http://localhost:8000/make_batch_toingg/?apiKey=your_api_key_here" -H "accept: application/json" -H "Content-Type: application/json" -d '{ "campaign": "test_campaign", "numberList": [ { "clientName": "John Doe", "clientNumber": "1234567890" }, { "clientName": "Jane Doe", "clientNumber": "2345678901" } ] }'
```

### Send SMS

```bash
curl -X POST "http://localhost:8000/send_sms/?apiKey=your_api_key_here" -H "accept: application/json" -H "Content-Type: application/json" -d '{ "name": "John Doe", "phoneNumber": "1234567890", "message": "Hello, this is a test message." }'
```

### Hang Up Call

```bash
curl -X POST "http://localhost:8000/hang_up_call/?apiKey=your_api_key_here&callSid=your_call_sid_here" -H "accept: application/json"
```

### Create Checkout Session

```bash
curl -X POST "http://localhost:8000/create-checkout-session" -H "accept: application/json" -H "Content-Type: application/json" -d '{ "apikey": "your_api_key_here" }'
```

### Stripe Webhook

```bash
curl -X POST "http://localhost:8000/webhook" -H "accept: application/json"
```

{% callout type="check" %}
Remember to replace `your_api_key_here` and `your_call_sid_here` with your actual API key and call SID values.
{% /callout %}
