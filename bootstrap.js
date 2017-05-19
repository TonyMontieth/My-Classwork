// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'Cleveland Cavaliers', 		// this is the TITLE place in the class
				'https://www.youtube.com/watch?v=hc8T3WmXy8Y',	// this is the LINK place in the class
				'Anthony Montieth',			// this is the AUTHOR place in the class
				'cc.jpg',	// this is the IMAGE place in the class
				'Key Players: LeBron James, Kyrie Irving, Kevin Love' // this is the BODY place in the class
				),

			new Post(
				'Golden Sate Warriors',
				'https://www.youtube.com/watch?v=5F2eLoN1wH0',
				'Anthony Montieth',
				'Unknown.png', // this is a local image in the same folder as the js script
				'Key Players: Stephen Curry, Kevin Durant, Klay Thompson' // this is the BODY place in the class
				),

			new Post(
				'San Antonio Spurs',
				'https://www.youtube.com/watch?v=QcOrubGf65E',
				'Anthony Montieth',
				'SAS.png',
				'Key Players without Kawhi and Tony: LaMarcus Aldridge, Jonathon Simmons, Danny Green'
				),

			new Post(
				'Boston Celtics',
				'https://www.youtube.com/watch?v=cX4J-nMO9rE',
				'Anthony Montieth',
				'BC.jpg',
				'Key Players: Isaiah Thomas, Kelly Olynyk, Al Horford'
				),

			new Post(
				'Repeat of 2015 2016 NBA Finals?',
				'https://www.youtube.com/watch?v=UXRPFjpS7T8',
				'Anthony Montieth',
				'images.jpeg',
				'If there is a repeat, I think the Warriors will win, especially now that they have Durant'
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



