async function updateNumber() {
  const response = await fetch("api/update_number.json");
  const data = await response.json();
  const newNumber = data.number + 1;

  const updatedData = { number: newNumber };

  await fetch("api/update_number.json", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  document.getElementById("number").textContent = newNumber;
}
