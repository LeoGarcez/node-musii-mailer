# node-musii-mailer
library that aims to make communication with spotify more transparent

## Example

```javascript
const service = require('node-musii-mailer')(service_email, client_id, private_key)
```
or
```javascript
const Service = require('node-musii-mailer')
const service = Service(service_email, client_id, private_key)
```

### methods

```javascript
service.mailer.sendEmail('email', 'subject', 'text')
```
```javascript
service.mailer.sendCodeEmail('email', 'code')
```
```javascript
service.mailer.sendDataPolicy('email')
```

### Return

#### success
```javascript
{
  status: ,
  data: 
}
```

#### error
```javascript
{
  status: ,
  error:
}
```
