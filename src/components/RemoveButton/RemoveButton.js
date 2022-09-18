function RemoveButton(listContainer, todoList)
{
    return {
        selectedTask: null,
        todoList: todoList,
        listContainer: listContainer,
        components: {},
        setupClickEvents: function() {
            for(const child of this.todoList?.components.container.children)
            {
                console.log('set ' + child.id);
                child.addEventListener('click', (event) => {
                    this.selectedTask = event.target;
                    console.log(this.selectedTask);
                });
            }
        },
        render: function (classList) {
            let button = document.createElement('button');

            button.addEventListener('click', (e) => {
                if(this.selectedTask)
                {
                    console.log(this.selectedTask);
                    listContainer.append(
                        todoList.remove(this.selectedTask.id)
                    );
                    this.setupClickEvents();
                }
            });

            this.setupClickEvents();

            button.classList.add(...classList); //style component

            button.textContent = 'Remove selected task';

            this.components.button = button;

            return this.components.button;
        }
    }
}