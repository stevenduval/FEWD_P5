// variables
const searchBox = document.getElementById('search');

// object for all of the images
let photoObj = {
    1: {
        alt: 'Hay Bales',
        caption: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.',
        src : {
            main: 'photos/01.jpg',
            thumbnail: 'photos/thumbnails/01.jpg',
        },
    },
    2: {
        alt: 'Lake',
        caption: 'The lake was so calm today. We had a great view of the snow on the mountains from here.',
        src : {
            main: 'photos/02.jpg',
            thumbnail: 'photos/thumbnails/02.jpg',
        },
    },
    3: {
        alt: 'Canyon',
        caption: 'I hiked to the top of the mountain and got this picture of the canyon and trees below.',
        src : {
            main: 'photos/03.jpg',
            thumbnail: 'photos/thumbnails/03.jpg',
        },
    },
    4: {
        alt: 'Iceberg',
        caption: 'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.',
        src : {
            main: 'photos/04.jpg',
            thumbnail: 'photos/thumbnails/04.jpg',
        },
    },
    5: {
        alt: 'Desert',
        caption: 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.',
        src : {
            main: 'photos/05.jpg',
            thumbnail: 'photos/thumbnails/05.jpg',
        },
    },
    6: {
        alt: 'Fall',
        caption: 'Fall is coming, I love when the leaves on the trees start to change color.',
        src : {
            main: 'photos/06.jpg',
            thumbnail: 'photos/thumbnails/06.jpg',
        },
    },
    7: {
        alt: 'Plantation',
        caption: 'I drove past this plantation yesterday, everything is so green!',
        src : {
            main: 'photos/07.jpg',
            thumbnail: 'photos/thumbnails/07.jpg',
        },
    },
    8: {
        alt: 'Dunes',
        caption: 'My summer vacation to the Oregon Coast. I love the sandy dunes!',
        src : {
            main: 'photos/08.jpg',
            thumbnail: 'photos/thumbnails/08.jpg',
        },
    },
    9: {
        alt: 'Countryside Lane',
        caption: 'We enjoyed a quiet stroll down this countryside lane.',
        src : {
            main: 'photos/09.jpg',
            thumbnail: 'photos/thumbnails/09.jpg',
        },
    },
    10: {
        alt: 'Sunset',
        caption: 'Sunset at the coast! The sky turned a lovely shade of orange.',
        src : {
            main: 'photos/10.jpg',
            thumbnail: 'photos/thumbnails/10.jpg',
        },
    },
    11: {
        alt: 'Cave',
        caption: 'I did a tour of a cave today and the view of the landscape below was breathtaking.',
        src : {
            main: 'photos/11.jpg',
            thumbnail: 'photos/thumbnails/11.jpg',
        },
    },
    12: {
        alt: 'Bluebells',
        caption: 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.',
        src : {
            main: 'photos/12.jpg',
            thumbnail: 'photos/thumbnails/12.jpg',
        },
    },
}

// functions

// append images to main element
const appendGalleryItems = (obj) => {
    // create main gallery container
    let galleryDiv = document.createElement('div');
    galleryDiv.setAttribute('class', 'gallery');
    
    for (image in obj) {
        // get current image we are working on
        let currentImage = photoObj[image];

        // create anchor
        let galleryAnchor = document.createElement('a');
        galleryAnchor.setAttribute('href', currentImage.src.main);
        galleryAnchor.setAttribute('data-caption', currentImage.caption);
        
        // create image
        let galleryImage = document.createElement('img');
        galleryImage.setAttribute('src', currentImage.src.thumbnail);
        galleryImage.setAttribute('alt', currentImage.alt);

        // append image to anchor and append anchor to gallery
        galleryAnchor.appendChild(galleryImage);
        galleryDiv.appendChild(galleryAnchor);
    }

    // append everything to main element
    document.querySelector('main').appendChild(galleryDiv);

    // start baugette box
    baguetteBox.run('.gallery');
}



// search function to filter images
const filterImages = ({ target: { value } }) => {
    let galleryImages = document.querySelectorAll('.gallery > a');
    // loop through all images
    galleryImages.forEach(image => {
        // get caption of image
        let caption = image.attributes['data-caption'].value.toLocaleLowerCase();
        // set display to none by default
        image.style.display = 'none';
        // if match then set the display
        if (caption.includes(value.toLocaleLowerCase())) { image.style.display = 'block'; } 
    });
};

// event listeners
searchBox.addEventListener('keyup', filterImages);

// things to execute

// initialize appending of gallery items
appendGalleryItems(photoObj);