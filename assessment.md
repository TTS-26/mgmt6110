# MGMT 6110 Problem Set 2 — Assessment

**Name:** Tusti Tanaya Saharia  
**Product:** Snuffers  
**Problem Set:** 2 — Put a real back end behind it

---

## 1. Front-End Criteria

### Criterion 1 — Clear Weather Information

**Why it matters to my user:**  
A Snuffers visitor should be able to understand the live weather information quickly without needing instructions, since the weather feature is intended to provide useful current information within the existing product.

**Testable evidence:**  
A visitor can open the live product and see the current Singapore City weather condition displayed in the Snuffers interface.

**Self-assessment:** **Met**

**Evidence:**  
The production site displays the live weather condition as a weather badge, for example, showing the City forecast such as "Partly Cloudy (Night)."

---

### Criterion 2 — Existing Snuffers Experience Is Preserved

**Why it matters to my user:**  
Existing Snuffers users should still be able to use the dog clothing product interface without the new weather feature disrupting the original design or functionality.

**Testable evidence:**  
A visitor can open the product and use the existing Snuffers interface while the weather feature appears as an additional element rather than replacing the existing product experience.

**Self-assessment:** **Met**

**Evidence:**  
The weather feature was added to the existing Snuffers interface without rebuilding the product or changing its main screens and functionality.

---

### Criterion 3 — Clear States When Weather Data Is Not Immediately Available

**Why it matters to my user:**  
A user should know what is happening when the weather information is loading, unavailable, refused by the provider, or unreachable instead of seeing a blank area or a generic failure.

**Testable evidence:**  
The weather component provides separate user-visible messages for loading, empty data, upstream refusal, and upstream unreachable states.

**Self-assessment:** **Met**

**Evidence:**  
The implemented weather component contains four distinct states with separate messages for loading, empty data, upstream refusal, and upstream unreachable conditions.

---

### Criterion 4 — Weather Claim Is Supported by a Real Source

**Why it matters to my user:**  
A live weather claim should be based on actual published weather information rather than a value invented or manually entered into the Snuffers interface.

**Testable evidence:**  
The weather shown on the production product comes from the Singapore NEA/data.gov.sg weather service through the product's own backend.

**Self-assessment:** **Met**

**Evidence:**  
The production weather badge displays the City forecast returned by the NEA/data.gov.sg 2-hour weather forecast service, and the footer credits the live weather data source.

---

## 2. Back-End Criteria

### Criterion 1 — Live Data Is Retrieved Through the Product's Own Backend

**Why it matters to my user:**  
The weather claim should come from a real external source while the browser communicates with the Snuffers backend rather than directly depending on the provider.

**Testable evidence:**  
The repository contains `api/weather.js`, and the frontend requests `/api/weather` rather than calling the NEA/data.gov.sg endpoint directly.

**Self-assessment:** **Met**

**Evidence:**  
The implemented backend function is located at `api/weather.js`, calls the NEA/data.gov.sg endpoint, and the frontend calls `/api/weather`.

---

### Criterion 2 — Health Endpoint Makes the Backend Status Checkable

**Why it matters to my user:**  
If the weather service stops working, somebody maintaining the product needs a way to distinguish an application problem from an upstream service problem.

**Testable evidence:**  
Opening `/api/health` returns `keyConfigured`, `upstreamAnswered`, `upstreamStatus`, and `checkedAt` without exposing any credential.

**Self-assessment:** **Met**

**Evidence:**  
The production `/api/health` endpoint returned:

`keyConfigured: false`, `upstreamAnswered: true`, `upstreamStatus: 200`, and a `checkedAt` timestamp.

---

### Criterion 3 — The Weather Service Is Not Called More Often Than Necessary

**Why it matters to my user:**  
The weather source updates every 30 minutes, so repeatedly requesting the same information wastes requests and can create unnecessary load or rate-limit problems.

**Testable evidence:**  
The weather backend caches the successful weather response for approximately 30 minutes before making another upstream request.

**Self-assessment:** **Met**

**Evidence:**  
`api/weather.js` contains a 30-minute in-memory cache for the weather response, matching the source's update frequency.

---

### Criterion 4 — Failures Produce Useful Responses

**Why it matters to my user:**  
A backend failure should result in a meaningful state that can be understood and acted on rather than an unexplained blank screen.

**Testable evidence:**  
The backend distinguishes empty data, an upstream non-2xx/refused response, and an unreachable upstream, and the frontend displays different messages for these cases.

**Self-assessment:** **Partly met**

**Evidence:**  
The implementation contains separate handling for empty data, upstream refusal, and upstream unreachable conditions, and the frontend has distinct messages for all four required states. However, during my final verification I directly verified the successful production path and `/api/health`, but I did not manually trigger every failure condition against the live deployment.

---

### Criterion 5 — No Credential Is Exposed

