import formatDate from './format-date.js'

const table = document.getElementById('owner-table');
const template = document.getElementById('owner');

function fetchOwners(url = '') {
    fetch(`http://localhost:8080/api/owner${url}`)
        .then(rsp => rsp.json())
        .then(data => {
            if (data.length === 0) {
                alert('Owner not found');
                fetchOwners();
                return;
            }
            data.forEach(owner => {
                const copy = template.content.cloneNode(true);
                copy.querySelector('.id').innerText = owner.id;
                copy.querySelector('.first_name').innerText = owner.firstName;
                copy.querySelector('.last_name').innerText = owner.lastName;
                copy.querySelector('.address').innerText = owner.address;
                copy.querySelector('.updated').innerText = formatDate(owner.updatedAt);
                copy.querySelector('.edit').href = `./edit-owner.html?id=${owner.id}`;
                copy.querySelector('.remove').addEventListener('click', () => {
                    if (confirm(`Do you want to delete owner ${owner.firstName} ${owner.lastName}`)) {
                        fetch(`http://localhost:8080/api/owner/${owner.id}`, {
                            method: 'DELETE',
                        })
                            .then(rsp => {
                                if (rsp.status === 204) {
                                    window.location.href = './owners.html';
                                    return;
                                }
                                alert(`Deleting owner wasn't successful (HTTP ${rsp.status})`);
                            });
                    }
                });
                table.appendChild(copy);
            });
        });
}

fetchOwners();
