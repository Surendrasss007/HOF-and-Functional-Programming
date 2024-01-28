function validateURL(url) {
  // Define the regex pattern for a valid URL
  const urlPattern = /^(https?:\/\/)[a-zA-Z0-9-_.]+[a-zA-Z]$/;

  // Test if the provided URL matches the pattern
  if (urlPattern.test(url)) {
    console.log(`${url} is a valid URL.`);
  } else {
    console.log(`${url} is not a valid URL.`);
  }
}

// Test cases
validateURL("http://www.google.com");    // Valid URL
validateURL("https://api.example.org");    // Valid URL
validateURL("ftp://invalid-surendra.com");      // Invalid URL
validateURL("https://Surendra-url");        // valid URL
validateURL("http://123.45.678.90");       // Valid URL with IP address
