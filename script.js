function year(num) {
    if (num === 1) {
        return "year"
    } else {
        return "years"
    }
}

var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

var d = new Date()
var currentMonth = months[d.getMonth()]
var currentDay = d.getDate()

window.onload = function() {
    var ageButton = document.getElementById("age-button")
    var main = document.querySelector(".main")
    var career = document.getElementById("career")
    
    var grave = document.getElementById("grave")
    var graveScreen = document.getElementById("grave-screen")
    var graveName = document.getElementById("grave-name")
    var graveAge = document.getElementById("grave-age")
    var graveNetWorth = document.getElementById("grave-stats-net-worth")
    var graveResidence = document.getElementById("grave-stats-residence")
    var graveCareer = document.getElementById("grave-stats-career")
    var graveEducation = document.getElementById("grave-stats-education")
    var gravePrisonYears = document.getElementById("grave-stats-years-in-prison")

    career.innerText = "Infant"

    var major = "",
        myUniversity = "",
        universityStartAt = 0,
        paymentOption = "",
        inUni = false

    // Age Button Functionality
    var age = 0
    ageButton.onclick = function() {
        age += 1
        main.innerHTML += `<div id="age${age}" class="year"><div class="age-header">Age: ${age} ${year(age)}</div><div id="stats-age${age}" class="stats"></div></div>`

        var event1 = ["", "", "", "friend"]
        var chooseEvent = event1[Math.floor(Math.random() * event1.length)]
        event(chooseEvent)

        // Career Functionality
        if (age < psAge(country) || age === 0) {
            career.innerText = "Infant"
        } else if (age === psAge(country)) {
            career.innerText = `${schoolLevels[0]} Student`
        } else if (age === ssAge(country)) {
            career.innerText = `${schoolLevels[1]} Student`
        } else if (age === "14" && country == "us") {
            career.innerText = `${schoolLevels[2]} Student`
        } else if (age === gradAge(country)) {
            career.innerText = "Unemployed"
        } else if (inUni === true) {
            career.innerText = "University Student"
        }

        // Popup Functionality
        if (age === psAge(country)) {
            var myPrimarySchoolName = primarySchoolName

            document.getElementById("school-popup").style.display = "block"
            document.getElementById("school-stop-screen").style.display = "block"

            document.getElementById("school-popup-title").innerHTML = "Education"
            document.getElementById("school-popup-header").innerHTML = `🏫 ${schoolLevels[0]}`
            document.getElementById("school-popup-text").innerHTML = `You are starting ${schoolLevels[0].toLowerCase()}.
            <table>
                <tr>
                    <td><b>School:</b> ${myPrimarySchoolName}</td>
                </tr>
                <tr>
                    <td><b>Type:</b> ${schoolType}</td>
                </tr>
                <tr>
                    <td><b>Level:</b> ${schoolLevels[0]}</td>
                </tr>
                <tr>
                    <td><b>Years</b>: ${schoolYears(schoolLevels[0], country)}</td>
                </tr>
            </table>`

            document.getElementById(`stats-age${age}`).innerHTML += `<div>I have been enrolled in ${schoolLevels[0].toLowerCase()} at ${myPrimarySchoolName}.</div>`
            document.getElementById("school-popup-okay").onclick = function() {
                document.getElementById("school-popup").style.display = "none"
                document.getElementById("school-stop-screen").style.display = "none"
            }
        } else if (age === ssAge(country)) {
            var mySecondarySchoolName = secondarySchoolName

            document.getElementById("school-popup").style.display = "block"
            document.getElementById("school-stop-screen").style.display = "block"

            document.getElementById("school-popup-title").innerHTML = "Education"
            document.getElementById("school-popup-header").innerHTML = `🏫 ${schoolLevels[1]}`
            document.getElementById("school-popup-text").innerHTML = `You are starting ${schoolLevels[1].toLowerCase()}
            <table>
                <tr>
                    <td><b>School:</b> ${mySecondarySchoolName}</td>
                </tr>
                <tr>
                    <td><b>Type:</b> ${schoolType}</td>
                </tr>
                <tr>
                    <td><b>Level:</b> ${schoolLevels[1]}</td>
                </tr>
                <tr>
                    <td><b>Years:</b> ${schoolYears(schoolLevels[1], country)}</td>
                </tr>
            </table>`

            document.getElementById(`stats-age${age}`).innerHTML += `<div>I have been enrolled in ${schoolLevels[1].toLowerCase()} at ${mySecondarySchoolName}.</div>`
        } else if (age === "14") {
            if (country === "us") {
                var myHighSchoolName = highSchoolName

                document.getElementById("school-popup").style.display = "block"
                document.getElementById("school-stop-screen").style.display = "block"

                document.getElementById("school-popup-title").innerHTML = "Education"
                document.getElementById("school-popup-header").innerHTML = `🏫 ${schoolLevels[2]}`
                document.getElementById("school-popup-text").innerHTML = `You are starting ${schoolLevels[2].toLowerCase()}
                <table>
                    <tr>
                        <td><b>School:</b> ${myHighSchoolName}</td>
                    </tr>
                    <tr>
                        <td><b>Type:</b> ${schoolType}</td>
                    </tr>
                    <tr>
                        <td><b>Level:</b> ${schoolLevels[2]}</td>
                    </tr>
                    <tr>
                        <td><b>Years:</b> ${schoolYears(schoolLevels[2], country)}</td>
                    </tr>
                </table>`

                document.getElementById(`stats-age${age}`).innerHTML += `<div>I have been enrolled in ${schoolLevels[2].toLowerCase()} at ${myHighSchoolName}.</div>`
            }
        } else if (age === gradAge(country)) {
            document.getElementById("school-popup").style.display = "block"
            document.getElementById("school-stop-screen").style.display = "block"

            document.getElementById("school-popup-title").innerHTML = "Education"
            document.getElementById("school-popup-header").innerHTML = `🎓 Graduation`
            document.getElementById("school-popup-text").innerHTML = `You graduated from ${country == "us" ? schoolLevels[2].toLowerCase() : schoolLevels[1].toLowerCase()}.
            <br /><br />
            What will you do now?`
            document.getElementById("school-popup-buttons").innerHTML = `<button id="school-button1">Take some time off</button>
            <button id="school-button2">Apply to university</button>`

            document.getElementById(`stats-age${age}`).innerHTML += `<div>I have graduated from ${country == "us" ? schoolLevels[2].toLowerCase() : schoolLevels[1].toLowerCase()}.</div>`
        
            document.getElementById("school-button1").onclick = function() {
                document.getElementById("school-popup").style.display = "none"
                document.getElementById("school-stop-screen").style.display = "none"
            }
            document.getElementById("school-button2").onclick = function() {
                document.getElementById("school-popup").style.display = "none"
                document.getElementById("school-stop-screen").style.display = "none"



                document.getElementById("university-popup").style.display = "block"
                document.getElementById("university-stop-screen").style.display = "block"

                document.getElementById("university-popup-title").innerHTML = "Education"
                document.getElementById("university-popup-title").innerHTML = "Education"
                document.getElementById("university-popup-header").innerHTML = "🏛️ University"
                document.getElementById("university-popup-text").innerHTML = `Apply to university today!
                <div id="university-choose" class="popup-choose">
                    <label for="university-major">Pick your major:</label>
                    <select name="university-major" id="university-major">
                        <option value="computer-science">Computer Science</option>
                        <option value="finance">Finance</option>
                        <option value="economics">Economics</option>
                    </select>
                </div>`
                document.getElementById("university-popup-buttons").innerHTML = `<button id="university-button1">Apply to university</button>
                <button id="university-button2">Actually, never mind</button>`

                document.getElementById("university-button1").onclick = function() {
                    major = document.getElementById("university-major").value
                    universityStartAt = age

                    document.getElementById(`stats-age${age}`).innerHTML += "<div>I applied to university and was accepted.</div>"
                    document.getElementById("university-popup").style.display = "none"
                    document.getElementById("university-popup-accepted").style.display = "block"

                    myUniversity = getCollege("Seattle")
                    document.getElementById("university-popup-accepted-title").innerHTML = "Education"
                    document.getElementById("university-popup-accepted-header").innerHTML = `🏛️ University`
                    document.getElementById("university-popup-accepted-text").innerHTML = `How will you pay for your university program?
                    <table>
                        <tr>
                            <td><b>Annual Tuition:</b> $${Math.trunc(myUniversity[2] / myUniversity[1])}</td>
                        </tr>
                        <tr>
                            <td><b>Years:</b> ${myUniversity[1]}</td>
                        </tr>
                        <tr>
                            <td><b>Total Cost:</b> $${myUniversity[2]}</td>
                        </tr>
                    </table>`
                    document.getElementById("university-popup-accepted-buttons").innerHTML = `<button id="university-popup-accepted-button1">Ask my parents to pay</button>
                    <button id="university-popup-accepted-button2">Apply for a scholarship</button>
                    <button id="university-popup-accepted-button3">Apply for a student loan</button>`

                    document.getElementById("university-popup-accepted-button3").onclick = function() {
                        paymentOption = "student loan"

                        document.getElementById(`stats-age${age}`).innerHTML += "<div>I took out a student loan to pay for my university tuition.</div>"
                        document.getElementById("university-popup-accepted").style.display = "none"
                        document.getElementById("university-stop-screen").style.display = "none"

                        document.getElementById("university-student-loan").style.display = "block"
                        document.getElementById("university-student-loan-stop-screen").style.display = "block"
                    }
                    document.getElementById("university-student-loan-button1").onclick = function() {
                        inUni = true

                        document.getElementById(`stats-age${age}`).innerHTML += `<div>I started a university program in ${major.toLowerCase()}.</div>`
                        document.getElementById("university-student-loan").style.display = "none"
                        document.getElementById("university-student-loan-stop-screen").style.display = "none"

                        document.getElementById("success-popup").style.display = "block"
                        document.getElementById("success-stop-screen").style.display = "block"
                        document.getElementById("success-popup-title").innerHTML = successMessage
                        document.getElementById("success-popup-text").innerHTML = "You are now enrolled in university."

                        // Change Some Stuff
                        career.innerText = "University Student"
                    }
                    document.getElementById("success-popup-button1").onclick = function() {
                        document.getElementById("success-popup").style.display = "none"
                        document.getElementById("success-stop-screen").style.display = "none"
                    }
                }
            }
        }
        console.log(universityStartAt + myUniversity[1])
        if (age === universityStartAt + myUniversity[1]) {
            inUni = false

            document.getElementById("uni-grad-popup").style.display = "block"
            document.getElementById("university-stop-screen").style.display = "block"

            document.getElementById("uni-grad-popup-title").innerHTML = "Education"
            document.getElementById("uni-grad-popup-header").innerHTML = "🎓 Graduation"
            document.getElementById("uni-grad-popup-text").innerHTML = `You graduated from university with an undergraduate degree in ${major}.
            <br /><br />
            What will you do now?`
            document.getElementById("uni-grad-popup-buttons").innerHTML = `<button id="uni-grad-popup-button1">Look for a job</button>
            <button id="uni-grad-popup-button2">Seek higher education</button>
            <button id="uni-grad-popup-button3">Take some time off</button>`

            document.getElementById(`stats-age${age}`).innerHTML += `<div>I graduated from university with an undergraduate degree in ${major}.</div>`
            document.getElementById(`stats-age${age}`).innerHTML += `<div>${paymentOption == "student loan" ? "I have to start paying back my student loan for university." : ""}</div>`
            
            document.getElementById("uni-grad-popup-button3").onclick = function() {
                document.getElementById("uni-grad-popup").style.display = "none"
                document.getElementById("university-stop-screen").style.display = "none"
            }

            changeMoney(-myUniversity[2])
            career.innerText = "Unemployed"
        }

        // Change Friends Age
        if (friendsData.length !== 0) {
            for (let i = 0; i < friendsData.length; i++) {
                friendsData[i].age += 1
            }
        }

        // Add Chance For Death
        if (age === 100 || age > 100) {
            graveName.innerHTML = `${myName} ${mySurname}`
            graveAge.innerHTML = age == 1 ? `Aged 1 year` : `Aged ${age} years`
            graveNetWorth = `${currency(country)}${moneyCount}`

            grave.style.display = "block"
            graveScreen.style.display = "block"
        }

        // Random Global Event (cause that happens in BitLife for some reason)
        var disasterChance = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "1"]
        var getDisaster = disasterChance[Math.floor(Math.random() * disasterChance.length)]
        document.getElementById(`stats-age${age}`).innerHTML += `<div>${whatever(getDisaster)}</div>`

        function whatever(idk) {
            if (idk === "1") {
                let disasters = [`291 people have been safely evacuated, while 29 perish after a volcanic eruption in `]
                return ""
            } else {
                return ""
            }
        }
    }

    // Success Message
    var successMessages = ["Fresh meat", "Let's gooooo"]
    var successMessage = successMessages[Math.floor(Math.random() * successMessages.length)]

    // Flags
    var countries = ["ca", "us"]
    var country = countries[Math.floor(Math.random() * countries.length)]
    var elFlag = document.getElementById("flag")
    elFlag.innerHTML = `<img src="/assets/flags/${country}.png" class="flag" />`
    
    // Names
    var genders = ["male", "female"]
    var name = getName(genders[Math.floor(Math.random() * 2)])
    var femaleName = getName("female")
    var maleName = getName("male")

    var surnames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzales", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson"],
        surname = surnames[Math.floor(Math.random() * surnames.length)]

    var elName = document.getElementById("name")
    var getSelfGender = genders[Math.floor(Math.random() * 2)]
    if (getSelfGender === "male") {
        var myName = maleName,
            mySurname = surname
        elName.innerText = `${maleName} ${surname}`
    } else if (getSelfGender === "female") {
        var myName = femaleName,
            mySurname = surname
        elName.innerText = `${femaleName} ${surname}`
    }
    var motherName = femaleName,
        fatherName = maleName

    // School Stuff
    var schoolTypes = ["Public", "Private"]
    var schoolType = schoolTypes[Math.floor(Math.random() * schoolTypes.length)]
    if (country === "us") {
        var schoolLevels = ["Elementary School", "Middle School", "High School"]
    } else {
        var schoolLevels = ["Primary School", "Secondary School"]
    }
    
    var schoolNames = ["St. Sara's"]
    var primarySchoolName = `${schoolNames[Math.floor(Math.random() * schoolNames.length)]} ${schoolLevels[0]}`
    var secondarySchoolName = `${schoolNames[Math.floor(Math.random() * schoolNames.length)]} ${schoolLevels[1]}`
    var highSchoolName = `${schoolNames[Math.floor(Math.random() * schoolNames.length)]} ${schoolLevels[2]}`

    // Event Stuff
    var friends = 0
    var friendsData = []

    var eventTypes = ["friend"]
    var pickEvent = eventTypes[Math.floor(Math.random() * eventTypes.length)]
    function event(type) {
        if (type === "friend") {
            let friendGender = randomGender()
            let friendForename = getName(friendGender)
            let friendSurname = surnames[Math.floor(Math.random() * surnames.length)]
            let friendName = `${friendForename} ${friendSurname}`
            let friendAge = [age - 1, age + 1]
            friendAge = friendAge[Math.floor(Math.random() * friendAge.length)]
            let friendPronouns = friendGender == "male" ? ["he", "him"] : ["she", "her"]
            let friendLooks = Math.floor(Math.random() * 100)
            let friendSmarts = Math.floor(Math.random() * 100)
            let friendCraziness = Math.floor(Math.random() * 100)

            document.getElementById("friend-popup").style.display = "block"
            document.getElementById("friend-stop-screen").style.display = "block"

            document.getElementById("friend-popup-title").innerHTML = "Friend"
            document.getElementById("friend-popup-subtitle").innerHTML = `${friendName}`
            document.getElementById("friend-popup-header").innerHTML = `🤗 New Friend`
            document.getElementById("friend-popup-text").innerHTML = `${friendPopupPrefix(career.innerText)}${friendForename}${friendPopupComma(career.innerText)} wants to become your friend.
            <table>
                <tr>
                    <td><b>Name:</b> ${friendName}</td>
                </tr>
                <tr>
                    <td><b>Gender:</b> ${toTitleCase(friendGender)}
                </tr>
                <tr>
                    <td><b>Age:</b> ${friendAge}
                </tr>
            </table>
            <div id="friend-popup-bars" class="popup-bars">
                <div class="progress">
                    <label for="friendLooks">Looks</label><progress id="friendLooks" value="${friendLooks}" max="100" ${progressColor(friendLooks)}></progress>
                </div>
                <div class="progress">
                    <label for="friendSmarts">Smarts</label><progress id="friendSmarts" value="${friendSmarts}" max="100" ${progressColor(friendSmarts)}></progress>
                </div>
                <div class="progress">
                    <label for="friendCrazy">Craziness</label><progress id="friendCrazy" value="${friendCraziness}" max="100" ${crazinessColor(friendCraziness)}></progress>
                </div>
            </div>`
            document.getElementById("friend-popup-buttons").innerHTML = `<button id="becomeFriends">Become friends with ${friendPronouns[1]}</button>
            <button id="rejectFriends">Reject ${friendPronouns[1]}</button>`

            var becomeFriends = document.getElementById("becomeFriends")
            var rejectFriends = document.getElementById("rejectFriends")

            becomeFriends.onclick = function() {
                var friendScreen = document.getElementById("relationships-screen-section-friends")
                friendScreen.innerHTML = ""

                friends += 1
                friendsData.push({
                    "gender": friendGender,
                    "name": friendName,
                    "age": friendAge,
                    "pronouns": [friendPronouns[0], friendPronouns[1]],
                    "looks": friendLooks,
                    "smarts": friendSmarts,
                    "craziness": friendCraziness
                })
                document.getElementById(`stats-age${age}`).innerHTML += `<div>I became friends with ${friendName}.</div>`

                document.getElementById("friend-popup").style.display = "none"
                document.getElementById("friend-stop-screen").style.display = "none"

                for (let i = 0; i < friendsData.length; i++) {
                    friendScreen.innerHTML += `<ul>
                        <li>
                            <div class="relationship-name">${friendsData[i].name}</div> <div class="relationship-label">Friend</div>
                        </li>
                    </ul>`
                }
            }
            rejectFriends.onclick = function() {
                friends += 0

                document.getElementById("friend-popup").style.display = "none"
                document.getElementById("friend-stop-screen").style.display = "none"
            }
        }
    }

    // Currency Stuff
    var money = document.getElementById("money-count")
    var moneyCount = 0
    money.innerHTML = moneyCount < 0 ? `-${currency(country)}${Math.abs(moneyCount)}` : moneyCount == 0 ? `${currency(country)}0` : `${currency(country)}${moneyCount}`
    money.classList.add(moneyCount < 0 ? "negative" : moneyCount > 0 ? "positive" : "neutral")

    // Load Stuff
    var myCity = getCity(country)

    var age0Message = `I was born a ${getSelfGender} as ${myName} ${mySurname} in ${myCity}.
    
    My mother is ${motherName} ${mySurname}.
    My father is ${fatherName} ${mySurname}.
    
    My birthday is ${currentMonth} ${currentDay}.`
    document.getElementById("stats-age0").innerText = age0Message

    // Grave Stuff
    document.getElementById("grave-net-worth").innerHTML = `${currency(country)}${moneyCount}`
    document.getElementById("grave-residence").innerHTML = `${myCity}`
    document.getElementById("grave-career").innerHTML = `Placeholder`
    document.getElementById("grave-education").innerHTML = `Placeholder`
    document.getElementById("grave-years-in-prison").innerHTML = `Placeholder`

    // Scroll Thing
    setInterval(function() {
        var isScrolledToBottom = main.scrollHeight - main.clientHeight <= main.scrollTop + 1;
        if (!isScrolledToBottom)
            main.scrollTop = main.scrollHeight - main.clientHeight
    })

    // Functions (that have to be defined in here)
    function changeMoney(value) {
        moneyCount += value
        money.innerHTML = moneyCount < 0 ? `-${currency(country)}${Math.abs(moneyCount)}` : `${currency(country)}${moneyCount}`
        money.classList.add(moneyCount < 0 ? "negative" : moneyCount > 0 ? "positive" : "neutral")
    }

    // Some Stuff For Relationships
    var relationshipsFather = document.querySelectorAll("#relationships-screen #relationships-screen-section-parents li:first-child")[0]
    var relationshipsMother = document.querySelectorAll("#relationships-screen #relationships-screen-section-parents li:last-child")[0]

    relationshipsFather.querySelector(".relationship-name").innerText = `${fatherName} ${mySurname}`
    relationshipsMother.querySelector(".relationship-name").innerText = `${motherName} ${mySurname}`

    document.getElementById("relationships-screen-close").onclick = function() {
        document.getElementById("relationships-screen").style.display = "none"
    }
}

