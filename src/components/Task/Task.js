function Task(description, title, due, completed) 
{
    return {
        description: description,
        title: title,
        due: due,
        completed: completed,
        view: function (parentElementId, classList)
        {
            container = document.createElement('div');
            title = document.createElement('h2');
            description = document.createElement('p');
            due = document.createElement('p');
            //statusButton = TaskStatusButton(completed=completed);

            container.classList.add(...classList); //style component
            
            //set content
            if(this.due instanceof Date)
            {
                due.textContent = this.due.toDateString();
            }
            title.textContent = this.title;
            description.textContent = this.description;
            
            container.appendChild(title);
            container.appendChild(description);
            container.appendChild(due);
            //container.appendChild(statusButton);
            document.getElementById(parentElementId).appendChild(container);
        }
    }
}