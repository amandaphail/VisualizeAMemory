# Project Overview

## Project Name

Experience a Memory

## Project Description

Do you ever have a memory stand out so strongly you can remember what the street looks like, whether it was an achievement, happy moment, or just beautiful view? Or maybe one you wish to log forever? Here you can do just that, by sharing with our community your fondest memories. Create a post with the location and memory details, as well as a link to the google map location in person view, so we can all experience the view!

The user will go to google maps and get this link. I'll include a user guide with screen shots on where to go to find this link, so the user can understand what needs to be submitted when creating a post.

![alt text](https://res.cloudinary.com/mandatea/image/upload/v1616772089/EmbedURLFetch_euy0ki.png "Logo Title Text 1")

## Wireframes

![alt text](https://res.cloudinary.com/mandatea/image/upload/v1616772987/Memory_Wireframes_ddm30y.png "Logo Title Text 1")

## Component Hierarchy

![alt text](https://res.cloudinary.com/mandatea/image/upload/v1616772104/Component_Hierarchy_knadew.png "Logo Title Text 1")

## API and Data Sample

```json
{
  "id": "reckXRF2SnDWVlSCO",
  "fields": {
    "type": "beach",
    "name": "Amanda",
    "description": "About a 45 minute walk form the parking lot on the side of the highway my friends and I finally found this relic.  We were able to climb in and out of...",
    "memoryLink": "<iframe src=\"https://www.google.com/maps/embed?pb=!4v1616714253083!6m8!1m7!1sCAoSLEFGMVFpcE5ZRDZkNXZFLW1RZ1BBMUt4SGduemdMUlAzTHNpUDlPZXVYcHpt!2m2!1d63...",
    "location": "Iceland"
  },
  "createdTime": "2021-03-25T23:19:15.000Z"
}
```

## MVP

- Be a working, interactive React app, built using create react app
- Utilize React Router, installed via NPM.
- Have at least 6 separate, rendered components.
- Implement an organized and understandable React file structure.
- Utilize functional and class React components appropriately.
- Use Axios to consume data from Airtable, and GET/render that data in your components.
- Use Axios to POST/create new data on Airtable.
- Use only React for DOM Manipulation.

- Use useHistory
- Have map from google map populate the page so we can insert ourself in the memory setting
- Have a user guide component to show how to find the embedded code on google maps street view which they will copy and paste in the form

## PostMVP

- Delete your post
- Update your post
- Wiew collection of posts you've made - possibly by a log in
- Allow user to view a random memory
- Allow user to search for memory by location and/or location type

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

| Day           | Deliverable                                                                                          | Status     |
| ------------- | ---------------------------------------------------------------------------------------------------- | ---------- |
| March 25 - 26 | Prompt / Wireframes / Component Hierarchy / Timeframes and Experiment with iframe and Map Embed Link | Complete   |
| March 26      | Project Approval                                                                                     | Incomplete |
| March 27 - 28 | pseudo code / Core Component and Route Structure / Import API and access information                 | Incomplete |
| March 28      | Get Map and description to display on page through Memories component                                | Incomplete |
| March 29      | Form component and Create Post                                                                       | Incomplete |
| March 30      | Create User Guide "How to Post"                                                                      | Incomplete |
| March 31      | CSS and Media Query                                                                                  | Incomplete |
| April 1       | MVP                                                                                                  | Incomplete |
| April 2       | Presentations                                                                                        | Incomplete |

## Timeframes

| Component                                                             | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Set up Boiler Plate code and components                               |    M     |      1 hr      |      N/A      |     N/A     |
| Import axios and react-router-dom, getting these set up in components |    M     |      1 hr      |      N/A      |     N/A     |
| Hide baseURL and API key                                              |    M     |      1 hr      |      N/A      |     N/A     |
| Get axios data access and Set Route Paths                             |    M     |      2 hr      |      N/A      |     N/A     |
| Code Navbar component with Links                                      |    M     |      1 hr      |      N/A      |     N/A     |
| Code Memories component with API info displaying                      |    M     |      3 hr      |      N/A      |     N/A     |
| Get Map embed code to display functionally                            |    H     |      4 hr      |      N/A      |     N/A     |
| CSS Navbar and Memories component                                     |    M     |      3 hr      |      N/A      |     N/A     |
| Code Form component                                                   |    M     |      2 hr      |      N/A      |     N/A     |
| Inputs value set to state                                             |    M     |      1 hr      |      N/A      |     N/A     |
| Post input to homepage on submit                                      |    M     |      2 hr      |      N/A      |     N/A     |
| User Guide prompts on load of Form component                          |    H     |      1 hr      |      N/A      |     N/A     |
| CSS Form component                                                    |    M     |      2 hr      |      N/A      |     N/A     |
| Create User Guide prompt Component code and full instructions         |    H     |      3 hr      |      N/A      |     N/A     |
| Have user guide as pop up over page instead of redirect               |    H     |      3 hr      |      N/A      |     N/A     |
| User Guide CSS                                                        |    M     |      2 hr      |      N/A      |     N/A     |
| Responsive Design - 1st device                                        |    M     |      2 hr      |      N/A      |     N/A     |
| Responsive Design - 2nd device                                        |    M     |      2 hr      |      N/A      |     N/A     |
| Total                                                                 |          |     36 hrs     |     5hrs      |    5hrs     |

## SWOT Analysis

### Strengths:

I feel like I'm understanding React pretty well, and I believe in this project and myself. I'm great at feeling out how difficult a problem will be for me in the moment, so I can adapt my schedule and priorities accordingly.

### Weaknesses:

I can get overwhelmed when I cant find a solution to a problem quickly, and instead of asking for help I try to continue to figure it out on my own, and researching on the Internet. I find myself wasting time, which makes me more overwhelmed, so I end up stuck in an infinite loop. I need a better understanding of when to call it quits and ask for help.

### Opportunities:

Learning the basics of how to use and style iframe and also how to create a pop up window on my page are both challenges I'm excited for.

### Threats:

I've never worked with iframe and without knowing how it works I'm intimidated by it. I do think it should be fairly simple but more worried about the unknown. I also need to make a clear user guide so the users have a straight forward way to understand what needs to be input, or it wont work.
