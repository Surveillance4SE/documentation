---
sidebar_position: 3
---

# Service Discovery

Using CloudMap and Route53, a service discovery solution was implemented in the system. When deployed, containers register their IP in a DNS record database, giving them a constant text value. This allows our other services to quickly resolve where each service is regardless of their current address.