# Introduction

This system is notified when the [HDM](#) detects an intrusion.

Upon detection, the IMA must ask the [Notifications API](#) to send the adequate notifications and make a video of the frames in the cameras.

# Implementation

## V1

In this phase, this module is implemented as a lambda function, and all frames are stored in an S3 bucket.

The IMA is triggered by the [HDM](#), then notifies [Notifications API](#) and takes the adequate frames from S3, storing the generated video there as well.
