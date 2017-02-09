

//Ajax part 
var searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'album',
            limit: 12
        },
        success: function (response){
            console.log(response);
            //Create an unordered list for the album cover gallery
            var imageGallery = '<ul class="cover">';
            //Cycle through the albums
            for(var i = 0; i < response.albums.items.length; i += 1) {
                imageGallery += '<li>';
                imageGallery += '<a data-lightbox="image"';
                //Add data attributes for lightbox.js - data-title sets the caption text
                imageGallery += 'data-title="Album: ' + response.albums.items[i].name + ' / Artist: ' + response.albums.items[i].artists[0].name + '"';
                //Add the image href - image for lightbox
                imageGallery += 'href="' + response.albums.items[i].images[0].url + '">';
                //Add image for gallery, uses smaller image
                imageGallery += '<img src="' + response.albums.items[i].images[1].url  + '" alt="Album: ' + response.albums.items[i].name + ' / Artist: ' + response.albums.items[i].artists[0].name + '"></a>';
                imageGallery += '</li>';
            } // End for loop
            //Append the image gallery to the results div in index.html
            imageGallery += '</ul>';
            $('#results').append(imageGallery);
        } //End success
    }); //End AJAX
}; //End searchAlbums function


//Event listener on submit 
document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    searchAlbums(document.getElementById('query').value);
});







 









