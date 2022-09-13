function Task(description, title, due, completed) 
{
    return {
        description: description,
        title: title,
        due: due,
        completed: completed,
        view: function (taskData, parentElementId, classList)
        {
            container = document.createElement('div');
            container.classList.add(...classList);

            document.getElementById(parentElementId).appendChild(container);
        }
    }
}