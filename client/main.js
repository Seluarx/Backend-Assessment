const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton");

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

fortuneBtn.addEventListener('click', getFortune);

const goalInput = document.getElementById("goalInput");
const goalBtn = document.getElementById("goalButton");

const submitGoal = () => {
    const goal = goalInput.value;
    axios.post("http://localhost:4000/api/goals", { goal })
        .then(res => {
            alert(`Goal "${goal}" has been submitted!`);
        });
};

goalBtn.addEventListener('click', submitGoal);

const goalSelect = document.getElementById("goalSelect");
const deleteBtn = document.getElementById("deleteButton");

const populateGoals = () => {
    axios.get("http://localhost:4000/api/goals")
        .then(res => {
            const goals = res.data;
            goalSelect.innerHTML = '';
            goals.forEach
        });
    }
    const quoteBtn = document.getElementById("quoteButton");

    const getQuote = () => {
        axios.get("http://localhost:4000/api/quote/")
            .then(res => {
                const data = res.data;
                alert(data);
        });
    };
    
    quoteBtn.addEventListener('click', getQuote);
    