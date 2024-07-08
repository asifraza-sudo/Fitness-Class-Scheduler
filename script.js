document.addEventListener('DOMContentLoaded', function() {
    const classList = document.getElementById('class-list');
    const schedule = document.getElementById('schedule');
    const avatarImg = document.getElementById('avatar');
    const changeAvatarBtn = document.getElementById('change-avatar');
    const setReminderBtn = document.getElementById('set-reminder');
    const reminderInput = document.getElementById('reminder-datetime');

    flatpickr(reminderInput, {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
    });

    function addToSchedule(event) {
        const selectedClass = event.target.dataset.class;
        if (selectedClass) {
            const classItem = event.target.cloneNode(true);
            classItem.classList.remove('class-item');
            classItem.classList.add('schedule-item');
            classItem.removeAttribute('data-class');
            schedule.appendChild(classItem);
            event.target.style.opacity = '0'; 
            setTimeout(() => {
                event.target.style.display = 'none';
            }, 300); 
        }
    }

    function changeAvatar() {
        const newAvatarUrl = prompt('Enter new avatar image URL:');
        if (newAvatarUrl) {
            avatarImg.src = newAvatarUrl;
        }
    }

    classList.addEventListener('click', addToSchedule);

    changeAvatarBtn.addEventListener('click', changeAvatar);

    setReminderBtn.addEventListener('click', function() {
        const reminderDateTime = reminderInput.value;
        if (reminderDateTime) {
            alert(`Reminder set for: ${reminderDateTime}`);
        } else {
            alert('Please select a date and time for the reminder.');
        }
    });
});