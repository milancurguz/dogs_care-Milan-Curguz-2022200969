import formatDate from './format-date.js';

const cardContainer = document.getElementById('card-container');
const template = document.getElementById('dogs');

function fetchDogs(url = '') {
    fetch(`http://localhost:8080/api/dog${url}`)
        .then(rsp => rsp.json())
        .then(data => {
            if (data.length === 0) {
                alert('Dog not found');
                fetchDogs();
                return;
            }
            data.forEach(dog => {
                const copy = template.content.cloneNode(true);
                copy.querySelector('.dog-img').src = dog.img;
                copy.querySelector('.name').innerText = `Name: ${dog.name}`;
                copy.querySelector('.breed').innerText = `Breed: ${dog.breed}`;
                copy.querySelector('.age').innerText = `Old: ${dog.age} years`;
                copy.querySelector('.updated').innerText = `Updated: ${formatDate(dog.updatedAt)}`;
                copy.querySelector('.edit').href = `./edit-dog.html?id=${dog.id}`;
                copy.querySelector('.adopt').href = `./adopt-dog.html?id=${dog.id}`;
                copy.querySelector('.remove').addEventListener('click', () => {
                    if (confirm(`Do you want to delete dog ${dog.name}?`)) {
                        fetch(`http://localhost:8080/api/dog/${dog.id}`, {
                            method: 'DELETE',
                        })
                            .then(rsp => {
                                if (rsp.status === 204) {
                                    window.location.href = './index.html';
                                    return;
                                }
                                alert(`Deleting dog wasn't successful (HTTP ${rsp.status})`);
                            });
                    }
                });

                cardContainer.appendChild(copy);
            });
        });
}

fetchDogs();
