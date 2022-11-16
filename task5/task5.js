function printImg(data) {
    let box = document.querySelector('.img__box');
    box.innerHTML = '';

    let imgs = '';
    if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            imgs += `<img class="img" src="${data[i].download_url}" alt="">`
        }
    } else if (typeof data === 'string') {
        imgs = data;
    }
    box.insertAdjacentHTML("afterbegin", imgs);
}

function setLocalStorage(data) {
    let imgs = ''
    for (let i = 0; i < data.length; i++) {
        imgs += `<img class="img" src="${data[i].download_url}" alt="">`
    }
    localStorage.setItem('imgs', imgs);
}


let btn = document.querySelector('.btn')
btn.addEventListener('click', () => {

    let page = +document.querySelector('.page').value;
    let limit = +document.querySelector('.limit').value;
    let message = document.querySelector('.message');
    message.innerHTML = '';
    let imgBox = document.querySelector('.img__box');
    imgBox.innerHTML = '';

    if ((isNaN(page) || page < 1 || page > 10) && (isNaN(limit) || limit < 1 || limit > 10)) {
        message.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if (isNaN(page) || page < 1 || page > 10) {
        message.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    } else if (isNaN(limit) || limit < 1 || limit > 10) {
        message.innerHTML = 'Лимит вне диапазона от 1 до 10';
    } else {
        localStorage.clear();
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then((response) => { return response.json(); })
            .then((data) => new Promise((resolve, reject) => {
                printImg(data);
                resolve(data);
            }))
            .then((data) => {
                setLocalStorage(data);
                return 'ok';
            })
            .then((data) => console.log(data))
            .catch(() => { console.log('error') });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const imgs = localStorage.getItem('imgs');

    if (imgs) {
        printImg(imgs);
    }
});
