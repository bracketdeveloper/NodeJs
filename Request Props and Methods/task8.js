/* Task 8: Complete Request Analysis (HARD)
    Objective:Combine multiple request object properties to create a comprehensive request analyzer.
    Route Details:
    Path: POST /analyze-request/:actionWhat to do:
    Extract route parameter: action
    Extract query parameters: verbose (true/false)
    Extract body data: data (any object)
    Extract headers: X-Request-ID, Authorization
    Check if connection is secure
    Get client IP
    Determine accepted content type
    Compile all information into a comprehensive report */
const express = require("express");
const app = express();
app.use(express.json());
app.post("/analyze-request/:action", (req, res) => {
  const action = req.params.action;
  const verbose = req.query.verbose;
  const data = req.body || {};
  const xRequestId = req.get("x-request-id");
  const authorization = req.get("authorization");
  const isSecure = req.secure;
  const ip = req.ip;
  const acceptedContentType = req.accepts(["json", "html", "text"]);
  res.send({
    "Route Information": {
      action,
      "Full URL": req.originalUrl
    },
    "Request Details": {
      method: req.method,
      protocol: req.protocol,
      hostname: req.hostname,
      secure: isSecure
    },
    "Client Information": {
      "IP Address": ip
    },
    "Headers": {
      "Request ID": xRequestId,
      "Authorization": authorization,
      "User-Agent": req.get("User-Agent"),
      "Content-Type": req.get("Content-Type")
    },
    "Query Parameters": {
      verbose
    },
    "Body Data": data,
    "Content Negotiation": {
      "Accepts JSON": req.accepts('json') ? true : false,
      "Accepted Type": acceptedContentType
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
