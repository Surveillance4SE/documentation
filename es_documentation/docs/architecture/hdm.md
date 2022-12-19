---
sidebar_position: 3
---

# Human Detection Module

The Human Detection Module consumes frames from the cameras (sent through RabbitMQ) and detects humans.

An intrusion is detected when 3 consecutive frames have a human.

When an intrusion is detected a message is sent to the [Intrusion Management API](#).

The metadata (frame id and whether a human was detected) are stored in a Redis database. 
When a human is detected, there is a check on the database to see whether there are other 2 consecutive frames containing a human.

## Input message format
### Headers
```javascript
{
    source: 1,
    timestamp: 1671051238317,
    frame_id: 22,
    content_type: 'image/jpeg',
    content_encoding: 'binary'
}
```
### Body 
Data of current frame must be sent as bytes.


## Dependencies
- `Rabbit MQ server` - Camera frames are exchanged using the RabbitMQ broker server.
- `Redis Database` - Stores intrusion detection metadata to the Redis Database.

