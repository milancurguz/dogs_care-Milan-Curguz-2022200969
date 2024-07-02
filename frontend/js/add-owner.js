const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const address = document.getElementById('address');

document.getElementById('save').addEventListener('click', () => {
    if (firstName.value == null || firstName.value === '') {
        alert('The owner first name cannot be empty.');
        return;
    }

    if (lastName.value === null || lastName.value === '') {
        alert('The owner last name cannot be empty.');
        return;
    }


    if (address.value === null || address.value === '') {
        alert('The owner address cannot be empty.');
        return;
    }

    fetch('http://localhost:8080/api/owner', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value
        })
    }).then(rsp => {
        if (rsp.ok) {
            window.location.href = './owners.html';
            return;
        }
        alert(`Failed to add owner. Please try again. (HTTP ${rsp.status})`);
    });
});
