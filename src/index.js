function main()
{
    let container = document.getElementById('test');
    let test = Task('testing this shit', 'test', new Date(Date.now()))
            .render(container.id, ['task-card']);
    //container.append(test);
}

main()