// intercept-console-error.js
fetch('/api/services')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Expected JSON, but received a different format');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching services:', error));