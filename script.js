// Sample Data
const tasks = [
    { id: 1, name: "الواجب", station: "الأولى (المراقبة والاتصال)", level: "الأول" , number: "2-1-2001-1-002"},
    { id: 2, name: "الواجب", station: "الثانية (الملاحة)", level: "الأول", number: "2-1-2001-1-002" },
    { id: 3, name: "الواجب", station: "الثالثة (الأسلحة الفردية والقنابل اليدوية والألغام الأرضية)", level: "الرابع", number: "2-1-2001-1-002" },
    { id: 4, name: "الواجب", station: "الرابعة (المحافظة على البقاء)", level: "الثالث", number: "2-1-2001-1-002" },
    { id: 5, name: "الواجب", station: "الخامسة (الوقاية من الهجوم النووي والبيولوجي والإشعاعي والكيماوي)", level: "الثاني", number: "2-1-2001-1-002" },
    { id: 6, name: "الواجب", station: "الثامنة (الإدارة والتنظيم)", level: "الثاني", number: "2-1-2001-1-002" },
    { id: 7, name: "الواجب", station: "السابعة (قوانين الحرب وتداول الموتى)", level: "الثاني", number: "2-1-2001-1-002" },
    { id: 8, name: "الواجب", station: "السادسة (تقديم الإسعافات الأولية)", level: "الثاني", number: "2-1-2001-1-002" },

];

// DOM Elements
const tasksContainer = document.querySelector(".tasks-container");
const sortByStationButton = document.getElementById("sort-by-station");
const sortByLevelButton = document.getElementById("sort-by-level");

// Function to render tasks
function renderTasks(tasks) {
    tasksContainer.innerHTML = ""; // Clear existing tasks
    const taskList = document.createElement("ul");
    taskList.classList.add("task-list");

    tasks.forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
            <h3>${task.name}</h3>
            <p><strong>المحطة:</strong> ${task.station}</p>
            <p><strong>المستوى المهاري:</strong> ${task.level}</p>
            <p><strong>الرقم التسلسلي:</strong> ${task.number}</p>

        `;
        taskList.appendChild(taskItem);
    });

    tasksContainer.appendChild(taskList);
}

// Sort by Station
sortByStationButton.addEventListener("click", () => {
    const stationOrder = ["الأولى (المراقبة والاتصال)", "الثانية (الملاحة)", "الثالثة (الأسلحة الفردية والقنابل اليدوية والألغام الأرضية)", "الرابعة (المحافظة على البقاء)", "الخامسة (الوقاية من الهجوم النووي والبيولوجي والإشعاعي والكيماوي)", "السادسة (تقديم الإسعافات الأولية)", "السابعة (قوانين الحرب وتداول الموتى)", "الثامنة (الإدارة والتنظيم)"];
    const sortedTasks = tasks.sort((a, b) => stationOrder.indexOf(a.station) - stationOrder.indexOf(b.station));
    renderTasks(sortedTasks);
});

// Sort by Level
sortByLevelButton.addEventListener("click", () => {
    const levelOrder = ["الأول", "الثاني", "الثالث", "الرابع"];
    const sortedTasks = tasks.sort((a, b) => levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level));
    renderTasks(sortedTasks);
});

// Initial Render
renderTasks(tasks);