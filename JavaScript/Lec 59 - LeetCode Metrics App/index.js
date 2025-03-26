document.addEventListener('DOMContentLoaded', () => {

    // gather ids
    const usernameInput = document.getElementById('username-input');
    const searchButton = document.getElementById('search-btn');

    const statsContainer = document.querySelector('.stats-container');
    const statsCardContainer = document.querySelector(".stats-cards");
    const overviewLabel = document.getElementById("overview-label");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const overviewProgressCircle = document.querySelector('.overview-progress');
    const easyProgressCircle = document.querySelector('.easy-progress');
    const mediumProgressCircle = document.querySelector('.medium-progress');
    const hardProgressCircle = document.querySelector('.hard-progress');

    const user = document.getElementById("username");
    const rank = document.getElementById("ranking");
    const reputation = document.getElementById("reputation");
    const acceptance = document.getElementById("acceptance-rate");
    const contribution = document.getElementById("contribution-points");


    // handle search buttons and input field

    function validateUsername(username) {
        if (username.trim() === "") {
            alert("Username cannot be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isValid = regex.test(username);
        if (!isValid) {
            alert("Username is not valid");
            return false;
        }
        return isValid;
    }

    async function fetchUserDetails(username) {

        try {
            searchButton.disabled = true;
            searchButton.classList.toggle("bg-blue-800", "hover:bg-blue-600");
            searchButton.classList.add("bg-blue-600");
            searchButton.textContent = "Fetching...";

            const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
            const data = await response.json();
            if (data.status === "error") {
                throw new Error("Unable to fetch the User details");
            }
            console.log("User Details: ", data);

            const submissionCalendar = data.submissionCalendar
            console.log("submissionCalendar: ", submissionCalendar)

            displayUserData(data);
        } catch (error) {

            statsContainer.innerHTML = `<h1 class="text-2xl text-red-500 text-center font-bold py-2">${error.message}</h1>`;
            // statsCardContainer.innerHTML = `<h1 class="text-2xl text-red-500 text-center font-bold py-2">${error.message}</h1>`;

        } finally {

            searchButton.disabled = false;
            searchButton.textContent = "Search";
            usernameInput.value = "";
            searchButton.classList.remove("bg-blue-600");
            searchButton.classList.toggle("bg-blue-800", "hover:bg-blue-600");
        }
    }

    function updateProgress(solved, total, label, circle) {
        const progressDegree = (solved / total) * 100;
        label.textContent = `${solved}/${total}`;
        circle.style.setProperty("--progress—degree", `${progressDegree}%`)

    }

    function displayUserData(parsedData) {
        const totalQuestions = parsedData.totalQuestions;
        const totalSolved = parsedData.totalSolved;

        const totalEasy = parsedData.totalEasy;
        const easySolved = parsedData.easySolved;

        const totalMedium = parsedData.totalMedium;
        const mediumSolved = parsedData.mediumSolved;

        const totalHard = parsedData.totalHard;
        const hardSolved = parsedData.hardSolved;

        updateProgress(easySolved, totalEasy, easyLabel, easyProgressCircle);
        updateProgress(mediumSolved, totalMedium, mediumLabel, mediumProgressCircle);
        updateProgress(hardSolved, totalHard, hardLabel, hardProgressCircle);
        updateProgress(totalSolved, totalQuestions, overviewLabel, overviewProgressCircle);

        statsCardContainer.classList.remove("hidden");
        user.textContent = usernameInput.value;
        rank.textContent = parsedData.ranking;
        reputation.textContent = parsedData.reputation;
        acceptance.textContent = parsedData.acceptanceRate;
        contribution.textContent = parsedData.contributionPoints;


    }


    searchButton.addEventListener("click", () => {

        const username = usernameInput.value;

        if (validateUsername(username)) {
            fetchUserDetails(username);
        }

    })



});