function TaskList()
{
    return {
        idCounter: 0,
        list: [],
        add: function(task) {
            this.list.push({ id: this.idCounter, task: task });
            this.idCounter++;
        },
        remove: function(id) {
            this.list = this.list.filter(function(item) {
                return item.id !== id;
            });
        },
        render: function(classList) {
            let container = document.createElement('div');

            container.setAttribute('id', 'todolist');
            this.list.forEach(function(item) {
                //TODO: add styles to render
                container.appendChild(item.render(container.getAttribute('id'), ''));
            });

            container.classList.add(...classList); //style component
        }
    }
}