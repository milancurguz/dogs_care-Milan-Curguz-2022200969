const name = document.getElementById('name');
const breed = document.getElementById('breed');
const age = document.getElementById('age');
const image = document.getElementById('image');

document.getElementById('save').addEventListener('click', () => {
    if (name.value == null || name.value === '') {
        alert('The dog name cannot be empty.');
        return;
    }

    if (breed.value === null || breed.value === '') {
        alert('The dog breed cannot be empty.');
        return;
    }

    if (age.value === null || age.value === '') {
        alert('The dog age cannot be empty.');
        return;
    }

    if (image.value === null || image.value === '') {
        alert('The dog image cannot be empty.');
        return;
    }

    fetch('http://localhost:8080/api/dog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            breed: breed.value,
            age: age.value,
            img: image.value
        })
    }).then(rsp => {
        if (rsp.ok) {
            window.location.href = './index.html';
            return;
        }
        alert(`Failed to add dog. Please try again. (HTTP ${rsp.status})`);
    });
});
