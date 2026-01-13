// Question Practice

/*
## Scenario 1 — Weather Dashboard with Error Handling

Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

### Requirements

- Make the API request asynchronously using `fetch` with `async/await`.
- Handle API request failures (for example, invalid city name) using `try/catch`.
- Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

### Suggested tasks

- Build a simple UI to input a city name and display the result.
- Show user-friendly error messages for network errors, invalid input, or API errors.
- Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.
 */

// let url = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={3dcc6fe87eaefbfcc1222c9b24414b81}`;

// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


async function getWeather(city){
    try{
    let apiKey = `3dcc6fe87eaefbfcc1222c9b24414b81`;

    let raw = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
    // .then((raw)=> raw.json())
    // .then((result)=>{
    //     console.log(result);
    // })

    if(!raw.ok){
        throw new Error("City not found, try something else")
    }
    
    let realData = await raw.json();

    if(realData.main.temp < 0){
        console.warn(`too cold out there! and the current temp is ${realData.main.temp}°C`);
    }
    else if (realData.main.temp > 40) {
      console.warn(`too hot out there! and the current temp is ${realData.main.temp}°C`);
    }
    else{
        console.log(realData);
    }

}
catch(err){
    console.log(err.message);
}
}

getWeather("delhi");



/*
## Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

### Requirements

- Send all emails in parallel using `Promise.all`.
- If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
- Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

### Suggested tasks

- Create an array of 5 mock email tasks that resolve or reject based on a random condition.
- Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
- Ensure the `finally` block runs to update the UI or console indicating completion.

*/


const user =["viv123@gmail.com", "happy@email.com", "ravi2chhakka.com"];

function sendEmail(email){
    return new Promise((resolve, reject)=>{
    let time = Math.floor(Math.random()*5);
    setTimeout(()=>{
        let probability = Math.floor(Math.random() * 10);

        if(probability <= 5){
            resolve("email sent successfully");
        }
        else{
            reject("email not sent")
        }
    },time*1000);
})
}


sendEmail("viv@123")
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})


function sendEmsils(userlist){
    userlist.map((user)=>{
        return 
    })
}