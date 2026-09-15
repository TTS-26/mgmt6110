# Assessment

Name: Tusti Tanaya Saharia  
Product: Snuffers  
Problem Set 2: Put a real back end behind it

## Front-end criteria

### 1. Clear weather information
**Why it matters:** A user should be able to understand the current weather forecast without having to leave the Snuffers website.

**Evidence:** The Snuffers interface now shows a live weather badge for Singapore City, for example, “City: Partly Cloudy (Night)”.

**Status: Met**

### 2. Existing Snuffers experience is preserved
**Why it matters:** The new weather feature should add useful information without removing or breaking the existing product experience.

**Evidence:** The weather information was added to the existing Snuffers interface rather than replacing the existing product content.

**Status: Met**

### 3. The interface handles weather data that is not immediately available
**Why it matters:** The user should not see a broken or confusing interface if the weather data is still loading or is unavailable.

**Evidence:** The weather component has separate messages for loading, no available forecast data, a refused request, and an unreachable weather service.

**Status: Met**

### 4. The weather claim is connected to a real source
**Why it matters:** The weather displayed to the user should come from a real external service rather than being made up or hard-coded.

**Evidence:** The weather information comes from the Singapore National Environment Agency/data.gov.sg two-hour weather forecast service. The footer also identifies the source.

**Status: Met**

## Back-end criteria

### 1. Live data is retrieved through the product's own back end
**Why it matters:** The external weather service should not be called directly from the front end. The product should have its own back-end function handling the request.

**Evidence:** The project uses `api/weather.js` as the back-end endpoint. It fetches the weather data from the official data.gov.sg API and returns the relevant Singapore City forecast to the front end.

**Status: Met**

### 2. The health endpoint makes the back end checkable
**Why it matters:** Someone evaluating the product should be able to check whether the back end is working instead of only looking at the front end.

**Evidence:** The production `/api/health` endpoint returns the upstream status and whether the upstream service answered. The production check returned HTTP status 200 from the weather service.

**Status: Met**

### 3. The weather service is not called more often than necessary
**Why it matters:** Repeatedly calling an external service is unnecessary and could create reliability or usage problems.

**Evidence:** The weather endpoint uses a 30-minute in-memory cache, so repeated requests can use the cached result instead of calling the external weather service every time.

**Status: Met**

### 4. Failures produce useful responses
**Why it matters:** If the external service fails, the user should receive a meaningful message rather than a completely broken page.

**Evidence:** The implementation checks the upstream response and handles non-success responses and network failures. The front end also has separate states for loading, empty data, refused requests, and an unreachable service.

**Status: Partly met**

The different failure states are implemented in the code, but I did not manually trigger and verify every possible failure state on the production website.

### 5. No credential is exposed
**Why it matters:** API credentials should not be exposed in the GitHub repository or sent unnecessarily to the browser.

**Evidence:** The selected weather service is a public data.gov.sg service and does not require an API key. The health endpoint therefore reports `keyConfigured: false`.

**Status: Met**

### 6. The back end uses the real weather response structure
**Why it matters:** The back end should work with the actual response from the external service rather than assuming a made-up data format.

**Evidence:** The back end reads the `data.items` and `forecasts` fields from the data.gov.sg response and selects the forecast where the area is `City`.

**Status: Met**

## Collaboration with the AI agent

### 1. Where did the agent make you faster, and by how much?

The biggest time saving was that I did not have to write the back-end code from scratch. I could describe what the assignment required and use the agent to generate the API functions and connect the weather information to the existing front end. I still had to test the result myself, but this was much faster than building and debugging everything from the beginning. I would estimate that it saved me a few hours of coding time.

### 2. Where did it cost you time, and whose fault was that?

The biggest time loss happened when the agent initially created a `server.ts` file and added a dog-walk weather recommendation. At first it looked like a reasonable implementation, but it did not match what the assignment was asking for. I had to go back to the assignment, identify that recommendation was a Type B claim and was not part of this problem set, and then correct the implementation. I think the responsibility was shared: I could have made the first prompt more specific, but I also needed to check the agent's output instead of assuming that it had interpreted the assignment correctly.

### 3. Did it ever hand you something that looked right and was not?

Yes. The first weather implementation looked quite convincing because it had a weather feature and additional recommendation logic. However, after checking it against the assignment, I realised that it had introduced functionality that was not required and had also created a `server.ts` file even though that was not the structure I needed for this project. This was a useful example of why something can look technically complete while still being wrong for the actual task.

### 4. What did you have to know in order to supervise it?

I needed to understand the difference between the assignment's Type A and Type B claims, especially that weather condition is a Type A live-data claim while recommendation is a Type B claim. I also needed to understand where the back end should sit in the existing project, what the `/api/health` endpoint was supposed to check, and that the AI Studio preview was not the right place to verify the Vercel API routes. Most importantly, I had to keep checking the agent's output against the actual assignment instead of treating its first answer as correct.

### 5. Which decisions did you keep, and should you have kept more or fewer?

I kept the important product decisions, including using Singapore City weather, using the official data.gov.sg weather service, keeping the weather feature simple, having separate states for unavailable data, and using a cache. I also decided not to include the dog-walk recommendation after checking the assignment. I think keeping these decisions was appropriate because they affected what the product was claiming and what the user would see. I could have allowed the agent to make more of the implementation decisions, but I should still keep control over the product purpose, the data source, and what counts as acceptable evidence.

### 6. Now scale it up: what does this mean for a team of thirty?

With a team of thirty people using AI agents, the main issue would be making sure that everyone does not blindly accept what their agent produces. I would want a human review step before an AI-generated change is accepted, especially for decisions involving live data, security, external services, or what the product tells users. There should also be a record of the prompts and changes so that another person can understand how a feature was produced. The experience from this project showed me that an agent can produce something that looks finished but still does not satisfy the actual requirement, so a team would need clear review criteria and someone responsible for checking the final result against those criteria.
