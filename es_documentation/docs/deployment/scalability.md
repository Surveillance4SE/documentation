---
sidebar_position: 4
---

# Scalability

The ECS cluster's Auto Scaling group can be easily be configured to launch more compute power according to necessity. As for the Human Detection Module, the component which needs the best performance, it was configured to be running on a maximum of 3 tasks and minimum of 1, meaning that according to system load, new workers can be quickly deployed and start processing frames.