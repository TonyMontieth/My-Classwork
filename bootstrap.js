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
				'The Cleveland Cavaliers have beaten the Boston Celtics in 5 games. LeBron James passed Michael Jordan in the all time scoring list in the playoffs with 5,995 points. The first two series the Cavs swept (Pacers and Raptors) and only lost once to the Celtics before taking them to town on game 5. Cleveland has been here before, momentum going into the Finals healthy, but can they really defeat their biggest rivals of the 21 century. ' // this is the BODY place in the class
				),

			new Post(
				'Golden Sate Warriors',
				'https://www.youtube.com/watch?v=5F2eLoN1wH0',
				'Anthony Montieth',
				'Unknown.png', // this is a local image in the same folder as the js script
				'The Golden State Warriors are 12-0 heading into the 2017 NBA finals by sweeping the Portland, Jazz, and the Spurs. They are the first team in NBA history to start the playoffs 12-0 heading into the finals, and Im not surprised at all. Now that Game 1 is complete, the Warriors are in really good shape because the main problem with the Cavs is their defence is absolute garbage. Durant slamed home 6 dunks in the first quarter, basically sealing the game. ' // this is the BODY place in the class
				),

			new Post(
				'San Antonio Spurs',
				'https://www.youtube.com/watch?v=TUp2AQW_dKc',
				'Anthony Montieth',
				'SAS.png',
				'The San Antonio Spurs had a promising season but unluckily for them Kawhi Leonard got hurt by Zaza in game 1 after almost scoring 25 points. Also Manu Ginobili could potentially be retiring which would not be good for the Spurs because he is a big factor to their success. Even though they could be losing key star players, they are also in the talks with Chris Paul from the Los Angeles Clippers. If they get Chris Paul, they could be serious contenders in beating the Golden Sate Warriors next year. '
				),

			new Post(
				'Boston Celtics',
				'https://www.youtube.com/watch?v=5lQ6gwu4prM',
				'Anthony Montieth',
				'BC.jpg',
				'The Bosten Celtics had a amazing season by taking the number one sead from the Cavs and finishing second in the Eastern Conference to the Cavs but their future is very promising. Since the Celtics traded away key players to the Nets back in the day, they received two first round picks from the Nets for the 2107 draft and 2018 draft. Since the Nets were the worst team in the league, this forced the Celtics to have the first overall pick in the draft. '
				),

			new Post(
				'Repeat of 2015-2016 NBA Finals? The trilogy!',
				'https://www.youtube.com/watch?v=rvmkPRJtbdU',
				'Anthony Montieth',
				'images.jpeg',
				'The three-peat we have all been waiting for from the Cleveland Cavaliers and the Golden State Warriors. Last year the series went to 7 games after the warriors blew a 3-1 lead that cost them the championship. This year, the warriors recruited Kevin Durant to aid them in their journey back to get their redemption. The Cleveland Cavaliers are the reigning champs that are looking to defend the throne by making sure the warriors dont take it back. They also recruited a few players themselfs like Kyle Korver and Deron Williams and even keeping Kyrie Irving healthy.  '
				),
				
			new Post(
				'Game 1 of the 2017 NBA Finals',
				'https://www.youtube.com/watch?v=CT-j2HAhvn0',
				'Anthony Montieth',
				'images.jpg',
				'Game 1 was a complete blowout from the Golden Sate Warriors because KD was a huge factor in their win. He had 38 points with 8 rebounds and 8 assists and no turnovers. Along with KD and his 6 dunks in the first quarter, Curry scored 28 with 6-11 shooting at the three and 11-22 from the field. He also had 10 rebounds and was only 4 assists away from a triple-double. On the Cleveland side of the ball, LeBron scored 28 points while recording 15 rebounds and 8 assists but those stats came along with 8 turnovers which cost them dearly. '
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



