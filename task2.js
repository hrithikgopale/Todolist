// Wait for the window to load
window.addEventListener('load', () => {
    // Get form and input elements
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    // Add event listener to form
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get task from input
        const task = input.value;

        // Check if task is empty
        if (task.trim() === "") {
            alert("Please enter a valid task!");
            return;
        }

        // Create task element
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        // Create task content element
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        // Append content element to task element
        task_el.appendChild(task_content_el);

        // Create input element for task content
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        // Append input element to content element
        task_content_el.appendChild(task_input_el);

        // Create actions element
        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');
        
        // Create edit button
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        // Create delete button
        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        // Append buttons to actions element
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        // Append actions element to task element
        task_el.appendChild(task_actions_el);

        // Append task element to task list
        list_el.appendChild(task_el);

        // Clear input field
        input.value = '';

        // Add event listener to edit button
        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

        // Add event listener to delete button
        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });
    });
});
