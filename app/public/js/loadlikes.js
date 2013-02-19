
function loadLikes() {

    var head = document.getElementsByTagName('head').item(0);

/**
 * Recupero likes of Twitter
 * @type {Node}
*/
videosUrl = "https://api.twitter.com/1/followers/ids.json?cursor=-1&screen_name=milk_please&callback=setTwitterLikes";
videosJs = document.createElement('script');
videosJs.setAttribute('type', 'text/javascript');
videosJs.setAttribute('src', videosUrl);
head.appendChild(videosJs);
/**
* Recupero likes of Facebook
* @type {Node}
*/
videosUrl = "https://api.facebook.com/method/fql.query?query=select%20total_count,like_count%20from%20link_stat%20where%20url='http://www.facebook.com/milkplees'&format=json&callback=setFacebookLikes";
videosJs = document.createElement('script');
videosJs.setAttribute('type', 'text/javascript');
videosJs.setAttribute('src', videosUrl);
head.appendChild(videosJs);


/**
* Recupero likes of Vimeo
* @type {Node}
*/
videosUrl = "https://vimeo.com/api/v2/video/39701901.json?callback=setVimeoLikes";
videosJs = document.createElement('script');
videosJs.setAttribute('type', 'text/javascript');
videosJs.setAttribute('src', videosUrl);
head.appendChild(videosJs);
setVimeoLikes({"likes":"4"});


}

function setTwitterLikes(followers) {
    document.getElementById("like_twitter").innerHTML = followers.ids.length;
    }
function setVimeoLikes(info) {
    document.getElementById("like_vimeo").innerHTML = info[0].stats_number_of_likes;
    }

function setFacebookLikes(info) {
    document.getElementById("like_facebook").innerHTML = info[0].like_count;
    }

