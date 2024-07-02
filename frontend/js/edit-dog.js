import formatDate from './format-date.js'

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id == null || id === '') {
    window.location.href = './index.html';
}

const breadcrumb = document.getElementById('breadcrumb');
const did = document.getElementById('id');
const image = document.getElementById('image');
const name = document.getElementById('name');
const breed = document.getElementById('breed');
const age = document.getElementById('age');
const updated = document.getElementById('updated');

fetch('http://localhost:8080/api/dog/' + id)
    .then(rsp => {
        if (rsp.status === 200)
            return rsp.json();

        alert('Dog not found');
        window.location.href = './index.html';
    })
    .then(data => {
        breadcrumb.innerText = `${data.name}`;
        did.value = data.id;
        image.value = data.img;
        name.value = data.name;
        breed.value = data.breed;
        age.value = data.age;

        updated.value = formatDate(data.updatedAt);

        document.getElementById('save').addEventListener('click', () => {
            fetch(`http://localhost:8080/api/dog/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name.value,
                    breed: breed.value,
                    age: age.value,
                    img: image.value
                })
            })
                .then(rsp => {
                    if (rsp.ok) {
                        window.location.href = './index.html';
                        return;
                    }
                    alert(`Changing dog wasn't successful (HTTP ${rsp.status})`);
                });
        });
    });
