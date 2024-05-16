


const barChartOptions = {
  series: [
    {
      data: [10, 8, 6, 4, 2],
      name: 'Products',
    },
  ],
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
    title: {
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: {
    title: {
      text: 'Count',
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Purchase Orders',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Sales Orders',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#00ab57', '#d50000'],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}




//table
document.addEventListener('DOMContentLoaded', function () {


  const token = localStorage.getItem('token');
  console.log(token);

 
  if (!token) {
    console.error('No token found in local storage. Please login first.');
    return; 
  }


  fetch('https://52.198.61.81:3001/portal/auth/user/list', {
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






// login 
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.querySelector('input[name="username"]').value;
  const password = document.getElementById('password').value;
  fetch('https://52.198.61.81:3001/portal/no-auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: username,
      password: password
    })
  })
  .then(response => response.json())
  .then(data => {
    
    if (data.token) {
      
      localStorage.setItem('token', data.token);
      
      
      showPopup();
      setTimeout(hidePopup, 2000);
      setTimeout(function() {
        window.location.href = 'dashboard.html';
      }, 2000);
    } else {
      document.getElementById('error-message').innerText = 'Invalid username or password';
    }
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('error-message').innerText = 'An error occurred. Please try again later.';
  });
});


function showPopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('fade-in');
  popup.style.display = 'block';
}


function hidePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}




// user data
document.addEventListener('DOMContentLoaded', function () {


  const token = localStorage.getItem('token');


  if (!token) {
    console.error('No token found in local storage. Please login first.');
    return; 
  }

  
  fetch('https://52.198.61.81:3001/portal/auth/user/list', {
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  })
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('usersBody');

    
    tableBody.innerHTML = ''; 

   
    data.data.forEach(user => {
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











