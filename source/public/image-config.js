let images = [{
	title: "Pablo",
	date: "October 2016",
	urls: [
		"https://d2jk9tf9979qo8.cloudfront.net/pablo.png"
	],
	videos: [],
	thumbUrl: "https://d2jk9tf9979qo8.cloudfront.net/pablo-thumb.png",
	description: "Was gonna drop this Kanye Snapchat filter for the San Jose concert, but Snapchat was tryna to charge $1000. So here it is with a concert photo I found on google. I still hate myself for missing the live stream of The Life of Pablo album. When I first heard the album I was blown away by Kanye's production of the entire thing which I haven't felt since My Beautiful Dark Twisted Fantasy. I wish I could have seen his emotions when he debuted his new work he was so proud of. This now iconic photo of him at the debut is what inspired me to create this piece of him blessing us with his music."
},
{
	title: "Geo Munny",
	date: "September 2016",
	urls: [
		"https://d2jk9tf9979qo8.cloudfront.net/munny.png",
		"https://d2jk9tf9979qo8.cloudfront.net/munny-back.png"
	],
	videos: [
		"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbgkchan%2Fvideos%2F1071181832999241%2F&show_text=0",
		"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbgkchan%2Fvideos%2F1048388908611867%2F&show_text=0"
	
	],
	thumbUrl: "https://d2jk9tf9979qo8.cloudfront.net/munny-thumb.png",
	description: `This piece is about balance; body and mind, sharp and fluid. I wanted the pattern to flow from the ground and wrap up and around his head. I blended the blues and purples throughout the shapes to offset the rigid lines. The geometric pattern is composed of hard edges, but has a fluidness when observed as a whole.`
},
{
	title: "Coloring Book",
	date: "July 2016",
	urls: [
		"https://d2jk9tf9979qo8.cloudfront.net/chance.png"
	],
	videos: [],
	thumbUrl: "https://d2jk9tf9979qo8.cloudfront.net/chance-thumb.png",
	description: `Coloring Book probably has 20+ plays on my Spotify. Chance The Rapper's mix of gospel makes me feel like I'm doing something right, even while laying around hungover.

I wanted to capture the album's uplifting and playful sound, but none of my sketches felt right. Last weekend I visited the new SF MOMA and a few comic style pop pieces caught my eye.

Comic books. Coloring books. Chance the hometown hero. It just made sense. The final piece draws inspiration from from all these things while borrowing from the album cover's color scheme.`
},
{
	title: "Falling",
	date: "June 2016",
	urls: [
		"https://d2jk9tf9979qo8.cloudfront.net/falling.png"
	],
	videos: [
		"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbgkchan%2Fvideos%2F1020329221417836%2F&show_text=0"
	],
	thumbUrl: "https://d2jk9tf9979qo8.cloudfront.net/falling-thumb.png",
	description: `I wrote a note in my phone titled "You don't want to be successful, you want to: ". Below is a list of distractions from my goals, which is to become a better artist.

My list is: watch TV, mindlessly scroll IG explore, get drunk, watch vlogs of people with cooler lives.

My lazy mind can cheat itself by calling these activities "sources of inspiration", but the prefix keeps me honest. 

"You don't want to be successful. You want to get drunk."

I can't just say back "nuh uh, I want to improve my art", I have to show it. I have to put in the work.`
}]

images = images.map((image) => {
	return {
		...image,
		filename: image.title.toLowerCase().replace(/ /g, "-")
	}
})

export default images
