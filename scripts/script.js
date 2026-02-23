const allJobs = [{
    id: 1,
    companyName: "Mobile First Corp",
    jobTitle: "React Native Developer",
    jobTypeSalary: "Remote • Full-time • $130,000 - $175,000",
    jobLevel: "NOT APPLIED",
    jobDescription: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    greenBtn: "INTERVIEW",
    redBtn: "REJECTED"
}, {
    id: 2,
    companyName: "WebFlow Agency",
    jobTitle: "Web Designer & Developer",
    jobTypeSalary: "Los Angeles, CA • Part-time • $80,000 - $120,000",
    jobLevel: "NOT APPLIED",
    jobDescription: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    greenBtn: "INTERVIEW",
    redBtn: "REJECTED"
}, {
    id: 3,
    companyName: "DataViz Solutions",
    jobTitle: "Data Visualization Specialist",
    jobTypeSalary: "Boston, MA • Full-time • $125,000 - $165,000",
    jobLevel: "NOT APPLIED",
    jobDescription: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    greenBtn: "INTERVIEW",
    redBtn: "REJECTED"
}, {
    id: 4,
    companyName: "CloudFirst Inc",
    jobTitle: "Backend Developer",
    jobTypeSalary: "Seattle, WA • Full-time • $140,000 - $190,000",
    jobLevel: "NOT APPLIED",
    jobDescription: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    greenBtn: "INTERVIEW",
    redBtn: "REJECTED"
}, {
    id: 5,
    companyName: "Innovation Labs",
    jobTitle: "UI/UX Engineer",
    jobTypeSalary: "Austin, TX • Full-time • $110,000 - $150,000",
    jobLevel: "NOT APPLIED",
    jobDescription: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    greenBtn: "INTERVIEW",
    redBtn: "REJECTED"
}, {
    id: 6,
    companyName: "MegaCorp Solutions",
    jobTitle: "JavaScript Developer",
    jobTypeSalary: "New York, NY • Full-time • $130,000 - $170,00",
    jobLevel: "NOT APPLIED",
    jobDescription: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    greenBtn: "INTERVIEW",
    redBtn: "REJECTED"
}, {
    id: 7,
    companyName: "StartupXYZ",
    jobTitle: "Full Stack Engineer",
    jobTypeSalary: "Remote • Full-time • $120,000 - $160,000",
    jobLevel: "NOT APPLIED",
    jobDescription: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    greenBtn: "INTERVIEW",
    redBtn: "REJECTED"
}, {
    id: 8,
    companyName: "TechCorp Industries",
    jobTitle: "Senior Frontend Developer",
    jobTypeSalary: "San Francisco, CA • Full-time • $130,000 - $175,000",
    jobLevel: "NOT APPLIED",
    jobDescription: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    greenBtn: "INTERVIEW",
    redBtn: "REJECTED"
}
];


const jobCardsSection = document.getElementById('job-cards-section');


// counter
const totalCounter = document.getElementById("total-counter");
const interviewCounter = document.getElementById("interview-counter");
const rejectedCounter = document.getElementById("rejected-counter");
// avaiable jobs
const interRejectDisplay = document.getElementById("inter-reject-display");
const intRejDisplay = document.getElementById("intrej-display");
const avaiableJobs = document.getElementById("available");

function counter() {
    interviewCounter.innerText = 0;
    rejectedCounter.innerText = 0;

    for (const card of allJobs) {
        const level = card.jobLevel;
        if (level === "INTERVIEW") {
            interviewCounter.innerText++;
        } else if (level === "REJECTED") {
            rejectedCounter.innerText++;
        }
    }
    
    totalCounter.innerText = allJobs.length;


    avaiableJobs.innerText = totalCounter.innerText;
}

totalCounter.innerText = allJobs.length;

avaiableJobs.innerText = allJobs.length;




// Interview section
let section = "All";

const interviewBtn = document.getElementById("interview-btn");

const interviewJobs = [];

function interview() {
    interviewJobs.length = 0;
    for (let i = 0; i < allJobs.length; i++){
        const a = allJobs[i];
        if (a.jobLevel === "INTERVIEW") {
            interviewJobs.push(a);
        }
    }

    section = interviewBtn.innerText;
    
    interviewBtn.classList.add("blue");
    allBtn.classList.remove("blue");
    rejectedBtn.classList.remove("blue");

    interRejectDisplay.classList.remove("none");
    intRejDisplay.innerText = interviewJobs.length;

    dynamicCard(interviewJobs);

    noJobShow();

}

// All section

const allBtn = document.getElementById("all-btn");

function alll() {
    section = allBtn.innerText;

    interviewBtn.classList.remove("blue");
    allBtn.classList.add("blue");
    rejectedBtn.classList.remove("blue");

    interRejectDisplay.classList.add("none");

    dynamicCard(allJobs);
    noJobShow();
}

// rejected btn

const rejectedBtn = document.getElementById("rejected-btn");

const rejectedJobs = [];

function rejected() {
    rejectedJobs.length = 0;
    for (const a of allJobs) {
        if (a.jobLevel === "REJECTED") {
            rejectedJobs.push(a);
        }
    }

    section = rejectedBtn.innerText;

    interviewBtn.classList.remove("blue");
    allBtn.classList.remove("blue");
    rejectedBtn.classList.add("blue");

    interRejectDisplay.classList.remove("none");
    intRejDisplay.innerText = rejectedJobs.length;

    dynamicCard(rejectedJobs);

    noJobShow();

    rejectedCounter.innerText = rejectedJobs.length;
}  




