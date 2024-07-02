import formatDate from './format-date.js'

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id == null || id === '') {
    window.location.href = './owners.html';
}

const breadcrumb = document.getElementById('breadcrumb');
const oid = document.getElementById('id');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const address = document.getElementById('address');
const updated = document.getElementById('updated');

fetch('http://localhost:8080/api/owner/' + id)
    .then(rsp => {
        if (rsp.status === 200)
            return rsp.json();

        alert('Owner not found');
        window.location.href = './owners.html';
    })
    .then(data => {
        breadcrumb.innerText = `${data.firstName} ${data.lastName}`;
        oid.value = data.id;
        firstName.value = data.firstName;
        lastName.value = data.lastName;
        address.value = data.address;

        updated.value = formatDate(data.updatedAt);

        document.getElementById('save').addEventListener('click', () => {
            fetch(`http://localhost:8080/api/owner/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: firstName.value,
                    lastName: lastName.value,
                    address: address.value
                })
            })
                .then(rsp => {
                    if (rsp.ok) {
                        window.location.href = './owners.html';
                        return;
                    }
                    alert(`Changing owner wasn't successful (HTTP ${rsp.status})`);
                });
        });
    });
