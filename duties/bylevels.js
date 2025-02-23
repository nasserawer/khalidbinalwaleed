// Sample Data
const tasks = [
    { id: 1, name: "التبليغ عن معلومات تكون ذات أهمية للاستخبارات", station: "الأولى (المراقبة والاتصال)", level: "الأول", number: "2-1-2001-1-001" },
    { id: 2, name: "استخدام معدات الاتصال السلكية واللاسلكية", station: "الأولى (المراقبة والاتصال)", level: "الأول", number: "2-1-2001-1-002" },
    { id: 3, name: "تنفيذ الاتصالات السلكية واللاسلكية", station: "الأولى (المراقبة والاتصال)", level: "الأول", number: "2-1-2001-1-003" },
    { id: 4, name: "التعرف على الرموز الطبوغرافية الموجودة على الخريطة", station: "الثانية (الملاحة)", level: "الأول", number: "2-1-2001-2-004" },
    { id: 5, name: "المسدس عيار 9", station: "الثالثة (الأسلحة الفردية والقنابل اليدوية والألغام الأرضية)", level: "الأول", number: "2-1-2001-3-012" },
    { id: 6, name: "المسدس الجلوك عيار (9x19) نمساوي", station: "الثالثة (الأسلحة الفردية والقنابل اليدوية والألغام الأرضية)", level: "الأول", number: "2-1-2001-3-013" },
    { id: 7, name: "بندقية ج3", station: "الثالثة (الأسلحة الفردية والقنابل اليدوية والألغام الأرضية)", level: "الأول", number: "2-1-2001-3-015" },
    { id: 8, name: "تنفيذ التموية الغدري", station: "الرابعة (المحافظة على البقاء)", level: "الأول", number: "2-1-2001-4-028" },
    { id: 9, name: "تحديد مكان الألغام بالمجس", station: "الرابعة (المحافظة على البقاء)", level: "الأول", number: "2-1-2001-4-029" },
    { id: 10, name: "الوقاية من المدري بالتلوث الكيمياء", station: "الخامسة (الوقاية من الهجوم النووي والبيولوجي والإشعاعي والكيماوي)", level: "الأول", number: "2-1-2001-5-047" },
    { id: 11, name: "تقرير الإصابة", station: "السادسة (تقديم الإسعافات الأولية)", level: "الأول", number: "2-1-2001-6-068" },
    { id: 12, name: "تنفيذ عمليات القتال طبقًا لقانون الحرب", station: "السابعة (قوانين الحرب وتداول الموتى)", level: "الأول", number: "2-1-2001-7-086" },
];

// DOM Elements
const tasksContainer = document.querySelector(".tasks-container");
const levelButtons = document.querySelectorAll(".level-buttons button");

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

// Filter tasks by level
levelButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedLevel = button.getAttribute("data-level");
        const filteredTasks = tasks.filter(task => task.level === selectedLevel);
        renderTasks(filteredTasks);
    });
});

// Initial Render (Show all tasks)
renderTasks(tasks);