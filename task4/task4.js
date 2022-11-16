function printImg(url) {
    let imgBox = document.querySelector('.img__box');
    imgBox.innerHTML = '';

    let imgHtml = `<img class="img" src="${url}" alt="">`;
    imgBox.insertAdjacentHTML("afterbegin", imgHtml);
}


let btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    let width = +document.querySelector('.input-width').value;
    let height = +document.querySelector('.input-height').value;
    if (typeof width !== 'number' || typeof height !== 'number' || width < 100 || width > 300 || height < 100 || height > 300) {
        let imgBox = document.querySelector('.img__box');
        imgBox.innerHTML = '';

        let message = document.querySelector('.message');
        message.style.opacity = 1;
        setTimeout(function () {
            let message = document.querySelector('.message');
            message.style.opacity = 0;
        }, 2500)
    } else {
        fetch(`https://picsum.photos/${width}/${height}`)
            .then((response) => {
                if (response.ok) {
                    printImg(response.url)
                };
            })
            .catch(() => { console.log('error') });
    }
});