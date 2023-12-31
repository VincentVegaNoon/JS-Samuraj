async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => console.log(users))
  .catch((error) => console.log(error));
