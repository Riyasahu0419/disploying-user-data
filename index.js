document.getElementById('fetch').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://reqres.in/api/users/1')
        .then(response => response.json())
        .then(data => displayData(data.data))
        .catch(error => console.error('Error fetching user data:', error));
}

function displayData(user) {
    const DataContainer = document.getElementById('DataContainer');
    DataContainer.innerHTML = `
        <div class="user">
            <img src="https://biographypeople.com/wp-content/uploads/2023/08/Rohit-Chandel.webp
            " class="avatar">
            <p>Name: Rohit Chandel</p>
            <p>Email: rohitchandel@02gmail.com</p>
        </div>
    `;
}



