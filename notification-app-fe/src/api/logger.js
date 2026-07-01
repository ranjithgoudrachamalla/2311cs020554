const BASE_URL = "http://4.224.186.213/evaluation-service";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyYW5qaXRocmFjaGFtYWxsYTJAZ21haWwuY29tIiwiZXhwIjoxNzgyODg1NzE0LCJpYXQiOjE3ODI4ODQ4MTQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI3ODkyMmJhYi0zOTQxLTQ5ZTMtOWEyYy1kOTk3ZTE2MDU0YWEiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJyYWNoYW1hbGxhIHJhbmppdGhnb3VkIiwic3ViIjoiYTdmMjQ0M2UtMTE2Mi00NzllLTk1ZmYtNmUxMTYxMDI5Y2JlIn0sImVtYWlsIjoicmFuaml0aHJhY2hhbWFsbGEyQGdtYWlsLmNvbSIsIm5hbWUiOiJyYWNoYW1hbGxhIHJhbmppdGhnb3VkIiwicm9sbE5vIjoiMjMxMWNzMDIwNTU0IiwiYWNjZXNzQ29kZSI6InhwUWRkZCIsImNsaWVudElEIjoiYTdmMjQ0M2UtMTE2Mi00NzllLTk1ZmYtNmUxMTYxMDI5Y2JlIiwiY2xpZW50U2VjcmV0IjoiRVBQUktEc3V2U1FaaEhORCJ9.xlqAW2EvCCEtO2cGreRIXrbAlz1uu9I2ypsLs7-G1tE";

export async function Log(stack, level, packageName, message) {
  try {
    const response = await fetch(`${BASE_URL}/logs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}