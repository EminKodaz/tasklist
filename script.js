window.addEventListener('load', () =>  {
const form = document.querySelector(".new-task-form");
const input = document.querySelector(".new-task-input");
const task = document.querySelector(".babaLi");
const submitDOM = document.querySelector(".submit-button")

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskValue = input.value;

        submitDOM.addEventListener('click', () => {
            input.focus();
        });

        if (taskValue) {

        const task_buttons = document.createElement("div");
        task_buttons.classList.add("task-buttons")    

        const task_div = document.createElement("div");
        task_div.classList.add("task-text")    

        task_buttons.appendChild(task_div);
        
        const task_input = document.createElement("input")
        task_input.classList.add("task-in-text")
        task_input.value = taskValue;
        task_input.type = "text";
        task_input.setAttribute("readonly", "readonly")    
        task_div.appendChild(task_input);

        const actions_el = document.createElement("div")
        actions_el.classList.add("actions")
        
        const check_box = document.createElement("input");
        check_box.type = "checkbox";
        check_box.value = false;
        check_box.classList.add("checkbox-button")
        

        const del_but = document.createElement("button")
        del_but.classList.add("del-button")
        del_but.innerHTML = "X"
        
        actions_el.appendChild(del_but);
        actions_el.appendChild(check_box);
        task_div.appendChild(actions_el);    
        
        task.appendChild(task_buttons);

        input.value = "";

        

        del_but.addEventListener('click', () => {
            task.removeChild(task_buttons);
        })    
        } else if (!taskValue) {
            alert("boş yazma")
        }    
        

        





    });

});


