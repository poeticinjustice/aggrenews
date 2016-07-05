**Progress report**

_Routing_

Going to the homepage initiates the template page, index.ejs, through an express route, which brings in head.ejs from the partials. head.ejs loads stylesheets, jquery and script.js.

Going to the domain first triggers app.js, which is declared in the package.json as the main page. The routing begins at app.js where apps are required by setting constants. This app was built with express, morgan, body-parser and path.

The express app and port are declared this way:

~~~js
const app               = express();
const port              = process.env.PORT || 3000;
~~~

Routes are then created with the controllers.
To create the home page, two routes were created as constants:

~~~js
const homeController    = require('./controllers/home');
const keyController     = require('./controllers/key');
~~~

The views path and ejs capabilities (the view engine) are also set in app.js, using app.set.
The views directory holds the ejs files that create the HTML pages users will see:

~~~js
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
~~~

A public path is also set with express.static. This takes a static route on the server and allows the public folder to become the root of the website. Static assets like styles and frontend javascript are loaded there:
app.use(express.static(path.join(__dirname,'public')));

Initial routes are set with the controllers. In my app, they are used to grab and return data from other databases

~~~js
app.use('/', homeController);
app.use('/key', keyController);
~~~

The home controller simply renders the home page:

~~~js
const router = require('express').Router();
router.get('/', function(req, res) {res.render('home/index');});
module.exports = router;
~~~

It first declares the express router, then a function renders the home page, and it exports itself to be recognized by the app.

The key controller retrieves the api key from where it's stored in the bash profile, gets information from that api, using the key in its url, and sends that data out with the key embedded in the url via res.send(body).
```
const gKey    = process.env.GUARDIAN_KEY;
router.get('/guardian', function(req, res) {
  reqmod('http://content.guardianapis.com/search?q=brexit&api-key='+gKey+'&format=json', function (error, response, body) {res.send(body);})
})
```


Script.js then parses that data using ajax and jQuery. It first calls from the url exported by the router (key/guardian), understands that the data it will be parsing will be in json format and indicates where the data will be distributed on the page when successfully retrieved.

~~~js
$.ajax({
  url: '/key/guardian',
  dataType: 'json',
  success: function (data) {
    var results = data.response.results;
    $(results).each(function(index){
      var content = results[index];
      $('.newsitem ul').append($('<li />', 
      {text: 'Date: ' + content.webPublicationDate}));
      ...
    });
  },
  error: function () {$(".newsitem").html('<p>Error: ' + error + '</p>');
  }
});
~~~

Need to figure out:
`app.use(bodyParser.json());`



**User Stories**

_Primary Users (revamp)_

- As users we changed our minds and decided that we want a news comparison engine. We'll tell you about it later but recognize that you have limited time to actually code, so go on with your bad self. You'll figure it out. Just think, "news comparison engine!"


_Primary User (update)_

- A guest should be able to log into the page and see an image of an example of what a user's page can look like
- It should then be obvious how to create an account, and that they, obviously, should create an account
- Users would automatically be loggged into their accounts once an account has been created, and they would have the option to log in and log out.
- Once a user is logged in, they should be able to select from a (limited) number of news sources and add them to their account (ideally, they would be able to preview their sources in a modal to see recent articles in the feed before adding)
- A user would choose a source to display on their feed by clicking the dropdown, selecting the source and clicking, "add."
- Each source should be displayed seperately in it's own box at first, and each API should be able to be searched individually. If the devloper can integrate the apis, then the user should be allowed to view and search all of the sources together. That would be after the MVC. Each API should still be able to be searched individually.
- Eventually, more sources would be added, and the views could be modified. That's not expected for the MVC.
- Unlike Feedly, rss feeds should be able to be added directly--that is not part of the MVC.
- While many news aggregators before have failed to showcase their greatest potential, mine will be unique by having corgis...all over the place. 

_ME_

I've signed up for and received API keys from the Gaurdian and NYT. I also received a developer token from feedly. Ultimately, I want to make a news aggregator. I've always wanted to make a news aggregator. I'm now going to make my own news aggregator because I deserve it. It won't be anywhere near what feedly can do, but whatever. I'm going to be a user who can customize my own news feed and this is my user story. 

_Another crappy user_

Hi, I'm another user, and I want to tell a story too. I love feedly, but sometimes, I want to add feeds that feedly doesn't access, and I want to have more specific controls over certain feeds. I've heard this dude can do that for me. He got a developer token from feedly, so he can use their API, but he can also customize a couple other papers, the Gaurdian and NYT using their APIs. He can also include json data and any rss feed. It would rock if this guy could get search results from each of those sources all at the same time, but I heard he's just a student in a 12 week course, so I'll just call that a bonus feature. Still, I hope that I'll at least be able to search the news sites one by one. Also, my friends want to be able to do the same when they log in, choosing sources and seeing feeds based on their chocices once logged in. They could see their own feedly feed, based on their feedly account if they have one, and they could add other rss, Guardian, NYT, and json files to their feeds.


![Quick Wireframe](wireframe.png "Quick Wireframe")

_Super Bonus User_

The above wireframe is a simple newsfeed. It's meant to focus on the news. I'm the super bonus user, and I'm demanding. This is if Ramzi learns how to code really fast. While the non-bonus site should link to articles, I would be psyched if I could move and resize each of the news sources to fit my super annoying bonus demands. There could even be maximize buttons that allow users to focus on a single source and perhaps an article without leaving the page or going to the original site (this will largely depend on the allowance of the apis/rss feeds).

_Realistic User_

I'm like Ramzi, and I know as well as he does that he has a lot to learn before being too ambitious. He's obviously going to keep this on his portfolio, and he knows that he can improve it in the future. He's always wanted to make this, so I'm sure it will be a work in progress when he has spare time. 

While he'll probably ruin his long weekend because his sadistic instructors rescheduled the project for the holiday, I know what the most important features that he should focus on are (I'm passive aggressive like Ramzi, too). First, I want him to figure out what the feedly api can actually do. If he can effectively use that, then that alone should be sufficient because it should be able to capture most news sources. Alternatively, I would like him to use the Guardian and the NYT, together, or just one. Just one means he really struggled with the APIs.  

Finally, other users should be able to log in and customize their news and news sources.

**API Keys and Developer Tokens--acquired**

http://open-platform.theguardian.com/access/

http://developer.nytimes.com/

https://developer.feedly.com/
