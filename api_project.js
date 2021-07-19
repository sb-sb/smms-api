define({
  "name": "SM.MS API",
  "version": "2.0.0",
  "description": "API v2 Documentation",
  "title": "SM.MS v2 API Docs",
  "header": {
    "content": "<h2>Basic</h2>\n<p>SM.MS API exposes the infrastructure via a standardized programmatic interface.</p>\n<p>The API is accessed by making HTTPS requests to a specific version endpoint URL, in which GET, POST, PUT, PATCH, and DELETE methods dictate how your interact with the information available. Every endpoint is accessed only via the SSL-enabled HTTPS (port 443) protocol.</p>\n<p>The stable base URL for all Version 2 HTTPS endpoints is:</p>\n<pre class=\"prettyprint\">https://sm.ms/api/v2/\n</code></pre>\n<h2>Authentication</h2>\n<p>Authenticate requests by setting the Authorization header with a valid API key.</p>\n<p>We accept just the API key:</p>\n<pre class=\"prettyprint\"> \"Authorization\": \"14ac5499cfdd2bb2859e4476d2e5b1d2bad079bf\"\n</code></pre>\n<p>or Basic type and the API key:</p>\n<pre class=\"prettyprint\">\"Authorization\": \"Basic 14ac5499cfdd2bb2859e4476d2e5b1d2bad079bf\"\n</code></pre>\n<p>Make sure you've stored your API key somewhere secure and never share them publicly.</p>\n"
  },
  "sampleUrl": null,
  "order": [
    "Auth",
    "User",
    "Image"
  ],
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2021-07-19T07:32:41.045Z",
    "url": "https://apidocjs.com",
    "version": "0.28.1"
  }
});
