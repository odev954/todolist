function InsertButton(listContainer, todoList)
{
    return {
        selectedTask: null,
        todoList: todoList,
        listContainer: listContainer,
        components: {},
        render: function (classList) {
            let button = document.createElement('button');

            button.addEventListener('click', (e) => {
                if(this.selectedTask)
                {
                    listContainer.append(
                        todoList.remove(this.selectedTask.id)
                    );
                }
            });

            this.todoList.components.container.children.forEach((element) => {
                element.focus((event) => {
                    this.selectedTask = event.target;
                });
            })

            button.classList.add(...classList); //style component

            button.textContent = 'Remove selected task';

            this.components.button = button;

            return this.components.button;
        }
    }
}