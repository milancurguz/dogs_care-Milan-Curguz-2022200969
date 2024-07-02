const table = document.getElementById('info-table');
const template = document.getElementById('info');

function fetchInfo(url = '') {
    fetch(`http://localhost:8080/api/dogowner${url}`)
        .then(rsp => rsp.json())
        .then(data => {
            if (data.length === 0) {
                alert('Info not found');
                fetchInfo();
                return;
            }
            data.forEach(info => {
                const copy = template.content.cloneNode(true);
                copy.querySelector('.id').innerText = info.id;
                copy.querySelector('.owner-first-name').innerText = info.owner.firstName;
                copy.querySelector('.owner-last-name').innerText = info.owner.lastName;
                copy.querySelector('.dog-name').innerText = info.dog.name;
                copy.querySelector('.dog-breed').innerText = info.dog.breed;

                table.appendChild(copy);
            });
        });
}

fetchInfo();
