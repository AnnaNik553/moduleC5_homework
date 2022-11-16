
function printImg(arr) {
    let imgBox = document.querySelector('.img__box');
    imgBox.innerHTML = '';

    let imgs = '';
    for (let i = 0; i < arr.length; i++) {
        imgs += `<img class="img" src="${arr[i].download_url}" alt="">`
    }
    imgBox.insertAdjacentHTML("afterbegin", imgs);
}


let btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    let num = document.querySelector('.input').value;
    if (!num || num < 1 || num > 10) {
        let imgBox = document.querySelector('.img__box');
        imgBox.innerHTML = '';

        let message = document.querySelector('.message');
        message.style.opacity = 1;
        setTimeout(function () {
            let message = document.querySelector('.message');
            message.style.opacity = 0;
        }, 2500)
    } else {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://picsum.photos/v2/list?limit=${num}`);
        xhr.send();
        xhr.onload = function () {
            console.log(JSON.parse(xhr.response))
            printImg(JSON.parse(xhr.response));
        };
    }
});

