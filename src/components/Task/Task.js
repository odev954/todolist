function Task(description, title, due) 
{
    return {
        description: description,
        title: title,
        due: due,
        components: {},
        render: function (classList)
        {
            let container = document.createElement('div');
            let title = TextField(text=this.title);
            let description = TextField(text=this.description);
            let due = TextField(this.due instanceof Date ?  
                "Due: ".concat(this.due.toDateString()) : '');
            let statusButton = TaskStatusButton();

            container.setAttribute("draggable", "true");
            container.classList.add(...classList); //style component
            
            container.append(
                title.render('h2'), 
                description.render(),
                due.render(),
                statusButton.render(
                    {
                        ongoing: ["status","negative", "text"],
                        done: ["status","positive", "text"],
                    }
                )
            );

            this.components.title = title;
            this.components.description = description;
            this.components.due = due;
            this.components.status = statusButton;
            this.components.container = container;
            
            return this.components.container;
        }
    }
}