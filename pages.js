var VERIFY_TOKEN = "bot1";
var PAGES = [
	// Add your pages here, change key for each one, I use numberical values starting at 0
	{
		id: "2336227523326753",
		name: "Speed Driver",
		key: "0",
		title: "Don't forget your daily free coins",
		subtitle: "We miss you, come back and play",
		cta: "Play Now",
		imageurl: "https://scontent.frak1-1.fna.fbcdn.net/v/t1.15752-9/60022386_894854647523610_4979244002449555456_n.png?_nc_cat=101&_nc_ht=scontent.frak1-1.fna&oh=a7a0c5fe318e386982846bf40d5119f5&oe=5D6DDC2E",
		payload: null,
		pat: "EAAGVjFpLQG0BACZBgLHN6dV0oTUTiQROyRTZCoZByzVcmTasOQe2meYKYSOwaZBG9pN6zg8uluFij8NZBFALr8CutpZBlPzAY6uX3I3ZCLknSavS2PlUK0MdgstkeovlRSfhGSZATLZAI7wHnvdhyPSBQXjMZBbNZBml26bTECZABDw8BAZDZD",
	},
];

function GetGame(page_id)
{
	for (var t = 0; t < PAGES.length; t++)
	{
		if (page_id === PAGES[t].id)
			return PAGES[t];
	}
}

function GetPage(which)
{
	return PAGES[which];
}

function GetVertifyToken()
{
	return VERIFY_TOKEN;
}

module.exports = 
{
	GetGame,
	GetPage,
	GetVertifyToken,
};