**Why it matters to my user:**  
The backend should not expose credentials or sensitive configuration to visitors or store unnecessary secrets in the repository.

**Testable evidence:**  
The repository and frontend contain no weather API credential, and `/api/health` reports only whether a credential is configured rather than exposing a credential value.

**Self-assessment:** **Met**

**Evidence:**  
The selected NEA/data.gov.sg weather service requires no API key or signup. The production health endpoint reports `keyConfigured: false` and does not expose any credential.

---

### Criterion 6 — The Backend Uses the Real Weather Response Shape

**Why it matters to my user:**  
The product should display the actual weather condition published for Singapore City rather than relying on guessed field names or invented data.

**Testable evidence:**  
The backend reads `data.items[0].forecasts`, finds the forecast where `area === "City"`, and returns the weather information required by the screen.

**Self-assessment:** **Met**

**Evidence:**  
The implemented `api/weather.js` matches the `City` area in the actual NEA/data.gov.sg response and returns the area and forecast used by the weather badge.

---

## 3. Collaboration Assessment

### Q1 — Where did the agent make you faster, and by how much?

The agent made me significantly faster at the production work. The biggest time saving was writing and revising the backend functions and connecting them to the existing frontend. Instead of manually writing the serverless function, the health endpoint, the weather component, and the error-state handling line by line, I could describe the required behaviour and have the agent produce the implementation in minutes. This allowed me to spend more time checking whether the implementation actually followed the Problem Set 2 requirements.

However, I found that some tasks were faster to do or verify myself. For example, checking the production `/api/health` endpoint directly in the browser was much faster than asking the agent to tell me whether it worked.

---

### Q2 — Where did it cost you time, and whose fault was that?

The biggest loss of time came from the first implementation. My initial prompt asked for a live weather feature, but the agent created a `server.ts` backend and also added weather-based dog-walking/outing recommendation logic. The recommendation was outside the scope of this Problem Set because the assignment treats recommendations as a Type B claim rather than the live Type A weather claim I needed.

Part of the problem was the agent's implementation choice, but I also could have made the scope even more explicit in my first prompt. I corrected this by writing a second prompt that explicitly prohibited `server.ts`, required the root-level `api/` folder, and removed all recommendation logic.

---

### Q3 — Did it ever hand you something that looked right and was not?

Yes. The first implementation looked reasonable because it produced a weather-related feature for the Snuffers product, but it was not correct for the assignment. It introduced a `server.ts` backend and a dog-walking/outing recommendation, which sounded useful but did not match the actual Problem Set 2 scope.

I found this by checking the implementation against the assignment rather than judging it only by whether the screen looked good. The assignment explicitly separates Type A live claims such as weather conditions from Type B recommendations, and says Type B recommendations are not part of this problem set. I then prompted the agent to remove the recommendation and use the required root-level `api/weather.js` and `api/health.js` functions.

---

### Q4 — What did you have to know in order to supervise it?

I needed to understand the distinction between a live Type A claim and a Type B recommendation, because otherwise the first implementation could have looked correct even though it was outside the assignment.

I also needed to understand the required project structure: the backend functions had to be in the root-level `api/` directory, the browser had to call my own `/api/weather` endpoint, and the actual upstream weather API had to be called server-side.

Finally, I needed to know how to verify the result rather than trusting the AI Studio preview. The assignment explains that AI Studio does not run the Vercel-style `api/` routes in its preview, so I checked the actual production `/api/health` endpoint on Vercel. That verification returned `keyConfigured: false`, `upstreamAnswered: true`, and `upstreamStatus: 200`.

---

### Q5 — Which decisions did you keep, and should you have kept more or fewer?

I kept the important product and implementation decisions: choosing the NEA/data.gov.sg weather service, using the `City` forecast, keeping the weather feature simple rather than turning it into a recommendation system, using a 30-minute cache, preserving the existing Snuffers design, and deciding what should happen when the weather data is loading, empty, refused, or unreachable.

I also kept the decision to remove the recommendation logic after the first implementation because it was outside the scope of the assignment.

I think I should continue to keep these higher-level decisions myself. The agent was useful for production work such as writing and revising the functions and frontend code, but the first implementation showed me that I should not delegate decisions about the product scope or assignment requirements.

---

### Q6 — Now scale it up: what does this mean for a team of thirty?

If thirty people were using AI agents to build a product that an organisation depended on, I would require a clear human review point between AI production and deployment. Each person could use an agent to produce code, but the agent should not be allowed to independently decide important product requirements, data sources, security choices, or what happens when a service fails.

I would require each AI-assisted change to have a short prompt/change record, a human reviewer, and a test or verification step before deployment. The team should also have a shared rule that live external claims must be traced to their source and that credentials must never be exposed in frontend code or the repository. This would make it possible to see not only what the agent produced, but also who made the important decisions and how the result was verified.
