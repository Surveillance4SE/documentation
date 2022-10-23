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
