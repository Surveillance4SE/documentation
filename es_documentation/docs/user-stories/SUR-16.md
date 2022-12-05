---
sidebar_position: 1
---

# SUR-16 Create Video from Intrusions

> As a client/sec. officer/admin I want to be able to view videos in order to review intrusion footage.

# Acceptance Criteria

Given there are videos, when I want to see one, then I want to watch it. 

# Tests

## Integration

- Make run on AWS

## Unit

- Compose video from static frames

## Tests results

Informal unit tests passed, there were problems determining how they should be formally done.

# Solution’s Architecture

## V1 

Implemented on a lambda function triggered by the HDM, fetching and storing the video in Amazon S3.

## V2

Implemented as an ECS image, given the lambdas are not infinitely scalable.

Exposes an API with a single endpoint to signal an intrusion, asks the camera for the video.

The camera now is supposed to serve video when requested. The intrusion timestamp is provided by the HDM when an intrusion is detected. In this point, the IMA will call the camera asking for the video and the camera will process it. In order not to block the IMA for so long, when the clip is ready the camera will send it to another endpoint in the IMA.
