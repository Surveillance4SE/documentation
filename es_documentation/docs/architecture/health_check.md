---
sidebar_position: 4
---

# Health Checks

The health checks are implemented by hand, given the impossibility of using Route53 to monitor local components.

## Health Check Monitor

The health check monitor receives health pings from the components and registers their last ping. 
If the last ping was after a given threshold, it is considered dead.

When a device is considered dead, a message is sent to the relevant alarms that will activate, signaling the device death.

