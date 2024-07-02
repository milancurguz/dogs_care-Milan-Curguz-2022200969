const saveButton = document.getElementById('save');
const dogIdInput = document.getElementById('id');
const ownerSelect = document.getElementById('owner');
const breadcrumb = document.getElementById('breadcrumb');

const urlParams = new URLSearchParams(window.location.search);
const dogId = urlParams.get('id');

fetch(`http://localhost:8080/api/dog/${dogId}`)
    .then(response => response.json())
    .then(dog => {
        breadcrumb.innerText = dog.name;
        dogIdInput.value = dog.id;
        document.getElementById('name').value = dog.name;
    });

fetch('http://localhost:8080/api/owner')
    .then(response => response.json())
    .then(owners => {
        owners.forEach(owner => {
            const option = document.createElement('option');
            option.value = owner.id;
            option.textContent = `${owner.firstName} ${owner.lastName}`;
            ownerSelect.appendChild(option);
        });
    });

saveButton.addEventListener('click', () => {
    const ownerId = ownerSelect.value;

    const adoptData = {
        dog: { id: parseInt(dogIdInput.value, 10) },
        owner: { id: parseInt(ownerId, 10) }
    };

    fetch('http://localhost:8080/api/dogowner', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(adoptData)
    })
        .then(response => {
            if (response.ok) {
                alert('Dog adopted successfully!');
                window.location.href = './info.html';
            } else {
                alert('Failed to adopt dog');
            }
        });
});

