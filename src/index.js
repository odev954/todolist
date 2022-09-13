function main()
{
    container = document.getElementById('mainPanel');

    conatiner.appendChild(TaskStatusButton().render(
        {
            ongoing: '',
            done: ''
        }
    ));
}

main()