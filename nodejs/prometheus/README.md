# Prometheus Proof of Concept
Demonstrates basic prometheus metrics reporting with two different prometheus middleware packages


## **CAUTION**
1. prom-client@13.0.0 introduces [breaking changes][1] for both [express-prometheus-middleware][2] and [prometheus-api-metrics][3] (caused by promise utilization)

[1]: https://github.com/siimon/prom-client/releases "GitHub | siimon/prom-client Releases"
[2]: https://www.npmjs.com/package/prometheus-api-metrics "NPM | prometheus-api-metrics"
[3]: https://www.npmjs.com/package/express-prometheus-middleware "NPM | express-prometheus-middleware"
