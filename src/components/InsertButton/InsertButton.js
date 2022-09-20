function InsertButton(listContainer, todoList)
{
    return {
        todoList: todoList,
        listContainer: listContainer,
        components: {},
        render: function (classList) {
            let button = document.createElement('button');

            button.addEventListener('click', (e) => {
                listContainer.append(
                    todoList.add(
                        Task('Do something...', 
                            'New Task', 
                            new Date(Date.now()), 
                            completed=false, 
                            taskList=todoList)
                    )
                );
            });

            button.classList.add(...classList); //style component

            button.textContent = 'Add new task';

            this.components.button = button;

            return this.components.button;
        }
    }
}