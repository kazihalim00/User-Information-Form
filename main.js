document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const tableContainer = document.getElementById("userTableContainer");

    const createTableIfNotExists = () => {
        if (!document.getElementById("userTable")) {
            const table = document.createElement("table");
            table.id = "userTable";
            table.className = "mt-10 w-full border border-gray-300 text-sm text-left shadow-md rounded-lg overflow-hidden";
            table.innerHTML = `
        <thead class="bg-indigo-100">
          <tr>
            <th class="border px-4 py-2">Username</th>
            <th class="border px-4 py-2">Email</th>
            <th class="border px-4 py-2">Phone</th>
            <th class="border px-4 py-2">Gender</th>
          </tr>
        </thead>
        <tbody id="tableBody" class="bg-white"></tbody>
      `;
            tableContainer.appendChild(table);
        }
    };

    const addRowToTable = (username, email, phone, gender) => {
        const tbody = document.getElementById("tableBody");
        const row = document.createElement("tr");
        row.innerHTML = `
      <td class="border px-4 py-2">${username}</td>
      <td class="border px-4 py-2">${email}</td>
      <td class="border px-4 py-2">${phone}</td>
      <td class="border px-4 py-2">${gender}</td>
    `;
        tbody.appendChild(row);
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const gender = form.gender.value;

        if (!username || !email || !phone || !gender) {
            alert("Please fill in all fields.");
            return;
        }

        createTableIfNotExists();
        addRowToTable(username, email, phone, gender);
        form.reset();
    });
});
