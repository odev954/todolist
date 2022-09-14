function Task(description, title, due) 
{
    return {
        description: description,
        title: title,
        due: due,
        render: function (parentElementId, classList)
        {
            let container = document.createElement('div');
            let title = document.createElement('h2');
            let description = document.createElement('p');
            let due = document.createElement('p');
            let statusButton = TaskStatusButton();

            container.classList.add(...classList); //style component
            
            //set content
            if(this.due instanceof Date)
            {
                due.textContent = "Due: ".concat(this.due.toDateString());
            }
            title.textContent = this.title;
            description.textContent = this.description;

            title.setAttribute('contenteditable', 'true');
            description.setAttribute('contenteditable', 'true');
            due.setAttribute('contenteditable', 'true');
            
            container.append(title);
            container.append(description);
            container.append(due);
            container.append(statusButton.render(
                {
                    ongoing: ["status","negative", "text"],
                    done: ["status","positive", "text"],
                }
            ));
            document.getElementById(parentElementId).append(container);
        }
    }
}