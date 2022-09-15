function TaskList()
{
    return {
        idCounter: 0,
        tasks: [],
        components: {},
        add: function(task) {
            this.tasks.push({ id: this.idCounter, task: task });
            this.idCounter++;

            document.getElementById(this.components.container.id)?.remove();
            return this.render(this.components.container.classList);
        },
        remove: function(id) {
            this.tasks = this.tasks.filter(function(item) {
                return item.id !== id;
            });

            document.getElementById(this.components.container.id)?.remove();
            return this.render(this.components.container.classList);
        },
        render: function(classList) {
            let container = document.createElement('div');

            container.setAttribute('id', 'todolist');
            this.tasks.forEach(function(item) {
                let renderedTask = item.task.render(['task-card']);
                
                renderedTask.setAttribute('id', 'task'.concat(item.id));
                container.append(renderedTask);
            });

            container.classList.add(...classList); //style component

            this.components.container = container;

            return this.components.container;
        }
    }
}