// Making Job Card

function dynamicCard(allJobs) {

    jobCardsSection.innerHTML = "";

    for (const jobInfo of allJobs) {
        // Every Sing Card
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        

        // Company name, Job title and delete icon

        // Card Headline
        const cardHeadline = document.createElement("div");
        cardHeadline.classList.add("card-headline");
        jobCard.appendChild(cardHeadline);

            // div of company name and job title
        const companyAndJobContainer = document.createElement("div");
        cardHeadline.appendChild(companyAndJobContainer);

            // company name
        const companyName = document.createElement("h3");
        companyName.classList.add("company-name");
        companyName.innerText = jobInfo.companyName;
        companyAndJobContainer.appendChild(companyName);

            // job title
        const jobTitle = document.createElement("h4");
        jobTitle.classList.add("job-title");
        jobTitle.innerText = jobInfo.jobTitle;
        companyAndJobContainer.appendChild(jobTitle); 


            // div of delete icon
        const deleteIconContainer = document.createElement("div");
        cardHeadline.appendChild(deleteIconContainer);

        const deleteIcon = document.createElement("img");
        deleteIcon.setAttribute("src", "resourses/Vector.png");
        deleteIcon.setAttribute("data-id", `${jobInfo.id}`)
        deleteIconContainer.appendChild(deleteIcon);


        
        // job type and salary
        const jobTypeSalary = document.createElement("p");
        jobTypeSalary.classList.add("job-type-salary");
        jobTypeSalary.innerText = jobInfo.jobTypeSalary;
        jobCard.appendChild(jobTypeSalary);

        // job level
        const jobLevel = document.createElement("h2");
        jobLevel.classList.add("job-level");
        jobLevel.innerText = jobInfo.jobLevel;
        jobCard.appendChild(jobLevel);

        // job description
        const jobDescription = document.createElement("p");
        jobDescription.classList.add("job-description");
        jobDescription.innerText = jobInfo.jobDescription;
        jobCard.appendChild(jobDescription);


        // green button
        const greenButton = document.createElement("button");
        greenButton.classList.add("green-btn" , "interviewBtn");
        greenButton.setAttribute("data-id", `${jobInfo.id}`);
        greenButton.innerText = jobInfo.greenBtn;
        jobCard.appendChild(greenButton);


        // red button
        const redButton = document.createElement("button");
        redButton.classList.add("red-btn");
        redButton.setAttribute("data-id", `${jobInfo.id}`);
        redButton.innerText = jobInfo.redBtn;
        jobCard.appendChild(redButton);


        if (jobLevel.innerText === "INTERVIEW") {
            jobLevel.style.backgroundColor = "#10B981";
            jobLevel.style.color = "white";
            jobLevel.parentNode.style.borderLeft = "8px solid #10B981"
        } else if (jobLevel.innerText === "REJECTED") {
            jobLevel.style.backgroundColor = "#EF4444";
            jobLevel.style.color = "white";
            jobLevel.parentNode.style.borderLeft = "8px solid #EF4444"
        }


        jobCardsSection.appendChild(jobCard);
    }
}

dynamicCard(allJobs);






// interview btn
jobCardsSection.addEventListener("click", (event) => {
    const btn = event.target.classList[0];
    const id = Number(event.target.dataset.id);
    const index = allJobs.findIndex(obj => obj.id === id);
    
    if (btn === "green-btn") {
        allJobs[index].jobLevel = "INTERVIEW";
        if (section === "All") {
            dynamicCard(allJobs);
        } else if (section === "Rejected") {
            rejected();
        } else if (section === "Interview") {
            interview();
        }
        counter();
    } else if (btn === "red-btn") {
        allJobs[index].jobLevel = "REJECTED";
        if (section === "All") {
            dynamicCard(allJobs);
        } else if (section === "Rejected") {
            rejected();
        } else if (section === "Interview") {
            interview();
        }
        counter();
    }
})


// delete icon
jobCardsSection.addEventListener("click", (event) => {
    const id = Number(event.target.dataset.id);
    const index = allJobs.findIndex(obj => obj.id === id);

    if (event.target.tagName === "IMG") {
        allJobs.splice(index, 1);
        if (section === "All") {
            alll();
        } else if (section === "Rejected") {
            rejected();
        } else if (section === "Interview") {
            interview();
        }

        counter();
    }
})


// NoJobSection
function noJobShow() {

    if (section === "All") {
        if (allJobs.length === 0) {
            document.getElementById("no-job").classList.remove("none");
        } else {
            document.getElementById("no-job").classList.add("none");
        }
    } else if (section === "Rejected" ) {
        if (rejectedJobs.length === 0 ) {
            document.getElementById("no-job").classList.remove("none");
        } else {
            document.getElementById("no-job").classList.add("none");
        }
    } else if (section === "Interview" ) {
        if (interviewJobs.length === 0) {
            document.getElementById("no-job").classList.remove("none");
        } else {
            document.getElementById("no-job").classList.add("none");
        }
    }

}








