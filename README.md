# TIME Stories API

This is a simple API that fetches the latest stories from TIME's website.

## Getting Started

Follow these steps to get started with the API:

1. clone this repository to your local machine:
2. npm install
3. node controller.js

### Example Request
GET http://localhost:3000/getTimeStories

### Example Response
```json
[
    {
        "title": "Scenes of Destruction and Resilience in Maui After the Fire",
        "link": "https://time.com/6304795/photos-maui-fire-aftermath-climate-change-destruction-resilience/"
    },
    {
        "title": "The 100 Best Movies of the Past 10 Decades",
        "link": "https://time.com/collection/100-best-movies/"
    },
    {
        "title": "She Wasn't Able to Get an Abortion. Now She's a Mom. Soon She'll Start 7th Grade. ",
        "link": "https://time.com/6303701/a-rape-in-mississippi/"
    },
    {
        "title": "The Alarming Rise of Wholesome Romance",
        "link": "https://time.com/6303477/red-white-and-royal-blue-wholesome-romance/"
    },
    {
        "title": "Why the Maui Wildfires Were So Deadly",
        "link": "https://time.com/6305113/maui-wildfire-cause-hawaii/"
    },
    {
        "title": "Unprecedented Ruling Issued In Montana Youth Climate Trial",
        "link": "https://time.com/6304689/montana-youth-climate-trial-ruling/"
    }
]



