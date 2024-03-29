$(document).ready(function() {
    let currentImgIndex = 0;
    const images = $('.slides img');
    const imageCount = images.length;

    setInterval(() => {
        const nextImgIndex = (currentImgIndex + 1) % imageCount;
        images.eq(currentImgIndex).css('transform', 'translateX(-100%)');
        images.eq(nextImgIndex).css('transform', 'translateX(0)');
        currentImgIndex = nextImgIndex;
    }, 3000); // Change every 3000 milliseconds (3 seconds)
});
