const allJobs = [{
    id: 1,
    companyName: "Mobile First Corp",
    jobTitle: "React Native Developer",
    jobTypeSalary: "Remote • Full-time • $130,000 - $175,000",
    jobLevel: "NOT APPIED",
    jobDescription: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    greenBtn: "INTERVIEW",
    redBtn: "REJECTED"
}, {
    id: 2,
    companyName: "WebFlow Agency",
    jobTitle: "Web Designer & Developer",
    jobTypeSalary: "Los Angeles, CA • Part-time • $80,000 - $120,000",
    jobLevel: "NOT APPIED",
    jobDescription: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    greenBtn: "INTERVIEW",
    redBtn: "REJECTED"
}, {
    id: 3,
    companyName: "DataViz Solutions",
    jobTitle: "Data Visualization Specialist",
    jobTypeSalary: "Boston, MA • Full-time • $125,000 - $165,000",
    jobLevel: "NOT APPIED",
    jobDescription: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    greenBtn: "INTERVIEW",
    redBtn: "REJECTED"
}];


const jobCardsSection = document.getElementById('job-cards-section');

// Making Job Card

function dynamicCard() {

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

dynamicCard();


// interview btn
jobCardsSection.addEventListener("click", (event) => {
    const btn = event.target.classList[0];
    const id = Number(event.target.dataset.id);
    const index = allJobs.findIndex(obj => obj.id === id);
    
    if (btn === "green-btn") {
        allJobs[index].jobLevel = "INTERVIEW";
        dynamicCard();
    } else if (btn === "red-btn") {
        allJobs[index].jobLevel = "REJECTED";
        dynamicCard();
    }
})



