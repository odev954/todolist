function TaskList()
{
    return {
        idCounter: 0,
        dragTarget: '',
        dragSource: '',
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

            return this.render(this.components.container.classList);
        },
        render: function(classList) {
            let container = document.createElement('div');

            container.setAttribute('id', 'todolist');
            this.tasks.forEach((item) => {
                let renderedTask = item.task.render(['task-card']);
                
                renderedTask.setAttribute('id', item.id);

                renderedTask.addEventListener('dragstart', (event) => {
                    this.dragSource = event.target.id;
                });

                renderedTask.addEventListener("dragenter", (event) => {
                    this.dragTarget = event.target.id; 
                    console.log('Drag enter: ' + this.dragTarget); 
                    event.preventDefault();                 
                });
                
                renderedTask.addEventListener("dragover", (event) => {
                    event.preventDefault();             
                });
                
                renderedTask.addEventListener("drop", (event) => {
                    console.log('Drag drop: ' + this.dragTarget);
                    this.onTaskDrop(event);
                });
                
                container.append(renderedTask);
            });

            container.classList.add(...classList); //style component

            this.components.container = container;

            return this.components.container;
        },
        onTaskDrop: function (event) {
            console.log("target: " + this.dragSource + 
            "\ntransferred: " + this.dragTarget);
            const renderedList = this.reposition(this.dragSource, this.dragTarget);
            const parentNode = document.getElementById(this.components.container.id)?.parentNode;

            document.getElementById(this.components.container.id)?.remove();
            parentNode.append(renderedList);
            
            event.preventDefault();
        }
    }
}