// Functions
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function friendPopupPrefix(career) {
    if (career === "Infant" || career === "Unemployed") {
        return ""
    } else if (career === "Elementary School Student" || career === "Middle School Student" || career === "High School Student" || career === "Primary School Student" || career === "Secondary School Student" || career === "University Student") {
        return "Your classmate, "
    }
}
function friendPopupComma(career) {
    if (career === "Infant" || career === "Unemployed") {
        return ""
    } else if (career === "Elementary School Student" || career === "Middle School Student" || career === "High School Student" || career === "Primary School Student" || career === "Secondary School Student" || career === "University Student") {
        return ","
    }
}

function randomGender() {
    var genders = ["male", "female"]
    return genders[Math.floor(Math.random() * genders.length)]
}
function getName(gender) {
    if (gender === "female") {
        var femaleNames = ["Mary", "Patricia", "Linda", "Barbara", "Elizabeth", "Jennifer", "Maria", "Susan", "Margaret", "Dorothy", "Lisa", "Nancy", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Michelle", "Laura", "Sarah", "Kimberly", "Deborah"]
        return femaleNames[Math.floor(Math.random() * femaleNames.length)]
    } else if (gender === "male") {
        var maleNames = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Charles", "Joseph", "Thomas", "Christopher", "Daniel", "Paul", "Mark", "Donald", "George", "Kenneth", "Steven", "Edward", "Brian", "Ronald", "Anthony", "Kevin", "Jason", "Jeff"]
        return maleNames[Math.floor(Math.random() * maleNames.length)]
    }
}
function getCity(country) {
    if (country === "ca") {
        var caCities = ["Vancouver", "Ottawa"]
        return `${caCities[Math.floor(Math.random() * caCities.length)]}, Canada`
    } else if (country === "us") {
        var usCities = ["Seattle", "Portland"]
        return `${usCities[Math.floor(Math.random() * usCities.length)]}, United States`
    }
}
function getCollege(city) {
    if (city === "Seattle") {
        var colleges = [
            {
                "name": "Seattle University",
                "years": 4,
                "cost": 48390
            }
        ]
        var pickCollege = colleges[Math.floor(Math.random() * colleges.length)]
        return [pickCollege.name, pickCollege.years, pickCollege.cost]
    }
}

function schoolYears(level, country) {
    if (country === "ca") {
        return level == "Primary School" ? 6 : 6
    } else if (country === "us") {
        return level == "Elementary School" ? 5 : level == "Middle School" ? 3 : 4
    }
}
function psAge(country) {
    if (country === "ca") {
        return 6
    } else if (country === "us") {
        return 5
    }
}
function ssAge(country) {
    if (country === "ca") {
        return 12
    } else if (country === "us") {
        return 10
    }
}
function gradAge(country) {
    if (country === "ca") {
        return 18
    } else if (country === "us") {
        return 18
    }
}

function progressColor(value) {
    if (value < 25) {
        return 'class="red"'
    } else if (value < 50 && value > 25) {
        return `class="orange"`
    } else if (value > 50 && value < 101) {
        return ""
    }
}
function crazinessColor(value) {
    if (value < 25) {
        return ""
    } else if (value < 50 && value > 25) {
        return `class="orange"`
    } else if (value > 50 && value < 101) {
        return `class="red"`
    }
}

function currency(country) {
    if (country === "ca" || country == "us") {
        return "$"
    }
}
