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
            this.tasks = this.tasks.filter((item) => {
                return item.id != id
            });

            document.getElementById(this.components.container.id)?.remove();
            return this.render(this.components.container.classList);
        },
        reposition: function(sourceId, destinationId) {
            let sourcePosition = this.tasks.findIndex((item) => sourceId == item.id);
            let destinationPosition = this.tasks.findIndex((item) => destinationId == item.id);

            this.tasks.splice(destinationPosition, 0, this.tasks[sourcePosition]);
            this.tasks.splice(sourcePosition + 1, 1);

            document.getElementById(this.components.container.id)?.remove();
            return this.render(this.components.container.classList);
        },
        render: function(classList) {
            let container = document.createElement('div');

            container.setAttribute('id', 'todolist');
            this.tasks.forEach(function(item) {
                let renderedTask = item.task.render(['task-card']);
                
                renderedTask.setAttribute('id', item.id);

                renderedTask.addEventListener("dragenter", (event, target) => {
                    this.onTaskDrop(event, target);
                });
                
                renderedTask.addEventListener("dragover", (event, target) => {
                    this.onTaskDrop(event, target);
                });
                
                container.append(renderedTask);
            });

            container.classList.add(...classList); //style component

            this.components.container = container;

            return this.components.container;
        },
        onTaskDrop: function (event, target) {
            const renderedList = this.reposition(event.target.id, target.id);

            this.components.container.parentElement.append(renderedList);
            
            event.preventDefault();
        }
    }
}