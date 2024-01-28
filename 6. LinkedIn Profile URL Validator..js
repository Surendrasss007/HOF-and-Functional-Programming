function validateLinkedInProfileURL(url) {
  // Regular expression for valid LinkedIn profile URLs
  const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

  // Test the input URL against the regular expression
  if (regex.test(url)) {
      console.log(`${url} is a valid LinkedIn profile URL.`);
  } else {
      console.log(`${url} is not a valid LinkedIn profile URL.`);
  }
}

// Example usage:
validateLinkedInProfileURL("https://www.linkedin.com/in/johndoe123");
validateLinkedInProfileURL("https://www.linkedin.com/in/jane_doe");
validateLinkedInProfileURL("https://www.linkedin.com/in/user-name-123");
validateLinkedInProfileURL("https://www.linkedin.com/in/invalid!profile");
