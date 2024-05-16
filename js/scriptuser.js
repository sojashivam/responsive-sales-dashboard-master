document.addEventListener('DOMContentLoaded', function () {

  // Retrieve token from local storage
  const token = localStorage.getItem('token');
  console.log(token);

  // Check if token exists
  if (!token) {
    console.error('No token found in local storage. Please login first.');
    return; 
  }

  
  fetch('http://52.198.61.81:3001/portal/auth/user/list', {
  headers: {
        'token':'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjYzMGNhMjcyZjYwYTk2NmZlZDJmYzdkIiwiaWF0IjoxNzE1NTk4NTQwLCJleHAiOjE3MTkxOTg1NDAsImF1ZCI6Imh0dHA6Ly9teXNvZnRjb3JwLmluIiwiaXNzIjoiTXlzb2Z0IGNvcnAiLCJzdWIiOiJzb21lQHVzZXIuY29tIn0.U3QmsXSRVUuAa7qdoZ8kVn6fpj7W6vhinUuhPr1t7uJhvyoyqPBz48EJa8exhLIrYlAwTCt048MnTQyLWfJobEkWm_sfsNesKgVZG-4OSaTW2edQnwkO2uzXylKfRUvw-HbA1vY6hkJGp24xV8VKkIzDJ6cX5aTc217wjlLshd8yyxp7aeB3QCI7OLTAUYPb4XX96suYHtb3OMBJLMjd4tykeE-_m74Zu0-er6Oifi1UrXpQ3_rXN8RHhjE7MSIEnaNX_cBBh-I_tUV8nC3d5KaznwKJg7fCujY9k0pkhiNP_-XQVLeiNrYIkvL9GmE0XY2kIKEF7IIe2AKbhE3T8g'
  }
  })
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('usersBody');
    tableBody.innerHTML = ''; 

   
      data.data.forEach(user => {
        console.log(user);
        const row = `
          <tr>
            <td>${user._id}</td>
            <td>${user.username}</td>
            <td>${user.phone}</td>
            <td>${user.walletBalance}</td>
            <td>${user.status}</td>
            <td>${new Date(user.createdAt).toLocaleDateString()}</td>
          </tr>
        `;
        tableBody.innerHTML += row;
      });
  })
  .catch(error => console.error('Error fetching user data:', error));
});