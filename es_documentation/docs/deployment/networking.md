---
sidebar_position: 2
---

# Networking

The solution one VPC, which is subnetted in a public subnet and several other private ones. The components deployed privately, are grouped according to their role for the solution:

- Database Cluster
- Message Broker
- User Interface
- APIs
- HDM + Redis

The APIs' subnet can access the internet through a NAT set on the public subnet, to allow both authentication on Cognito and access to S3 resources.

An internet-facing ALB proxied with an API Gateway allows users to publicly to access both the UI and the site management API.

## Security

The access to resources allows only the strictly necessary traffic. Which mean that, for example, not every instance inside the VPC can access the database cluster. This was achieved using security groups.